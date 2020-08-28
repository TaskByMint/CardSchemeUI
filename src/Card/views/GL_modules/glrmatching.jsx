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
// reactstrap components

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Modal, ModalHeader, ModalBody, ModalFooter ,Button,
  Form, FormGroup, Label, Input, FormText,
  Col
 
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,


  dashboardNASDAQChart
} from "../../variables/charts";
import Header from '../../components/Navbars/DemoNavbar'
import MUIDataTable from "mui-datatables";


class GLRMatching extends React.Component {
  state = {
    modal: false,
    createModal: false
  }

  toggle = (e) => {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    })
  }

    toggle2 = (e) => {
      e.preventDefault();
      this.setState({
        createModal: !this.state.createModal
      })

  }
  render() {
    const columns = ["Matching Sets Name", "Account Name", "Account No", "Account Description","Account Status", "Account Currency","DataFiles Loadable","Actions"];
    const data = [
      ["A123FGAFG", "01238485434", "500,000", "30/12/2020", "16:42:12","3400","AS3474","98UUE7","PENDING"],
      ["A123FGAFG", "01238485434", "500,000", "30/12/2020", "16:42:12","3400","AS3474","98UUE7","PENDING"],
      ["A123FGAFG", "01238485434", "500,000", "30/12/2020", "16:42:12","3400","AS3474","98UUE7","PENDING"],
      ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000","3400","AS3474","98UUE7","PENDING"],
      ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000","3400","AS3474","98UUE7","PENDING"],
      ["A123FGAFG", "01238485434", "500,000", "30/12/2020", "16:42:12","3400","AS3474","98UUE7","PENDING"],
      ["A123FGAFG", "01238485434", "500,000", "30/12/2020", "16:42:12","3400","AS3474","98UUE7","PENDING"],
      ["A123FGAFG", "01238485434", "500,000", "30/12/2020", "16:42:12","3400","AS3474","98UUE7","PENDING"],
      ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000","3400","AS3474","98UUE7","PENDING"],
      ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000","3400","AS3474","98UUE7","PENDING"],
      ["A123FGAFG", "01238485434", "500,000", "30/12/2020", "16:42:12","3400","AS3474","98UUE7","PENDING"],
      ["A123FGAFG", "01238485434", "500,000", "30/12/2020", "16:42:12","3400","AS3474","98UUE7","PENDING"],
      ["A123FGAFG", "01238485434", "500,000", "30/12/2020", "16:42:12","3400","AS3474","98UUE7","PENDING"],
      ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000","3400","AS3474","98UUE7","PENDING"],
      ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000","3400","AS3474","98UUE7","PENDING"],
      ["A123FGAFG", "01238485434", "500,000", "30/12/2020", "16:42:12","3400","AS3474","98UUE7","PENDING"],
      ["A123FGAFG", "01238485434", "500,000", "30/12/2020", "16:42:12","3400","AS3474","98UUE7","PENDING"],
      ["A123FGAFG", "01238485434", "500,000", "30/12/2020", "16:42:12","3400","AS3474","98UUE7","PENDING"],
      
    ];
    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };
   
    return (
      <>
        <div className="content container-fluid">
          <Row className="fixed pt-3" style={{borderRadius: '0px'}}>
            <Col lg="12">
              <Card className="card-stats">
                <CardBody>
                  <Row >
                    <Col md="12">
                      <p className="font-weight-bold text-info pl-3">Byteproof Matching Sets</p>
                      <ol class="breadcrumb bgclass text-white">
                            <li class="text-info  breadcrumb-item">Proof Dashboard</li>
                            <li class="text-info  breadcrumb-item active">BP Matching Sets</li>
                        </ol>
                    </Col>
                    <Col>
                      <div className="text-right">
                      <Button color="primary" size="sm">View Matching Sets</Button>
                      <Button color="info" size="sm">Create Matching Sets</Button>
                        <CardTitle tag="p"></CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            
            
          </Row>
          <br />
          <Row>
            <Col lg="12">
              <Card className="card-stats">
                <CardBody>
                <MUIDataTable
        title={"Matching Sets list"}
        data={this.dataSet}
        columns={columns}
        options={options}
      />
                   
                </CardBody>
              </Card>
            </Col>
            
            
          </Row>

          <div>
     
      <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
        <ModalHeader toggle={this.toggle}>Search ByteProof Class</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Input>
      </FormGroup>
      <Button color="info" size="md">Search</Button>
      </Form>
        </ModalBody>
        
      </Modal>

      <Modal isOpen={this.state.createModal} toggle={this.toggle2} className="">
        <ModalHeader toggle={this.toggle2}>Create ByteProof Class</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="exampleEmail">BP ClassName</Label>
        <Input type="email" name="email" id="exampleEmail" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">BP Class Description</Label>
        <Input type="email" name="email" id="exampleEmail" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select A Class Status</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option></option>
          <option>From Api</option>
          <option>From Api</option>
          <option>From Api</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select A ByteProof Group</Label>
        <Input type="select" name="select" id="exampleSelect">
           <option></option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Pending</option>
        </Input>
      </FormGroup>
      <Button color="info" size="md">Create</Button>
      </Form>
        </ModalBody>
       
      </Modal>
    </div>
         
          
         
        </div>
      </>
    );
  }
  dataSet = [
    ["Tiger Nixon", "System Architect","$170,750","Tiger Nixon", "System Architect","$170,750","Tiger Nixon", "Edit"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750","Tiger Nixon", "Edit"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000","Tiger Nixon", "Edit"],
    ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060","Tiger Nixon", "Edit"],
    ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700","Tiger Nixon", "Edit"],
    ["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000","Tiger Nixon", "Edit"],
    ["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500","Tiger Nixon", "Edit"],
    ["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900","Tiger Nixon", "Edit"],
    ["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500","Tiger Nixon", "Edit"],
    ["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600","Tiger Nixon", "Edit"],
    ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560","Tiger Nixon", "Edit"],
    ["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000","Tiger Nixon", "Edit"],
    ["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600","Tiger Nixon", "Edit"],
    ["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500","Tiger Nixon", "Edit"],
    ["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750","Tiger Nixon", "Edit"],
    ["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500","Tiger Nixon", "Edit"],
    ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000","Tiger Nixon", "Edit"],
    ["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500","Tiger Nixon","Edit"],
    ["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000","Tiger Nixon", "Edit"],
    ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500","Tiger Nixon", "Edit"],
    ["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000","Tiger Nixon", "Edit"],
    ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000","Tiger Nixon", "Edit"],
    ["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450","Tiger Nixon", "System Architect"],
    ["Doris Wilder", "Sales Assistant", "Sydney", "3023", "2010/09/20", "$85,600","Tiger Nixon", "Edit"],
    ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000","Tiger Nixon", "Edit"],
    ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575","Tiger Nixon", "Edit"],
    ["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650","Tiger Nixon", "Edit"],
    ["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850","Tiger Nixon", "Edit"],
    ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000","Tiger Nixon", "Edit"],
    ["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000","Tiger Nixon", "Edit"],
    ["Michelle House", "Integration Specialist", "Sydney", "2769", "2011/06/02", "$95,400","Tiger Nixon", "Edit"],
    ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500","Tiger Nixon", "Edit"],
    ["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000","Tiger Nixon", "Edit"],
    ["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500","Tiger Nixon", "System Architect"],
    ["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050","Tiger Nixon", "Edit"],
    ["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675","Tiger Nixon", "Edit"]
];
}

export default GLRMatching;
