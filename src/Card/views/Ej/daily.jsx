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
import { Line, Pie,Bar,Radar ,Doughnut} from "react-chartjs-2";
import Tooltip from "@material-ui/core/Tooltip";

// reactstrap components
import {Table} from "../Table";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Button,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
 
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,


  dashboardNASDAQChart
} from "../../variables/charts.jsx";
import {getMuiTheme } from '../../variables/functions/func'

import Searchable from "react-searchable-dropdown";
import  {Modal} from 'antd'
import Header from '../../components/Navbars/DemoNavbar'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import classnames from 'classnames';
import { withStyles} from '@material-ui/core/styles';
import axios from 'axios'


const customStyles = {
  BusinessAnalystRow: {
    '& td': { color:"green", fontWeight: 'bold'}
  },
  BusinessAnalystRow2: {
    '& td': { color:'orange', fontWeight: 'bold'}
  },
  BusinessAnalystRow3: {
    '& td': { color:'red', fontWeight: 'bold'}
  },
  NameCell: {
    fontWeight: 900
  },
};

class DailyPerformance extends React.Component {
    state = {
        choose:  false,
        ej:false,
        daily: [],
        terminal: '',
        info: '',
    }

    setTerminal = () => {
        this.setState({choose: true})
    }

    viewInfo = (id) => {
      const info = id.rowData[11];
      this.setState({info: id.rowData[11]})
      this.setState({ej: true})

    }

