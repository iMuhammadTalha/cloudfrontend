/** @format */

import React, { Component } from "react";
import { Button, Icon, Paper, MuiThemeProvider, Typography } from "@material-ui/core";
import { FuseAnimate } from "@fuse";
import CsvDownloader from "react-csv-downloader";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "./store/actions";
import _ from "@lodash";

class GraphHeader extends React.Component {
    state = {
        nodeId: 1
    };
    render() {
        const { graphs, mainTheme, searchReading } = this.props;

        return (
            <div className="flex flex-1 items-center justify-between p-8 sm:p-24">
                <div className="flex flex-shrink items-center sm:w-224">
                    <div className="flex items-center">
                        <FuseAnimate
                            animation="transition.expandIn"
                            delay={300}
                        >
                            <Icon className="text-32 mr-12">charts</Icon>
                        </FuseAnimate>
                        <FuseAnimate
                            animation="transition.slideLeftIn"
                            delay={300}
                        >
                            <Typography variant="h6" className="hidden sm:flex">
                                Graph
                            </Typography>
                        </FuseAnimate>
                    </div>
                </div>
    
            </div>
        );
    }

    handleChange = (event) => {
        this.setState(
            _.set(
                {...this.state},
                event.target.name,
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value
            )
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            searchReading: Actions.searchReading
        },
        dispatch
    );
}

function mapStateToProps({ GraphApp, fuse }) {
    return {
        graphs: GraphApp.GraphReducer.entities,
        mainTheme: fuse.settings.mainTheme
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphHeader);
