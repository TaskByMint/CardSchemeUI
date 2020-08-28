import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import LeakAddIcon from "@material-ui/icons/LeakAdd";
import LeakRemoveIcon from "@material-ui/icons/LeakRemove";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { withStyles } from "@material-ui/core/styles";
import Spinner from 'react-loader-spinner'
import {columnSearchAccount,  receipt} from '../../variables/columns/cashflow'
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {getMuiTheme} from '../../variables/functions/func'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  Row,
  Button,
  Form, FormGroup, Label, Input, FormText,
  Col
 
} from "reactstrap";
import { Modal } from 'antd';


const defaultToolbarSelectStyles = {
  iconButton: {
  },
  iconContainer: {
    marginRight: "24px",
  },
  inverseIcon: {
    transform: "rotate(90deg)",
  },
};

class Summary extends React.Component {

  state = {
    summary: false,
    receiptLoad: false
  }

  toggle =(e) => {
    e.preventDefault();
    this.setState({
      summary: true
    })
    setTimeout(() => {
        this.setState({
          receiptLoad: true
        })
        
      }, 2700);

  }

  summaryClose = (e) => {
    e.preventDefault();
    this.setState({
      summary: false
    })

  }
  

 

  render() {
    console.log(this.props.selectedRows.data.length)
    const { classes } = this.props;
    const options = {
        filterType: "dropdown",
        responsive: "stacked",
        pagination: false,
        toolbar:true,
        selectableRowsOnClick: true,
        filter:false,
        viewColumns: false
      };

    return (
      <div className={classes.iconContainer}>
      
      <Tooltip title={"View Summary"}>
          <IconButton className={classes.iconButton} onClick={this.toggle}>
            <ViewModuleIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
          
        
        <Modal
          title = "View Summary"
          visible={this.state.summary}
          onOk={this.handleSearch}
          onCancel={this.summaryClose}
          okText="Submit"
          cancelText="Clear"
          maskClosable = {false}
          footer={null}
          width={850}
          bodyStyle={{background:'whitesmoke'}}
        
        >
           <Card>
            <CardBody style={{ backgroundColor: 'white', borderColor: ' whitesmoke' }} className="reciept">
            <div className="d-flex justify-content-between align-items-center reciept">
            <p className="font-weight-bold">TERMINAL ID</p>
            <p>12/3/2009</p>
            </div>
            <div className="d-flex justify-content-between align-items-center reciept">
            <p className="font-weight-bold">BRANCH CODE</p>
            <p>12000</p>
            </div>
            <div className="d-flex justify-content-between align-items-center reciept">
            <p className="font-weight-bold">BRANCH NAME</p>
            <p>3000</p>
            </div>
            </CardBody>
            </Card>
          
          <h4 className="text-center text-danger font-weight-bold pt-3">SUMMARY</h4>
          <hr />
          <Card>
            <CardBody style={{ backgroundColor: 'white', borderColor: ' white' }}>
              <div className="d-flex justify-content-between align-items-center reciept">
            <p className="font-weight-bold">DATE AND TIME CASHLOAD</p>
            <p>12/3/2009</p>
            </div>
            <div className="d-flex justify-content-between align-items-center reciept">
            <p className="font-weight-bold">EJ CASHLOAD AMOUNT CAPTURED</p>
            <p>12000</p>
            </div>
            <div className="d-flex justify-content-between align-items-center reciept">
            <p className="font-weight-bold">CASHLOAD AMOUNT LOAD POSTED TO CBA BY CUSTODIAN</p>
            <p>3000</p>
            </div>
            <div className="d-flex justify-content-between align-items-center reciept">
            <p className="font-weight-bold">DIFFERENCE </p>
            <p>6000</p>
            </div>
            </CardBody>
          </Card>
          <hr />

          {this.state.receiptLoad ?
        <MuiThemeProvider theme={getMuiTheme()}>
         <MUIDataTable
         title={false}
         data={this.dataSet2}
         columns={receipt}
         options={options}
         />
          </MuiThemeProvider>:
          <div className="text-center">
            <Spinner type="TailSpin" height={45} width={40} /> 
          </div>
          
 }

          <hr />



          <Card>

            <CardBody style={{ backgroundColor: 'white', borderColor: ' white' }}>
            <div className="pt-4">
            <div className="d-flex justify-content-between align-items-center reciept">
            <p className="font-weight-bold">DATE AND TIME CASHOFFLOADED </p>
            <p>12/3/2020</p>
            </div>
            <div className="d-flex justify-content-between align-items-center reciept">
            <p className="font-weight-bold">EJ CASHOFFLOAD AMOUNT CAPTURED </p>
            <p>19000</p>
            </div>
            <div className="d-flex justify-content-between align-items-center reciept">
            <p className="font-weight-bold">DIFFERENCE </p>
            <p>6000</p>
            </div>
            <div className="d-flex justify-content-between align-items-center reciept">
            <p className="font-weight-bold">ESTIMATED CASH DISPENSED</p>
            <p>6000</p>
            </div>
            <div className="d-flex justify-content-between align-items-center reciept">
            <p className="font-weight-bold">ESTIMATED CASH REMAINING</p>
            <p>6000</p>
            </div>
            
           
           
          </div>

            </CardBody>
          </Card>

          
        </Modal>
      
      </div>
    );
  }
  dataSet2 = [
    ['1232405E','20190820','4352','457850','506107******2818','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','2707','004707','506105******9888','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','4852','457850','506107******2818','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','1707','004707','506105******9888','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','4652','457850','506107******2818','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','3707','004707','506105******9888','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','7552','457850','506107******2818','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','2207','004707','506105******9888','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','1352','457850','506107******2818','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','4407','004707','506105******9888','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','4552','457850','506107******2818','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','1207','004707','506105******9888','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','8652','457850','506107******2818','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','5707','004707','506105******9888','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','3652','457850','506107******2818','SUCCESSFUL TRANSACTION'],
    ['1232405E','20190820','9707','004707','506105******9888','SUCCESSFUL TRANSACTION'],
  
  
  
  
  
  
    
  ];
}

export default withStyles(defaultToolbarSelectStyles, { name: "Summary" })(Summary);
