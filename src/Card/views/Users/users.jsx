
import React from "react";
// react plugin used to create charts
import { Line, Pie,Bar,Radar ,Doughnut} from "react-chartjs-2";
// reactstrap components
import axios from 'axios'
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "../../variables/charts.jsx";
import DatePicker from "react-datepicker";
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
import {columnSearchAccount, cashflow, receipt, cycle} from '../../variables/columns/cashflow'
import { Helmet } from 'react-helmet'
import Spinner from 'react-loader-spinner'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Modal } from 'antd';
import Header from '../../components/Navbars/DemoNavbar';
// import {columnAddAccount, columnSearchAccount} from './module_columns/account'
import MUIDataTable from "mui-datatables";
class Users extends React.Component {
  state = {
    searchMandate: false,
    searchData: false,
    default: true,
    api: false,
    buttonModal: false,
    summary: false,
    receiptLoad: false,
    startDate: new Date(),
    endDate: new Date(),
  }

  searchMandate = (e) => {
    e.preventDefault();
    this.setState({
      searchMandate: true
    })

  }

  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableHeadCell: {
        fixedHeaderOptions: {
          backgroundColor: `blue !important`,
        }
      },
      MUIDataTableHead: {
        root: {
          backgroundColor: `#1D252D !important` ,

        }
      },
      MUIDataTableBodyRow: {
        root: {
          '&:nth-child(odd)': { 
            backgroundColor: '#e3e9ed',
            data: {
              whiteSpace: 'nowrap'
            }
            
          }
        }
      },
      MuiTableCell: {
        root: {
            padding: '3px 3px 0 0'
        },
        body: {
            fontSize: '13px',
            textAlign: 'left'
        }
    },

      MUIDataTableSelectCell: {
        headerCell: {
          backgroundColor: 'white'
        },
        checked: `lightcoral !important`
      },
      MUIDataTablePagination: {
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        },
        caption: {
          fontSize: 12
        }
      }
    }
  })


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

  viewsummary = (e) => {
    e.preventDefault();
    this.setState({
      summary: true, buttonModal: true
    })
    setTimeout(() => {
      this.setState({
        receiptLoad: true
      })
      
    }, 4500);

  }

  summaryClose = (e) => {
    e.preventDefault();
    this.setState({
      summary: false
    })

  }
 render(){
  const options = {
    filterType: "dropdown",
    responsive: "stacked",
    pagination: false,
    toolbar:false,
    disableToolbarSelect: true,
    filter:false,
    viewColumns: false
  };

  const searchOptions = {
    filterType: "dropdown",
    responsive: "scroll",
    };
        
  const cashflow = [
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
                              color: 'white'
                            }
                        };
                      },
              
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
                              color: 'white'
                            }
                        };
                      }
                    }
                  },
                  {
              
                    name: "Number of Cycles",
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
                              color: 'white'
                            }
                        };
                      }
                    }
                  },
                  {
                    name: "Date From",
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
                              color: 'white'
                            }
                        };
                      }
                    }
                  },
                  {
                    name: "Date To",
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
                              color: 'white'
                      
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
                        <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433' }}>
                          {columnMeta.name}
                        </th>
                      ),
                      sort: false,
                      empty: true,
                      setCellHeaderProps: (value) => {
                        return {
                         
                            style: {
                              backgroundColor: 'white',
                              
                              whiteSpace: 'pre',
                              color: 'white'
                            }
                        };
                      },
                      customBodyRender: (value, tableMeta, updateValue) => {
                        return (
                          <Button size="xs" color="info" className="mt-0 mb-0" onClick={this.viewdetails}>
                            View Details
                          </Button>
                        );
                      }
                    }
                  },
  ];

const cycle = [
  {
    name: "Terminal ID",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px', 
              whiteSpace: 'pre',
              color: 'white'
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
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
            }
        };
      }
    }
  },
  {

    name: "Cycle Date From",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
            }
        };
      }
    }
  },
  {
    name: "Cycle Time From",
    options: {
      filter: false,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
            }
        };
      }
    }
  },
  {
    name: "Cycle Date To",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
            }
        };
      }
    }
  },
  {
    name: "Cycle Time To",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
            }
        };
      }
    }
  },
  {
    name: "EJ Cashload",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
            }
        };
      }
    }
  },
  {
    name: "EJ CashOffLoad",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
            }
        };
      }
    }
  },
  {
    name: "CBA Cashload",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
            }
        };
      }
    }
  },
  {
    name: "CBA CashOffload",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
            }
        };
      }
    }
  },
  {
    name: "Diff In Users",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
            }
        };
      }
    }
  },
  {
    name: "Diff In CashOffload",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
            }
        };
      }
    }
  },
  {
    name: "Expected Cash Dispense",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
            }
        };
      }
    }
  },
  {
    name: "Expected Cash Remaining",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
            }
        };
      }
    }
  },
  {
    name: "Balance",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
            }
        };
      }
    }
  },
  {
    name: "Analysis Status",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
            }
        };
      }
    }
  },
  {
    name: "Cycle Status",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
            }
        };
      }
    }
  },
  {
    name: "Date",
    options: {
      filter: true,
      setCellHeaderProps: (value) => {
        return {
         
            style: {
              backgroundColor: 'white',
              paddingRight: '50px',
              whiteSpace: 'pre',
              color: 'white'
      
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
              
              whiteSpace: 'pre',
              color: 'white'
            }
        };
      },
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Button size="sm" style={{backgroundColor:"white"}} className="mt-0 mb-0 nowrap pre" onClick={this.viewsummary}>
            View Summary
          </Button>
        );
      }
    }
  },
];
    return (
      <>
      <div className="mt-5 pt-1">
      <Card className="card-stats">
                <CardBody>
                  <Row className="">
                    
                    <Col md="12">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="text-info pt-1 pl-2"><a href="/admin/dashboard">Users </a>/ <span>Users Admins</span></p> 
                        <div className="d-flex justify-content-end">


                       </div>
                      </div>
                    </Col>
                    <Col>
                     
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              </div></>
              )
}
}

export default Users;
