/** @format */
import React, { Component } from "react";
import { FuseAnimate } from "@fuse";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactTable from "react-table";
import * as Actions from "./store/actions";
import "react-table/react-table.css";

class AirList extends Component {
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
        const { airs, getAirsPaginationData, totalPages } = this.props;
        let data = airs;

        if (!Array.isArray(data)) {
            data=[]
        }

        return (
            <FuseAnimate animation="transition.slideUpIn" delay={300}>
                <ReactTable
                    className="-striped -highlight border-0"
                    data={data}
                    columns={[
                        // {
                        //     Header: 'ID',
                        //     accessor: 'id',
                        //     filterable: false,
                        //     className: 'justify-center font-bold'
                        // },
                        {
                            Header: 'Time',
                            accessor: 'created_time',
                            id: 'created_time',
                            width: 150,
                            // accessor: d => {
                            //     return moment(d.created_time)
                            //         // .local()
                            //         .format("DD-MM-YYYY hh:mm:ss")
                            // },
                            filterable: false,
                            className: 'justify-center font-bold'
                        },
                        
                        {
                            Header: 'Dust (ug/m)',
                            accessor: 'dust',
                            filterable: false,
                            className: 'justify-center font-bold',
                            // getProps: (state, rowInfo) => {
                            //     if (rowInfo && rowInfo.row) {
                            //       return {
                            //         style: {
                            //           background:
                            //           rowInfo.row.dust < 12 ? "#00E000" : rowInfo.row.dust < 35.4 ? "#FFFF00": rowInfo.row.dust < 55.4 ? "#FF7600": rowInfo.row.dust < 150.4 ? "#FF0000": rowInfo.row.dust < 250.4 ? "#990049": rowInfo.row.dust < 350.4 ? "#7E0023": rowInfo.row.dust > 350.4 ? "#3E0023" : null  
                            //           }
                            //       };
                            //     } else {
                            //       return {};
                            //     }
                            //   },
                        },
                        
                        
                        {
                            Header: 'CO2 (ppm)',
                            accessor: 'co2',
                            filterable: false,
                            className: 'justify-center font-bold',
                            // getProps: (state, rowInfo) => {
                            //     if (rowInfo && rowInfo.row) {
                            //       return {
                            //         style: {
                            //           background:
                            //           rowInfo.row.co2 < 1000 ? "#00E000" : rowInfo.row.co2 < 2000 ? "#FFFF00": rowInfo.row.co2 < 5000 ? "#FF7600": rowInfo.row.co2 < 10000 ? "#FF0000": rowInfo.row.co2 < 20000 ? "#990049": rowInfo.row.co2 <= 40000 ? "#7E0023": rowInfo.row.co2 > 40000 ? "#3E0023" : null  
                            //           }
                            //       };
                            //     } else {
                            //       return {};
                            //     }
                            //   },
                        },
                        {
                            Header: 'Humidity (%)',
                            accessor: 'humidity',
                            filterable: false,
                            className: 'justify-center font-bold'
                        },
                        {
                            Header: 'Temperature (Celsius)',
                            accessor: 'temperature',
                            filterable: false,
                            className: 'justify-center font-bold'
                        }
                    ]}
                    defaultPageSize={20}
                    resizable={true}
                    noDataText="No iot data found"
                    showPagination={true}
                    showPaginationTop={false}
                    showPaginationBottom={true}
                    pages={totalPages}
                    pageSizeOptions={[20, 25, 50, 100]}
                    pageSize={this.state.pageSize}
                    page={this.state.page}
                    sorted={this.state.sorted}
                    onPageChange={(page) => this.setState({ page: page })}
                    onPageSizeChange={(pageSize, page) => {
                        this.setState({ pageSize: pageSize, page: page });
                    }}
                    onSortedChange={(val) => {
                        this.setState({ sorted: val });
                    }}
                    manual
                    onFetchData={(state, instance) => {
                        getAirsPaginationData(
                            state.page,
                            state.pageSize,
                            state.sorted
                        );
                    }}
                />
            </FuseAnimate>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getAirsPaginationData: Actions.getAirsPaginationData
        },
        dispatch
    );
}

function mapStateToProps({ AirApp }) {
    return {
        airs: AirApp.AirReducer.entities,
        totalPages: AirApp.AirReducer.pages,
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AirList)
);
