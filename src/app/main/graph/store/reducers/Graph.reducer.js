/** @format */

import * as Actions from "../actions";

const initialState = {
    routeParams: {},
    nh3Avg: [],
    coAvg: [],
    no2Avg: [],
    ch4Avg: [],
    co2Avg: [],
    dustAvg: [],
    humitidyAvg: [],
    temperatureAvg: [],
    dates: [],
    AQIAvg: []
};

const GraphReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ALL_GRAPHS: {
            return {
                ...state,
                nh3Avg: action.payload.nh3Avg,
                coAvg: action.payload.coAvg,
                no2Avg: action.payload.no2Avg,
                ch4Avg: action.payload.ch4Avg,
                co2Avg: action.payload.co2Avg,
                dustAvg: action.payload.dustAvg,
                humitidyAvg: action.payload.humitidyAvg,
                temperatureAvg: action.payload.temperatureAvg,
                dates: action.payload.dates,
                AQIAvg: action.payload.AQIAvg
            };
        }
        default: {
            return state;
        }
    }
};

export default GraphReducer;
