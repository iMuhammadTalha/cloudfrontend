/** @format */

import axios from "axios";
import { Base_URL } from "../../../../server";
import { showMessage } from "app/store/actions/fuse";
import { authRoles } from "app/auth";
import store from "app/store";
export const GET_ALL_GRAPHS = "[GRAPHS APP] GET GRAPHS";

let selectedSearch = {
    nodeId: 1
};

export function getAllGraphs() {
    return getGraphsData();
}

export const getGraphsData = () => (dispatch) => {
    
    
    let query = "air/get-aqi-graph/" +selectedSearch.nodeId ;
    
    
    axios
        .get(Base_URL + query)
        .then((res) => {
            console.log('RESPONSE',res.data);
            dispatch({
                type: GET_ALL_GRAPHS,
                payload: res.data,
            });

            return {};
        })
        .catch((err) => {
            dispatch(
                showMessage({
                    message: "Unable to get graphs...",
                    variant: "error"
                })
            );
        });
};


export function searchReading(state) {
    if (state.nodeId === "") {
        state.nodeId = 1;
    }
    
    selectedSearch = state;

    return getGraphsData();
}