/** @format */
import React, { Component } from "react";
import { FuseAnimate } from "@fuse";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactTable from "react-table";
import * as Actions from "./store/actions";
import { Chart } from 'react-charts'
import {Line} from 'react-chartjs-2';
import { FuseAnimateGroup } from "@fuse";

import {Paper, Typography} from "@material-ui/core";




class GraphList extends React.Component {
    

    render() {
        const { graphs, dates, AQIAvg, nh3Avg, coAvg, no2Avg, ch4Avg, co2Avg, dustAvg, humitidyAvg, temperatureAvg } = this.props;
        let data = graphs;

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

                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'CO2',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: co2Avg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'CO2 (ug/m)',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>

                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Dust',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: dustAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Dust (ug/m)',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Humitidy',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: humitidyAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Humitidy (%)',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Temperature',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: temperatureAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Temperature (Celsius)',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                </FuseAnimateGroup>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getGraphsData: Actions.getGraphsData
        },
        dispatch
    );
}

function mapStateToProps({ GraphApp }) {
    
    
    return {
        nh3Avg: GraphApp.GraphReducer.nh3Avg,
        coAvg: GraphApp.GraphReducer.coAvg,
        no2Avg: GraphApp.GraphReducer.no2Avg,
        ch4Avg: GraphApp.GraphReducer.ch4Avg,
        co2Avg: GraphApp.GraphReducer.co2Avg,
        dustAvg: GraphApp.GraphReducer.dustAvg,
        humitidyAvg: GraphApp.GraphReducer.humitidyAvg,
        temperatureAvg: GraphApp.GraphReducer.temperatureAvg,
        dates: GraphApp.GraphReducer.dates,
        AQIAvg: GraphApp.GraphReducer.AQIAvg
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(GraphList)
);
