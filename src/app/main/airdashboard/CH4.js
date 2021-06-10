import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

class ch4 extends Component {

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {


        this.props.getARecentReading();
    }

    render() {
        const { ch4 } = this.props;
        return (
            <Paper className="w-full rounded-8 border-1" style={ch4<50 ? {backgroundColor:"#00E000"} : ch4<100 ? {backgroundColor:"#FFFF00"} : ch4<150 ? {backgroundColor:"#FF7600"} : ch4<200 ? {backgroundColor:"#FF0000"} : ch4<300 ? {backgroundColor:"#990049"} : ch4<400 ? {backgroundColor:"#7E0023"} : ch4>400 ? {backgroundColor:"#3E0023"} : {} }>
                <div className="flex items-center pr-4 pl-16 pt-4">
                {/* <h3>{ch4<50 ? 'Good' : ch4<150 ? 'Moderator' : ch4>150 ? 'Danger' : {}}</h3> */}
                </div>
                <div className="flex items-center justify-end pr-4 pl-16 pt-4">
                    <IconButton aria-label="more" onClick={this.refreshData}>
                        <Icon>refresh</Icon>
                    </IconButton>
                </div>
                
                <div className="text-center pt-12 pb-28" style={{overflow: "auto"}}>
                    <Typography
                        className="text-56 leading-none text-purple-dark">{ch4 ? ch4 : 0}</Typography>
                        ppm
                    <Typography className="text-16" color="textSecondary"><h1>CH4</h1></Typography>
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
        ch4: AirDashboardApp.AirDashboardReducer.ch4,
        user: auth.user
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ch4)
);
