/** @format */
import React, { Component } from "react";
import { FuseAnimate } from "@fuse";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactTable from "react-table";
import { FuseAnimateGroup } from "@fuse";

import * as Actions from "./store/actions";
import RecentAQI from "./RecentAQI";
import CH4 from "./CH4";
import NO2 from "./NO2";
import NH3 from "./NH3"
import CO from "./CO"
import CO2 from "./CO2"
import Dust from "./dust"
import Humidity from "./humidity";
import Temperature from "./temperature"
import Legend from "./legend";

class AirDashboardList extends Component {
    state = {
        page: 0,
        pageSize: 20,
        sorted: [
            {
                id: "id",
                desc: true
            }
        ]
    };

    render() {
        const { airdashboards, getAirDashboardsPaginationData, totalPages } = this.props;
        let data = airdashboards;

        if (!Array.isArray(data)) {
            data=[]
        }

        return (
            <div className="w-full p-12">
                <FuseAnimateGroup
                    className="flex flex-wrap"
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    
                    <div className="widget flex w-full sm:w-1/2 md:w-2/4 p-12">
                        <CO2 />
                    </div>
                    
                    <div className="widget flex w-full sm:w-1/2 md:w-2/4 p-12">
                        <Dust />
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-2/4 p-12">
                        <Temperature />
                    </div>
                    <div className="widget flex w-full sm:w-1/2 md:w-2/4 p-12">
                        <Humidity />
                    </div>

                    
                </FuseAnimateGroup>
            
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            // getAirDashboardsPaginationData: Actions.getAirDashboardsPaginationData
        },
        dispatch
    );
}

function mapStateToProps({ AirDashboardApp }) {
    return {
        // airdashboards: AirDashboardApp.AirDashboardReducer.entities,
        // totalPages: AirDashboardApp.AirDashboardReducer.pages,
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AirDashboardList)
);
