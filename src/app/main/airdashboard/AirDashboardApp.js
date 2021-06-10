/** @format */

import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import {FusePageSimple} from "@fuse";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import withReducer from "app/store/withReducer";
import _ from "@lodash";
import AirDashboardList from "./AirDashboardList";
import AirDashboardHeader from "./AirDashboardHeader";
import * as Actions from "./store/actions";
import reducer from "./store/reducers";
import "./style.css";

class AirDashboardApp extends Component {
    componentDidMount() {
        this.props.getRecentAQI();
        this.props.getARecentReading();
    }

    componentDidUpdate(prevProps, prevState) {
        if (!_.isEqual(this.props.location, prevProps.location)) {
            this.props.getRecentAQI();
            this.props.getARecentReading();
        }
    }

    render() {
        return (
            <React.Fragment>
                <FusePageSimple
                    header={
                        <AirDashboardHeader pageLayout={() => this.pageLayout}/>
                    }
                    content={<AirDashboardList/>}
                    sidebarInner
                    onRef={(instance) => {
                        this.pageLayout = instance;
                    }}
                    innerScroll={false}
                />
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getARecentReading: Actions.getARecentReading,
            getRecentAQI: Actions.getRecentAQI
        },
        dispatch
    );
}

function mapStateToProps({AirDashboardApp}) {
    return {
        airdashboards: AirDashboardApp.AirDashboardReducer.entities
    };
}

export default withReducer(
    "AirDashboardApp",
    reducer
)(
    withStyles({withTheme: true})(
        withRouter(connect(mapStateToProps, mapDispatchToProps)(AirDashboardApp))
    )
);
