/** @format */

import axios from "axios";
import { Base_URL } from "../../../../server";
import { showMessage } from "app/store/actions/fuse";
import { authRoles } from "app/auth";
import store from "app/store";
export const GET_ALL_AIRS = "[AIRS APP] GET AIRS";

let selectedSearch = {
    nodeId: "Undefined"
};

export function getAllAirs() {
    return getAirsPaginationData(0, 20, "");
}

export const getAirsPaginationData = (page, pageSize, sorted) => (dispatch) => {
    if (isNaN(pageSize)) {
        page = 0;
        sorted = [];
    }
    let sortingName;
    let sortingOrder;
    if (sorted.length === 0 || sorted === "") {
        sortingName = "Undefined";
        sortingOrder = "Undefined";
    } else {
        if (sorted[0].desc) {
            sortingName = sorted[0].id;
            sortingOrder = "DESC";
        } else {
            sortingName = sorted[0].id;
            sortingOrder = "ASC";
        }
    }
    let query = "";
    if(selectedSearch.nodeId=="Undefined"){
        query = "air/get-all-readings/" +
        page +
        "/" +
        pageSize +
        "/" +
        sortingName +
        "/" +
        sortingOrder;
    } else {
        query = "air/get-a-node-all-readings/" +
        selectedSearch.nodeId +
        "/" +
        page +
        "/" +
        pageSize +
        "/" +
        sortingName +
        "/" +
        sortingOrder;
    }
    
    axios
        .get(Base_URL + query)
        .then((res) => {
            console.log('RESPONSE',res.data);
            dispatch({
                type: GET_ALL_AIRS,
                payload: res.data.records,
                pages: res.data.totalPages
            });

            return {};
        })
        .catch((err) => {
            dispatch(
                showMessage({
                    message: "Unable to get airs...",
                    variant: "error"
                })
            );
        });
};


export function searchReading(state) {
    if (state.nodeId === "") {
        state.nodeId = "Undefined";
    }
    
    selectedSearch = state;

    return getAirsPaginationData(0, 20, "");
}