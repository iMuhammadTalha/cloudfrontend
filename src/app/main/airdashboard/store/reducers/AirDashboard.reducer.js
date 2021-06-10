/** @format */

import * as Actions from "../actions";

const initialState = {
    entities: [],
    routeParams: {},
    pages: 0,

    recentAQI: 0,

    created_time: '',
    ch4: 0,
    co: 0,
    dust: 0,
    humidity: 0,
    nh3: 0,
    no2: 0,
    co2: 0,
    temperature: 0
};

const AirDashboardReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ALL_AIRDASHBOARDS: {
            return {
                ...state,
                entities: action.payload,
                pages: action.pages
            };
        }

        case Actions.GET_RECENT_AQI: {
            return {
                ...state,
                recentAQI: action.payload
            };
        }

        case Actions.GET_A_RECENT_READING: {
            return {
                ...state,
                co: action.payload.co,
                ch4: action.payload.ch4,
                nh3: action.payload.nh3,
                dust: action.payload.dust,
                humidity: action.payload.humidity,
                no2: action.payload.no2,
                co2: action.payload.co2,
                temperature: action.payload.temperature,
                created_time: action.payload.created_time
            };
        }
        
        default: {
            return state;
        }
    }
};

export default AirDashboardReducer;
