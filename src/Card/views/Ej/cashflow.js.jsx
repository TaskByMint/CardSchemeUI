
import React from "react";
// react plugin used to create charts
import { Line, Pie,Bar,Radar ,Doughnut} from "react-chartjs-2";
// reactstrap components
import axios from 'axios'
import Tooltip from "@material-ui/core/Tooltip";
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "../../variables/charts.jsx";
import { DatePicker} from 'antd';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Button,
  Form, FormGroup, Label, Input, FormText,CardText,UncontrolledAlert,
  Col
 
} from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
import {columnSearchAccount, cycle,  receipt} from '../../variables/columns/cashflow'
import { Helmet } from 'react-helmet'
import Spinner from 'react-loader-spinner'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Modal } from 'antd';
import Header from '../../components/Navbars/DemoNavbar';
import Summary from '../../view/Cashload/summary'
import MUIDataTable from "mui-datatables";
import {getMuiTheme} from '../../variables/functions/func'

class CashLoad extends React.Component {
  state = {
    searchMandate: false,
    searchData: false,
    default: true,
    spin: false,
    api: false,
    buttonModal: false,
    summary: false,
    receiptLoad: false,
    terminalId: '',
    branchCode: '',
    analysisStatus: '',
    cycleStatus: '',
    dateTo: '',
    dateFrom: '',
    completed: [],
    incomplete: [],
    balanced: [],
    unbalanced: [],
    cycleTerminal: []
  }

  searchMandate = (e) => {
    e.preventDefault();
    this.setState({
      searchMandate: true
    })

  }
  onChange=(e)=>{
    const {name, value} = e.target;
    this.setState({[name]: value})

  }
  dateChangeFrom = (date, dateString) => {
    console.log(date, dateString);
    this.setState({dateFrom: dateString})
  }

  dateChangeTo = (date, dateString) => {
    console.log(date, dateString);
    this.setState({dateTo: dateString})
  }

  viewdetails = (e) => {
    this.setState({
      buttonModal: true
    })

  }

  closeviewdetails = (e) => {
    e.preventDefault();
    this.setState({
      buttonModal: false
    })

  }

  default = (e) => {
    e.preventDefault();
    this.setState({
      api: false
    })

  }

  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
      api: true, default: false,searchMandate:false
    })
  }

  handleCancelSearch = (e) => {
    this.setState({
      searchMandate: false
    })

  }

  getCompleted = () => {
    const token = sessionStorage.getItem('token')

    axios.get(`http://54.194.183.10:5000/byteproof-service/api/v1/terminal-cycle/completed`,{
      headers: {
        Authorization : `Bearer ${token}`
      }
    }).
    then((res) => {
      this.setState({completed : res.data.result})
    }).
    catch((err) => {
      console.log(err)
    })
  }
  getIncomplete = () => {
    const token = sessionStorage.getItem('token')

    axios.get(`http://54.194.183.10:5000/byteproof-service/api/v1/terminal-cycle/incomplete`,{
      headers: {
        Authorization : `Bearer ${token}`
      }
    }).
    then((res) => {
      this.setState({incomplete: res.data.result})
    }).
    catch((err) => {
      console.log(err)
    })
  }
  getBalanced = () => {
    const token = sessionStorage.getItem('token')

    axios.get(`http://54.194.183.10:5000/byteproof-service/api/v1/terminal-cycle/balanced`,{
      headers: {
        Authorization : `Bearer ${token}`
      }
    }).
    then((res) => {
      this.setState({balanced : res.data.result})
    }).
    catch((err) => {
      console.log(err)
    })
  }
  getUnbalanced = () => {
    const token = sessionStorage.getItem('token')
    axios.get(`http://54.194.183.10:5000/byteproof-service/api/v1/terminal-cycle/unbalanced`,{
      headers: {
        Authorization : `Bearer ${token}`
      }
    }).
    then((res) => {
      this.setState({unbalanced : res.data.result})
    }).
    catch((err) => {
      console.log(err)
    })
  }

  componentWillMount =() => {
    this.getBalanced();
    this.getCompleted();
    this.getIncomplete();
    this.getUnbalanced();
  }

  viewsummary = (e) => {
    e.preventDefault();
    this.setState({
      // summary: true, 
     default: false, searchMandate: false, api: false, spin: true, buttonModal: true
    })
     setTimeout(() => {
      this.setState({
        spin: false,
      })
    }, 1000);
  

  }

  summaryClose = (e) => {
    e.preventDefault();
    this.setState({
      summary: false
    })

  }

  back = () => {
    this.setState({default : true, buttonModal: false})
  }

  cycleTerminal =() => {
    const token = sessionStorage.getItem('token')
    const cycle = {
      terminalId: this.state.terminalId,
      branchCode: this.state.branchCode,
      cycleStatus:this.state.cycleStatus,
      analysisStatus: this.state.analysisStatus,
      dateFrom: this.state.dateFrom,
      dateTo:this.state.dateTo
    }
    console.log(cycle)
    this.setState({default:false, searchMandate:false, api: true })
    axios.get(`http://54.194.183.10:5000/byteproof-service/api/v1/terminal-cycle/`,{
      headers: {
        Authorization:`Bearer ${token}`
      }
    }).
    then((res) => {
      this.setState({cycleTerminal: res.data.result, default:false});
    }).
    catch((err) => {
      console.log(err)
    })
  }
 render(){
  const options = {
    filterType: "dropdown",
    responsive: "stacked",
    pagination: false,
    toolbar:true,
    selectableRowsOnClick: true,
    filter:false,
    viewColumns: false
  };

  const optionsCycle = {
    filterType: "dropdown",
    responsive: "stacked",
    pagination: false,
    filter:false,
    onRowClick: this.onRowClick,
    onRowsSelect: this.onRowsSelect,
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
      <Summary selectedRows={selectedRows} displayData={displayData} setSelectedRows={setSelectedRows} summaryState ={this.state.summary} />
    ),
    viewColumns: false,

  };

  const searchOptions = {
    filterType: "dropdown",
    responsive: "scroll",
    };
        



