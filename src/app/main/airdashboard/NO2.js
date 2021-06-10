import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

class NO2 extends Component {

    componentDidMount() {
        // this.refreshData();
    }

    refreshData = () => {
        const url = "air/get-a-recent-reading/1";

        this.props.getARecentReading();
    }

    render() {
        const { no2 } = this.props;
        return (                                                                      // {backgroundColor: no2<0.053 ? "#f1c40f" : 0 }}
            <Paper className="w-full rounded-8 border-1" style={no2<0.053 ? {backgroundColor:"#00E000"} : no2<0.1 ? {backgroundColor:"#FFFF00"} : no2<0.36 ? {backgroundColor:"#FF7600"} : no2<0.65 ? {backgroundColor:"#FF0000"} : no2<1.24 ? {backgroundColor:"#990049"} : no2<1.64 ? {backgroundColor:"#7E0023"} : no2>1.64 ? {backgroundColor:"#3E0023"} : {} } >
                {this.props.user.role[0] !== "fleet" &&
                <div className="flex items-center justify-end pr-4 pl-16 pt-4">
                    <IconButton aria-label="more" onClick={this.refreshData}>
                        <Icon>refresh</Icon>
                    </IconButton>
                </div>
                }
                <div className="text-center pt-12 pb-28" style={{overflow: "auto"}}>
                    <Typography
                        className="text-56 leading-none text-purple-dark">{no2 ? no2 : 0}</Typography>
                        ppm
                    <Typography className="text-16" color="textSecondary"><h1>NO2</h1></Typography>
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
        no2: AirDashboardApp.AirDashboardReducer.no2,
        user: auth.user
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(NO2)
);
