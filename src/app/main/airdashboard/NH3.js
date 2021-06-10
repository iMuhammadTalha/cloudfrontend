import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

class nh3 extends Component {

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {


        this.props.getARecentReading();
    }

    render() {
        const { nh3 } = this.props;
        console.log('NH3',nh3);
        return (
            <Paper className="w-full rounded-8 border-1" style={nh3<200 ? {backgroundColor:"#00E000"} : nh3<400 ? {backgroundColor:"#FFFF00"} : nh3<800 ? {backgroundColor:"#FF7600"} : nh3<1200 ? {backgroundColor:"#FF0000"} : nh3<1800 ? {backgroundColor:"#990049"} : nh3<2000 ? {backgroundColor:"#7E0023"} : nh3>2000 ? {backgroundColor:"#3E0023"} : {} }>
                {this.props.user.role[0] !== "fleet" &&
                <div className="flex items-center justify-end pr-4 pl-16 pt-4">
                    <IconButton aria-label="more" onClick={this.refreshData}>
                        <Icon>refresh</Icon>
                    </IconButton>
                </div>
                }
                <div className="text-center pt-12 pb-28" style={{overflow: "auto"}}>
                    <Typography
                        className="text-56 leading-none text-purple-dark">{nh3 ? nh3 : 0}</Typography>
                        ppm
                    <Typography className="text-16" color="textSecondary"><h1>NH3</h1></Typography>
                </div>
            </Paper>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getARecentReading: Actions.getARecentReading
        },
        dispatch
    );
}

function mapStateToProps({ AirDashboardApp, auth }) {
    return {
        nh3: AirDashboardApp.AirDashboardReducer.nh3,
        user: auth.user
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(nh3)
);