    terminal =() => {
      const token = sessionStorage.getItem('token')
      axios
      .get(
        `http://localhost:5000/devicemaintenance-service/api/v1/vendor`,  this.state.terminal,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
          this.setState({
            daily: res.data.result,
          });
        
      });
    }


    viewTerminalclose = () => this.setState({ej: false})
  render() {
    const TerminalsM = [
      {
        name: "Action",
        options: {
          filter: false,
          customHeadRender: (columnMeta, updateDirection) => (
            <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433',whiteSpace:'nowrap', paddingLeft:'2rem' }}>
              {columnMeta.name}
            </th>
          ),
          setCellHeaderProps: (value) => {
            return {
              style: {
                backgroundColor: "white",
                whiteSpace: "pre",
                color: "#172433",
                paddingRight: "90px",
                fontWeight: "bold",
              },
            };
          },
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <>
                <Tooltip title="Explore Incident">
                  <Button
                    onClick={this.viewInfo.bind(this, tableMeta)}
                    color="info"
                    className="mb-1 mb-2"
                    size="sm"
                    style={{ backgroundColor: "#017cc2" }}
                  >
                    <i className="fa fa-dashcube"></i>
                  </Button>
                </Tooltip>
              </>
            );
          },
        },
      },
      {
          name: "Terminal ID",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433',whiteSpace:'nowrap', paddingRight:'1rem' }}>
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
    
          name: "Transaction Date",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433', whiteSpace: 'nowrap',paddingRight:'1rem' }}>
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
    
          name: "Transaction Time",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433', whiteSpace:'nowrap',paddingRight:'1rem' }}>
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
          name:'Amount',
          options: {
            filter: false,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433',whiteSpace:'nowrap',paddingRight:'1rem' }}>
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
          name: "Pan",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433',whiteSpace:'nowrap',paddingRight:'6rem' }}>
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
          name: "Stan",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433',whiteSpace:'nowrap',paddingRight:'3rem' }}>
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
          name: "Transaction Status",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433',whiteSpace:'nowrap',paddingRight:'8rem' }}>
                {columnMeta.name}
              </th>
            ),
            setCellHeaderProps: (value) => {
              return {
               
                  style: {
                    backgroundColor: 'white',
                    paddingRight:'100px',
                    whiteSpace: 'nowrap',
                    color: '#172433'
            
                  }
              };
            }
          }
        },
        {
          name: "Dispense Status",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433',whiteSpace:'nowrap',paddingRight:'2rem' }}>
                {columnMeta.name}
              </th>
            ),
            setCellHeaderProps: (value) => {
              return {
               
                  style: {
                    backgroundColor: 'white',
                    
                    whiteSpace: 'nowrap',
                    color: '#172433'
            
                  }
              };
            }
          }
        },
        {
          name: "Customer Type",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433',whiteSpace:'nowrap' ,paddingRight:'2rem'}}>
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
          name: "ATm Type",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433',whiteSpace:'nowrap',paddingRight:'2rem' }}>
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
          name: "Transaction Information",
          options: {
            filter: true,
            display: 'excluded',
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433',whiteSpace:'nowrap',paddingRight:'2rem' }}>
                {columnMeta.name}
              </th>
            ),
        
          }
        },
        {
          name: "Account Number",
          options: {
            filter: true,
            customHeadRender: (columnMeta, updateDirection) => (
              <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433',whiteSpace:'nowrap' }}>
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
        
          
        ];
      
    const options = {
        filter: true,
        selectableRows: false,
        filterType: "dropdown",
        responsive: "stacked",
        rowsPerPage: 7,
        setRowProps: (row) => {
          return {
            className: classnames(
              {
                [this.props.classes.BusinessAnalystRow]: row[7] === "SUCCESSFUL TRANSACTION"
              },
              {
                [this.props.classes.BusinessAnalystRow2]: row[7] === "SUSPICIOUS: SKIPPED TRANSACTION"

              },
              {
                [this.props.classes.BusinessAnalystRow3]: row[7] === "FAILED TRANSACTION"

              },
              
              

              
              ),
            style: {border: '2px solid #fff', whiteSpace:'nowrap', paddingRight:'10rem'
          
          }
          };
        },
      };

      let outerArray = [];
      let innerArray = [];
      this.state.daily.forEach((res) => {
        let jsObjs = res;
        innerArray = [];
        innerArray.push(jsObjs.terminalid);
        innerArray.push(jsObjs.tranDate);
        innerArray.push(jsObjs.tranTime);
        innerArray.push(jsObjs.amount);
        innerArray.push(jsObjs.pan);
        innerArray.push(jsObjs.stan);
        innerArray.push(jsObjs.tranStatus);
        innerArray.push(jsObjs.dispenseStatus);
        innerArray.push(jsObjs.customerType);
        innerArray.push(jsObjs.transType);
        innerArray.push(jsObjs.transInfo);
        innerArray.push(jsObjs.accountNum);
        outerArray.push(innerArray);
      });
  
   
    return (
      <>
        <div className="">
          <Card className="card-stats pt-5">
            <CardBody>
              <Row className="">
                <Col md="12">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-balck pt-1 pl-2 font-weight-bold">
                      BRANCH CODE: 405
                    </p>
                    <div className="col-md-8 ml-5 pl-5">
                      <div className="d-flex justify-content-center">
                        <div className="col-md-8 pr-0">
                        <Searchable
                      
                      value="" //if value is not item of options array, it would be ignored on mount
                      placeholder="Search Terminal ID" // by default "Search"
                      notFoundText="No result found" // by default "No result found"
                      options={[{
                        value: '1232405E',
                        label: '1232405E'
                    }, 
                    {
                      value: '12324051',
                      label: '12324051'
                  },
                    
                    
                    {
                        value: '12324052',
                        label: '12324052'
                    }]}
                      onSelect={(option) => this.setState({terminal: option.value})}
                      listMaxHeight={200} //by default 140
                    />
                        </div>
                     
               <Button
                        color="info"
                        size="md"
                        onClick={this.terminal}
                        className="mt-0 pt-3 pb-3"
                      >
                        {" "}
                       <span className="mt-0 ml-0 fa fa-search" />
                      </Button>

                      </div>
                   
            
                    </div>
                   
                  </div>
                </Col>
                <Col />
              </Row>
            </CardBody>
          </Card>
        </div>
        <div className="content pt-0 mt-0">
          <Row>
            <Col lg="4" md="4" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Count of Suspicious</p>
                        <CardTitle tag="p">345</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" md="4" sm="3">
              <Card className="card-stats">
                <CardBody>
                  <Row style={{ borderRadius: "0px" }}>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Count of Success</p>
                        <CardTitle tag="p">150</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" md="4" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Count of failures</p>
                        <CardTitle tag="p">23</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">DAILY TERMINAL JOURNAL RECORDS</CardTitle>
                  <p className="card-category">Last 24 Hours performance</p>
                </CardHeader>
                </Card>
                  <MuiThemeProvider theme={getMuiTheme()} className="ml-3 pt-0 mt-0">
                    <MUIDataTable
                      title={"TERMINAL LIST"}
                      data={this.dataSet}
                      columns={TerminalsM}
                      options={options}
                    />
                  </MuiThemeProvider>
              
            </Col>
          </Row>

          <Modal
          title = "View EJ Content"
          visible={this.state.ej}
          onOk={this.handleSearch}
          onCancel={this.viewTerminalclose}
          okText="Submit"
          cancelText="Clear"
          maskClosable = {false}
          footer={null}
          width={600}
          bodyStyle={{background:'whitesmoke'}}
        
        >
           <Card>
            <CardBody style={{ backgroundColor: 'white', borderColor: ' whitesmoke' }} className="reciept">
            <div className="container ml-4 d-flex justify-content-between align-items-center reciept">
            <p className=" pr-1"><span className="font-weight-bold">Terminal ID:</span> 123456</p>
            <p className=" pr-1"><span className="font-weight-bold">Transaction Date: </span>02/04/2020</p>
            <p className=" pr-3"><span className="font-weight-bold">Transaction Time:</span> 16:37PM</p>
            </div>
            <br />
            <div className="ml-4  container d-flex justify-content align-items-center reciept">

            <p className=" pr-5"><span className="font-weight-bold">Transaction Status</span> </p>
            <p className=" pr-5 ml-5"><span className="font-weight-bold">Amount:</span></p>
            </div>
            
            <div className="ml-4  container d-flex justify-content align-items-center reciept">

<p className="pt-0 pr-5"><span className="">TRANSACTION SUCCESSFUL</span> </p>
<p className="ml-0"><span className="">NGN750,000</span> </p>
</div>
            {/* <div className="d-flex justify-content-center align-items-center reciept">

<p className=" pr-3"><span className="font-weight-bold">Transaction Status:</span> </p>
<p className=" pr-3"><span className="font-weight-bold">Amount:</span> NGN750,000</p>
</div> */}
          
            </CardBody>
            </Card>
          
          <p className="text-left text-info font-weight-bold pt-3">RAW EJ CONTENT</p>
          <hr />
          <Card>
            <CardBody style={{ backgroundColor: 'white', borderColor: ' white' }}>
              <div className="reciept">
            
            </div>
        
            </CardBody>
          </Card>
          <hr />

  

          


          <p className="text-left text-info font-weight-bold pt-3">CUSTOMER IMAGE</p>
          <Card>

            <CardBody style={{ backgroundColor: 'white', borderColor: ' white' }}>
            <div className="text-center customerPhoto">
              <p>Photo</p>

           
            
           
           
          </div>

            </CardBody>
          </Card>

          
        </Modal>
        </div>
      </>
    );
  }
  dataSet = [
    ["1232405E", "20200623", "1107", "10000", "539923******6779", "0321","SUCCESSFUL TRANSACTION","WITHDRAW","OFF-US","HYOSUNG","0012345678","0012345678"],
    ["1232405E", "20200623", "1107", "10000", "539923******6779", "0321","SUSPICIOUS: SKIPPED TRANSACTION","WITHDRAW","OFF-US","HYOSUNG","0012345678","0012345678"],
    ["1232405E", "20200623", "1107", "10000", "539923******6779", "0321","FAILED TRANSACTION","WITHDRAW","OFF-US","HYOSUNG","0012345678","0012345678"],

  
  ]
}

export default withStyles(customStyles, {name: "ExampleCard.js"})(DailyPerformance);
