/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import { Table } from '../Table';
import MUIDataTable from "mui-datatables";
import {

  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "../../variables/charts.jsx";
import Header from '../../components/Navbars/DemoNavbar';
import { Modal } from 'antd'
import Spinner from 'react-loader-spinner'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { getMuiTheme } from '../../variables/functions/func'


class EJbulk extends React.Component {
  state = {
    spin: false,
    bulk: false,
    showTable: false,
    csv: '',
    searchBulk: false
  }

  search = () => {
    this.setState({ spin: true })
    setTimeout(() => {
      this.setState({ spin: false, showTable: true })
    }, 2000)
  }

  bulk = () => {
    this.setState({ searchBulk: true })
  }

  searchBulkClose = () => this.setState({ searchBulk: false })

  fileChange = (event) => {
    this.setState({
      csv: event.target.files[0],
    });
  };

  viewTerminalData = () => {

  }

  render() {
    const TerminalsM = [
      {
          name: "Terminal ID",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433' }}>
                {columnMeta.name}
              </th>
            ),
            setCellHeaderProps: (value) => {
              return {
               
                  style: {
                    backgroundColor: 'white',
                  
                    whiteSpace: 'pre',
                    color: '#172433'
                  }
              };
            },
    
          }
        },
        {
    
          name: "Terminal Name",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433' }}>
                {columnMeta.name}
              </th>
            ),
            setCellHeaderProps: (value) => {
              return {
               
                  style: {
                    backgroundColor: 'white',
                    
                    whiteSpace: 'pre',
                    color: '#172433'
                  }
              };
            }
          }
        },
        {
    
          name: "Branch Code",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433' }}>
                {columnMeta.name}
              </th>
            ),
            setCellHeaderProps: (value) => {
              return {
               
                  style: {
                    backgroundColor: 'white',
                    
                    whiteSpace: 'pre',
                    color: '#172433'
                  }
              };
            }
          }
        },
        {
          name:'Till Account',
          options: {
            filter: false,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433' }}>
                {columnMeta.name}
              </th>
            ),
            setCellHeaderProps: (value) => {
              return {
               
                  style: {
                    backgroundColor: 'white',
                    
                    whiteSpace: 'pre',
                    color: '#172433'
                  }
              };
            }
          }
        },
        {
          name: "Atm Type",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433' }}>
                {columnMeta.name}
              </th>
            ),
            setCellHeaderProps: (value) => {
              return {
               
                  style: {
                    backgroundColor: 'white',
                    
                    whiteSpace: 'pre',
                    color: '#172433'
            
                  }
              };
            }
          }
        },
        {
          name: "Status",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433' }}>
                {columnMeta.name}
              </th>
            ),
            setCellHeaderProps: (value) => {
              return {
               
                  style: {
                    backgroundColor: 'white',
                    
                    whiteSpace: 'pre',
                    color: '#172433'
            
                  }
              };
            }
          }
        },
        {
          name: "Action",
          options: {
            filter: false,
            customHeadRender: (columnMeta, updateDirection) => (
            <th
              key={2}
              onClick={() => updateDirection(2)}
              style={{ cursor: "pointer", color: "#172433" }}
            >
              {columnMeta.name}
            </th>
            ),
            sort: false,
            empty: true,
            customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <>
                <Button
                onClick={this.viewTerminalData.bind(this, tableMeta)}
                className="mt-0 mb-0"
                color="info"
                >
                <i className="fa fa-eye" />
                </Button>
              
              </>
            );
            },
          },
          }
          
        ];
        
    const options = {
      filterType: "dropdown",
      selectableRows: true,
      responsive: "scroll",
      setRowProps: (row) => {
        return {
          style: { whiteSpace: "nowrap" },
        };
      },
    };
    return (
      <>
        <div>
          <Card className="card-stats pt-5">
            <CardBody>
              <Row className="pt-0">
                <Col md="12">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-info pt-1 pl-2">
                      <a href="/admin/dashboard">EJ Content Manager </a>/{" "}
                      <span>EJ Bulk Search</span>
                    </p>
                    <div className="d-flex justify-content-end">
                      <Button color="info" size="sm" onClick={this.bulk}>
                        {" "}
                          search bulk{" "}
                        <span className="mt-1 fa fa-search" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col />
              </Row>
            </CardBody>
          </Card>
          <div className="content ml-4 mr-4">



            <div>
              {this.state.spin &&
                <div className="spinn">
                  <Spinner type="ThreeDots" className="text-center" color="#6D9FBB"
                  /> </div>}
              {this.state.showTable &&
                <MuiThemeProvider theme={getMuiTheme()}>
                  <MUIDataTable
                    title={"EJ BULK SEARCH"}
                    data={this.dataSet}
                    columns={TerminalsM}
                    options={options}
                  />
                </MuiThemeProvider>}
            </div>

            <Modal
              title="Search Bulk EJ Terminals"
              visible={this.state.searchBulk}
              footer={null}
              onCancel={this.searchBulkClose}
              okText="Update"
              cancelText="Clear"
              maskClosable={false}
            >
              <Form>
                <div className="text center d-flex justify-content-center">
                  <label
                    for="exampleFormControlFile1"
                    className="text-center font-weight-bold"
                  >

                  </label>
                  <input
                    type="file"
                    name="csv"
                    class="form-control-file"
                    onChange={this.fileChange}
                  />
                  <hr />
                  <Button className="mt-5" color="info" size="md" onClick={this.search}>SEARCH</Button>

                </div>

              </Form>
            </Modal>







          </div>


        </div>

      </>
    );
  }
  dataSet = [
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$170,750", "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750", "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000", "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
  ];
}

export default EJbulk;
