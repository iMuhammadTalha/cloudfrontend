import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

class co extends Component {

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {


        this.props.getARecentReading();
    }

    render() {
        const { co } = this.props;
        return (
            <Paper className="w-full rounded-8 border-1" style={co<4.4 ? {backgroundColor:"#00E000"} : co<9.4 ? {backgroundColor:"#FFFF00"} : co<12.4 ? {backgroundColor:"#FF7600"} : co<15.4 ? {backgroundColor:"#FF0000"} : co<30.4 ? {backgroundColor:"#990049"} : co<40.4 ? {backgroundColor:"#7E0023"} : co>40.4 ? {backgroundColor:"#3E0023"} : {} }>
                {this.props.user.role[0] !== "fleet" &&
                <div className="flex items-center justify-end pr-4 pl-16 pt-4">
                    <IconButton aria-label="more" onClick={this.refreshData}>
                        <Icon>refresh</Icon>
                    </IconButton>
                </div>
                }
                <div className="text-center pt-12 pb-28" style={{overflow: "auto"}}>
                    <Typography
                        className="text-56 leading-none text-purple-dark">{co ? co : 0}</Typography>
                        ppm
                    <Typography className="text-16" color="textSecondary"><h1>CO</h1></Typography>
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
        co: AirDashboardApp.AirDashboardReducer.co,
        user: auth.user
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(co)
);
