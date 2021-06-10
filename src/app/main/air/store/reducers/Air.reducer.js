/** @format */

import * as Actions from "../actions";

const initialState = {
    entities: [],
    routeParams: {},
    pages: 0
};

const AirReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ALL_AIRS: {
            return {
                ...state,
                entities: action.payload,
                pages: action.pages
            };
        }
        default: {
            return state;
        }
    }
};

export default AirReducer;
