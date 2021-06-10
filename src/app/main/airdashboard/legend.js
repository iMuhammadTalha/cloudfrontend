/** @format */
import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactTable from "react-table";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import ReactSpeedometer from "react-d3-speedometer";

class Legend extends Component {
    componentDidMount() {
        this.props.getRecentAQI();
    }

    refreshData = () => {
        this.props.getRecentAQI();
    };
    getTrProps = (state, rowInfo, instance) => {
        if (rowInfo) {
          return {
            style: {
              background: rowInfo.row.Category == 'Good' ? '#00E000' : rowInfo.row.Category == 'Moderate' ? '#FFFF00' : rowInfo.row.Category == 'Unhealthy for Sensitive' ? '#FF7600': rowInfo.row.Category == 'Unhealthy' ? '#FF0000': rowInfo.row.Category == 'Very Unhealthy' ? '#990049' : rowInfo.row.Category == 'Hazardous' ? '#7E0023' : '#FFFFFF',
              color: 'black'
            }
          }
        }
        return {};
      }
    render() {
        const {recentAQI } = this.props;
        const data = [{
            Gases: 'Nh3',
            Good: '<200',
            Moderate: '200-400',
            UnhealthyForSensitive: '400-800',
            Unhealthy: '800-1200',
            VeryUnhealthy: '1200-1800',
            Hazardous: '1800-2000',
            HighlyDangerous: '2000+'
          },
          {
            Gases: 'CO',
            Good: '<4.4',
            Moderate: '4.4-9.4',
            UnhealthyForSensitive: '9.4-12.4',
            Unhealthy: '12.4-15.4',
            VeryUnhealthy: '15.4-30.4',
            Hazardous: '30.4-40.4',
            HighlyDangerous: '40.4+'
          },
          {
            Gases: 'NO2',
            Good: '<0.053',
            Moderate: '0.053-0.1',
            UnhealthyForSensitive: '0.1-0.36',
            Unhealthy: '0.36-0.65',
            VeryUnhealthy: '0.65-1.24',
            Hazardous: '1.24-1.64',
            HighlyDangerous: '1.64+'
          },
          {
            Gases: 'CH4',
            Good: '<50',
            Moderate: '50-100',
            UnhealthyForSensitive: '100-150',
            Unhealthy: '150-200',
            VeryUnhealthy: '200-300',
            Hazardous: '300-400',
            HighlyDangerous: '400+'
          },
          {
            Gases: 'CO2',
            Good: '<1000',
            Moderate: '1000-2000',
            UnhealthyForSensitive: '2000-5000',
            Unhealthy: '5000-10000',
            VeryUnhealthy: '10000-20000',
            Hazardous: '20000-40000',
            HighlyDangerous: '40000+'
          },
          {
            Gases: 'Dust',
            Good: '<12',
            Moderate: '12-35.4',
            UnhealthyForSensitive: '35.4-55.4',
            Unhealthy: '55.4-150.4',
            VeryUnhealthy: '150.4-250.4',
            Hazardous: '250.4-350.4',
            HighlyDangerous: '350.4+'
          }
        ]

          const columns = [{
            Header: 'Gases',
            accessor: 'Gases',
            width: 170,
            className: 'justify-center font-bold'
          }, {
            Header: 'Good',
            accessor: 'Good',
            width: 170,
            className: 'justify-center font-bold',
            getProps: (state, rowInfo) => {
              if (rowInfo && rowInfo.row) {
                return {
                  style: {
                    background:"#00E000"
                  }
                };
              } else {
                return {};
              }
            },
          }, {
            Header: 'Moderate',
            accessor: 'Moderate',
            className: 'justify-center font-bold',
            getProps: (state, rowInfo) => {
              if (rowInfo && rowInfo.row) {
                return {
                  style: {
                    background:"#FFFF00"
                  }
                };
              } else {
                return {};
              }
            },
          }, {
            Header: 'Unhealthy for Sensitive',
            accessor: 'UnhealthyForSensitive',
            className: 'justify-center font-bold',
            getProps: (state, rowInfo) => {
              if (rowInfo && rowInfo.row) {
                return {
                  style: {
                    background:"#FF7600"
                  }
                };
              } else {
                return {};
              }
            },
          }, {
            Header: 'Unhealthy',
            accessor: 'Unhealthy',
            className: 'justify-center font-bold',
            getProps: (state, rowInfo) => {
              if (rowInfo && rowInfo.row) {
                return {
                  style: {
                    background:"#FF0000"
                  }
                };
              } else {
                return {};
              }
            },
          }, {
            Header: 'Very Unhealthy',
            accessor: 'VeryUnhealthy',
            className: 'justify-center font-bold',
            getProps: (state, rowInfo) => {
              if (rowInfo && rowInfo.row) {
                return {
                  style: {
                    background:"#990049"
                  }
                };
              } else {
                return {};
              }
            },
          }, {
            Header: 'Hazardous',
            accessor: 'Hazardous',
            className: 'justify-center font-bold',
            getProps: (state, rowInfo) => {
              if (rowInfo && rowInfo.row) {
                return {
                  style: {
                    background:"#7E0023"
                  }
                };
              } else {
                return {};
              }
            },
          }, {
            Header: 'Highly Dangerous',
            accessor: 'HighlyDangerous',
            className: 'justify-center font-bold',
            getProps: (state, rowInfo) => {
              if (rowInfo && rowInfo.row) {
                return {
                  style: {
                    background:"#3E0023"
                  }
                };
              } else {
                return {};
              }
            },
          }];
        return (
            
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    {/* <div> */}
                    
                        <ReactTable
                            data={data}
                            columns={columns}
                            defaultPageSize={6}
                            className="-striped -highlight"
                            showPaginationBottom={false}
                            getTrProps={this.getTrProps}
                            // trStyleCallback={ data => ( {color: data.row.Category=='Healthy' ? 'green' : 'red'} ) }

                        />

                    
            </div>
            

            
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getRecentAQI: Actions.getRecentAQI
        },
        dispatch
    );
}

function mapStateToProps({ AirDashboardApp }) {
    // console.log('AVBFDDD',AirDashboardApp.AirDashboardReducer.recentAQI)
    return {
        recentAQI: AirDashboardApp.AirDashboardReducer.recentAQI.aqi
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Legend)
);