const columnSearchTerminal = [
  {
      name: "Terminal ID",
      options: {
        filter: true,
       
        setCellHeaderProps: (value) => {
          return {
           
              style: {
                backgroundColor: 'white',
                whiteSpace: 'pre',
                fontWeight: 'bold',
                color: '#172433'
              }
          };
        },

      }
    },
    {

      name: "Branch Code",
      options: {
        filter: true,
       
        setCellHeaderProps: (value) => {
          return {
           
              style: {
                backgroundColor: 'white',
                fontWeight: 'bold',
                whiteSpace: 'pre',
                color: '#172433'
              }
          };
        }
      }
    },
    {

      name: "Number of Cycles",
      options: {
        filter: true,
        
        setCellHeaderProps: (value) => {
          return {
           
              style: {
                backgroundColor: 'white',
                fontWeight: 'bold',
                whiteSpace: 'pre',
                color: '#172433'
              }
          };
        }
      }
    },
    {
      name: "Date From",
      options: {
        filter: false,
       
        setCellHeaderProps: (value) => {
          return {
           
              style: {
                backgroundColor: 'white',
                fontWeight: 'bold',
                whiteSpace: 'pre',
                color: '#172433'
              }
          };
        }
      }
    },
    {
      name: "Date To",
      options: {
        filter: true,
       
        setCellHeaderProps: (value) => {
          return {
           
              style: {
                backgroundColor: 'white',
                fontWeight: 'bold',
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
        sort: false,
        empty: true,
        setCellHeaderProps: (value) => {
          return {
           
              style: {
                backgroundColor: 'white',
                fontWeight:'bold',
                color: '#172443',
                whiteSpace: 'pre',
            
                fontWeight:'bold',
                color: '#172443'
              }
          };
        },
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Tooltip title ={"View Cashload"}>
            <Button size="sm"  color="info" className="mt-0 mb-0 nowrap pre" onClick={this.viewsummary}>
              <i className="fa fa-eye"></i>
            </Button>
            </Tooltip>
          );
        }
      }
    },
    
        
        
    ];


let completed = [];
let innerArray= [];
this.state.completed.forEach(res => {
  let jsObjs = res;
  innerArray = [];
  innerArray.push(jsObjs.terminalId);
  innerArray.push(jsObjs.branchCode);
  innerArray.push(jsObjs.analysisStatus);
  innerArray.push(jsObjs.openingStan);
  innerArray.push(jsObjs.numberOfCycles);
  innerArray.push(jsObjs.expectedCashRemaining);
  innerArray.push(jsObjs.expectedCashDispensed);
  innerArray.push(jsObjs.ejCashOffLoad);
  innerArray.push(jsObjs.ejCashLoad);
  innerArray.push(jsObjs.diffCashOffLoad);
  innerArray.push(jsObjs.diffCashLoad);
  innerArray.push(jsObjs.diffBalance);
  innerArray.push(jsObjs.cycleTimeTo);
  innerArray.push(jsObjs.cycleTimeFrom);
  innerArray.push(jsObjs.cycleStatus);
  innerArray.push(jsObjs.cycleDateTo);
  innerArray.push(jsObjs.cycleDateFrom);
  innerArray.push(jsObjs.closingStan);
  innerArray.push(jsObjs.cbaCashOffLoad);
  innerArray.push(jsObjs.cbaCashLoad);
  innerArray.push(jsObjs.dateTo);
  innerArray.push(jsObjs.dateFrom);
  completed.push(innerArray);
});

let incomplete = [];
let innerArray2= [];
this.state.incomplete.forEach(res => {
  let jsObjs = res;
  innerArray2 = [];
  innerArray2.push(jsObjs.terminalId);
  innerArray2.push(jsObjs.branchCode);
  innerArray2.push(jsObjs.analysisStatus);
  innerArray2.push(jsObjs.openingStan);
  innerArray2.push(jsObjs.numberOfCycles);
  innerArray2.push(jsObjs.expectedCashRemaining);
  innerArray2.push(jsObjs.expectedCashDispensed);
  innerArray2.push(jsObjs.ejCashOffLoad);
  innerArray2.push(jsObjs.ejCashLoad);
  innerArray2.push(jsObjs.diffCashOffLoad);
  innerArray2.push(jsObjs.diffCashLoad);
  innerArray2.push(jsObjs.diffBalance);
  innerArray2.push(jsObjs.cycleTimeTo);
  innerArray2.push(jsObjs.cycleTimeFrom);
  innerArray2.push(jsObjs.cycleStatus);
  innerArray2.push(jsObjs.cycleDateTo);
  innerArray2.push(jsObjs.cycleDateFrom);
  innerArray2.push(jsObjs.closingStan);
  innerArray2.push(jsObjs.cbaCashOffLoad);
  innerArray2.push(jsObjs.cbaCashLoad);
  innerArray2.push(jsObjs.dateTo);
  innerArray2.push(jsObjs.dateFrom);
  incomplete.push(innerArray2);
});

let balanced = [];
let innerArray3= [];
this.state.balanced.forEach(res => {
  let jsObjs = res;
  innerArray3 = [];
  innerArray3.push(jsObjs.terminalId);
  innerArray3.push(jsObjs.branchCode);
  innerArray3.push(jsObjs.analysisStatus);
  innerArray3.push(jsObjs.openingStan);
  innerArray3.push(jsObjs.numberOfCycles);
  innerArray3.push(jsObjs.expectedCashRemaining);
  innerArray3.push(jsObjs.expectedCashDispensed);
  innerArray3.push(jsObjs.ejCashOffLoad);
  innerArray3.push(jsObjs.ejCashLoad);
  innerArray3.push(jsObjs.diffCashOffLoad);
  innerArray3.push(jsObjs.diffCashLoad);
  innerArray3.push(jsObjs.diffBalance);
  innerArray3.push(jsObjs.cycleTimeTo);
  innerArray3.push(jsObjs.cycleTimeFrom);
  innerArray3.push(jsObjs.cycleStatus);
  innerArray3.push(jsObjs.cycleDateTo);
  innerArray3.push(jsObjs.cycleDateFrom);
  innerArray3.push(jsObjs.closingStan);
  innerArray3.push(jsObjs.cbaCashOffLoad);
  innerArray3.push(jsObjs.cbaCashLoad);
  innerArray3.push(jsObjs.dateTo);
  innerArray3.push(jsObjs.dateFrom);
  balanced.push(innerArray3);
});

let unbalanced = [];
let innerArray4= [];
this.state.unbalanced.forEach(res => {
  let jsObjs = res;
  innerArray4 = [];
  innerArray4.push(jsObjs.terminalId);
  innerArray4.push(jsObjs.branchCode);
  innerArray4.push(jsObjs.analysisStatus);
  innerArray4.push(jsObjs.openingStan);
  innerArray4.push(jsObjs.numberOfCycles);
  innerArray4.push(jsObjs.expectedCashRemaining);
  innerArray4.push(jsObjs.expectedCashDispensed);
  innerArray4.push(jsObjs.ejCashOffLoad);
  innerArray4.push(jsObjs.ejCashLoad);
  innerArray4.push(jsObjs.diffCashOffLoad);
  innerArray4.push(jsObjs.diffCashLoad);
  innerArray4.push(jsObjs.diffBalance);
  innerArray4.push(jsObjs.cycleTimeTo);
  innerArray4.push(jsObjs.cycleTimeFrom);
  innerArray4.push(jsObjs.cycleStatus);
  innerArray4.push(jsObjs.cycleDateTo);
  innerArray4.push(jsObjs.cycleDateFrom);
  innerArray4.push(jsObjs.closingStan);
  innerArray4.push(jsObjs.cbaCashOffLoad);
  innerArray4.push(jsObjs.cbaCashLoad);
  innerArray4.push(jsObjs.dateTo);
  innerArray4.push(jsObjs.dateFrom);
  unbalanced.push(innerArray4);
});
    return (
      <>
      <div>
      <Card className="card-stats pt-5">
            <CardBody>
              <Row className="container-fluid">
                <Col md="12">
                  <div className="d-flex justify-content-between align-items-center">
                    {!this.state.buttonModal ? <p className="text-info pt-1 pl-2"><a href="/admin/dashboard">EJ Content Manager </a>/ <span>CashLoad Analysis</span><a href="/admin/cashflow"> / Dashboard</a></p> :
                      <Tooltip title="Dashboard"><Button color="info" size="sm" onClick={this.back}> <span className="mt-1 fa fa-chevron-left"></span>  BACK </Button></Tooltip>}
                    {!this.state.buttonModal || this.state.api ?
                      <div className="d-flex justify-content-end">
                        <Tooltip title={"Seach Cashload"}>
                          <Button color="info" size="sm" onClick={this.searchMandate}>Search CashLoad <span className="mt-1 fa fa-search"></span></Button>

                        </Tooltip>

                      </div> : ""}
                  </div>
                </Col>
                <Col>

                </Col>
              </Row>
            </CardBody>
          </Card>
      </div>
      <div className="mt-5  content">
        
              {this.state.default &&
              <div>
        
          <Row>
            <Col lg="4" md="4" sm="3">
              <Card className="card-stats">
                <CardBody>
                  <Row style={{borderRadius: '0px'}}>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Number of Atm <br />Terminals </p>
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
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Number of CashLoad Cycle/Week</p>
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
                        <p className="card-category">Total Number of CashLoad Cycle/Month</p>
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
          <Col lg="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Piechart of complete and incomplete cashload</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Piechart of balanced and unbalanced cashload</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
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
                
                <CardBody>
                <MuiThemeProvider theme={getMuiTheme()}>
         <MUIDataTable
         title={"Recent Completed cashload cycle"}
         data={completed}
         columns={cycle}
         options={options}
         />
          </MuiThemeProvider>

                </CardBody>
               
              </Card>
            </Col>

           
           
          </Row>
        



          <Row>
            <Col lg="12">
              <Card>
               
                <CardBody>
                <MuiThemeProvider theme={getMuiTheme()}>
         <MUIDataTable
         title={"Recent Incomplete cashload cycle"}
         data={incomplete}
         columns={cycle}
         options={options}
         />
          </MuiThemeProvider>

                </CardBody>
                
              </Card>
            </Col>

    
           
          </Row>


          
          <Row>
            <Col lg="12">
              <Card>
               
                <CardBody>
                <MuiThemeProvider theme={getMuiTheme()}>
         <MUIDataTable
         title={"Recent balanced Cashload cycle"}
         data={balanced}
         columns={cycle}
         options={options}
         />
          </MuiThemeProvider>

                </CardBody>
                
              </Card>
            </Col>

    
           
          </Row>

          
          <Row>
            <Col lg="12">
              <Card>
              
                <CardBody>
                <MuiThemeProvider theme={getMuiTheme()}>
         <MUIDataTable
         title={"Recent Unbalanced Cashload cycle"}
         data={unbalanced}
         columns={cycle}
         options={options}
         />
          </MuiThemeProvider>

                </CardBody>
               
              </Card>
            </Col>

    
           
          </Row>
          </div>}
          
          
        {this.state.api &&
        <MuiThemeProvider theme={getMuiTheme()}>
         <MUIDataTable
         data={this.dataSet}
         columns={columnSearchTerminal}
         options={searchOptions}
         />
        </MuiThemeProvider>}
        {this.state.buttonModal && 
        <div>
       
        <MuiThemeProvider theme={getMuiTheme()}>
         <MUIDataTable
         title={"Cashload Cycles on terminal"}
         data={this.dataSet2}
         columns={cycle}
         options={optionsCycle}
         />
        </MuiThemeProvider>

    
          </div>
          }

              </div>
        <Modal
          title="Search Bulk"
          visible={this.state.searchMandate}
          footer={null}
          onCancel={this.handleCancelSearch}
          okText="Submit"
          cancelText="Clear"
          maskClosable={false}
          width={700}
          centered={true}
        >
          <Form>

            <div className="row">
              <div className="col-md-4">
                <FormGroup>
                  <Label for="exampleEmail" className="font-weight-bold">Terminal ID</Label>
                  <Input type="text" name="terminalId" id="exampleEmail" className="" onChange={this.onChange} />

                </FormGroup>
              </div>
              <div className="col-md-4">
                <FormGroup>
                  <Label for="exampleEmail" className="font-weight-bold">Branch Code</Label>
                  <Input type="text" name="branchCode" id="exampleEmail" className="" onChange={this.onChange} />

                </FormGroup>
              </div>
              <div className="col-md-4">
                <FormGroup>
                  <Label for="exampleSelect" className="font-weight-bold">Analysis Status</Label>
                  <Input type="select" name="analysisStatus" onChange={this.onChange} id="exampleSelect" >
                    <option>All</option>
                    <option>Balanced</option>
                    <option>Unbalanced</option>
                  </Input>
                </FormGroup>
              </div>

              <div className="col-md-4 pt-4">
                <FormGroup>
                  <Label for="exampleSelect" className="font-weight-bold">Cycle Status</Label>
                  <Input type="select" name="cycleStatus" onChange={this.onChange} id="exampleSelect" >
                    <option>All</option>
                    <option>Complete</option>
                    <option>Incomplete</option>
                  </Input>
                </FormGroup>

              </div>

              <div className="col-md-4 pt-4">
                <FormGroup className="">
                  <Label for="exampleEmail" className="font-weight-bold">Date From <i className="fa fa-calender"></i></Label>
                  <DatePicker onChange={this.dateChangeFrom} size={"large"} />
                </FormGroup>

              </div>
              <div className="col-md-4 pt-4">
                <FormGroup >
                  <Label for="exampleEmail" className="font-weight-bold">Date To <i className="fa fa-calender"></i></Label>
                  <DatePicker onChange={this.dateChangeTo} size={"large"} />


                </FormGroup>
              </div>


            </div>
            <div className="text-right">
              <Button color="info" onClick={this.cycleTerminal}>SEARCH</Button>
            </div>

          </Form>

        </Modal>

  
     
        {/* </Modal> */}


        
        



        
      </>
    );
  }
  dataSet = [
    ["1232405E", "405","2","20190820","20190823" ],
  

 
];

dataSet2 = [
  ["1232405E", "405","UNBALANCED","3838400", "342600","1168000", "4181000",0,0,0,1404,1326,"COMPLETETED",20190820,20190823,1160000,4181000,20200623,20200623],
  ["1232405E", "405","UNBALANCED","", "","", "4995000",0,0,0,"",1405,"INCOMPLETE",20190823,"","","",20200623,20200623],





  
];
}

export default CashLoad;
