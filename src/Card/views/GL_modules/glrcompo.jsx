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
import { Line, Pie, Bar, Radar, Doughnut } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
} from "reactstrap";
import { Modal } from "antd";
import {getMuiTheme} from '../../variables/functions/func'
import Header from "../../components/Navbars/DemoNavbar";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import axios from 'axios'
class GLRComponents extends React.Component {
  state = {
    createCompo: false,
    compo: {
      bpAccount: '',
      bpBank: '',
      compoName: '',
      compoDesc: '',
      compoBal:''
    }
    
  };

  toggle = (e) => this.setState({createCompo: true});
  cancelCompo = () => this.setState({createCompo:false})

  onChange = (e) => { 
    const { compo } = { ...this.state };
    const currentState = compo;
    const { name, value } = e.target;
    currentState[name] = value;
    this.setState({ compo: currentState });
  }

  createComponent = () => {
    const token = sessionStorage.getItem("token");
    const compoBody = {
      bpAccount: this.state.compo.bpAccount,
      bpBank: this.state.compo.bpBank,
      componentbalance: this.state.compo.compoBal,
      componentdesc: this.state.compo.compoDesc,
      componentname: this.state.compo.compoName,
    };
    axios
      .post(
        `http://54.194.183.10:5000/byteproof-service/api/v1/bpcomponent/create`,
        compoBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.result);
        this.setState({
          bpAccount: "",
          bpBank: "",
          compoBal: "",
          compoDesc: "",
          compoName: "",
          createCompo: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  render() {
    const columns = [
      {
        name: "Account Name",
        options: {
          filter: true,
          customHeadRender: (columnMeta, updateDirection) => (
            <th
              key={2}
              onClick={() => updateDirection(2)}
              style={{ cursor: "pointer", color: "#172433" }}
            >
              {columnMeta.name}
            </th>
          ),
          setCellHeaderProps: (value) => {
            return {
              style: {
                backgroundColor: "white",
                fontWeight: "bold",
              },
            };
          },
        },
      },
      {
        name: "Component Name",
        options: {
          filter: true,
          customHeadRender: (columnMeta, updateDirection) => (
            <th
              key={2}
              onClick={() => updateDirection(2)}
              style={{ cursor: "pointer", color: "#172433" }}
            >
              {columnMeta.name}
            </th>
          ),
          setCellHeaderProps: (value) => {
            return {
              style: {
                backgroundColor: "white",
                fontWeight: "bold",
              },
            };
          },
        },
      },
      {
        name: "Component Description",
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
          setCellHeaderProps: (value) => {
            return {
              style: {
                backgroundColor: "white",
                fontWeight: "bold",
              },
            };
          },
        },
      },
      {
        name: "Component Balance",
        options: {
          filter: true,
          customHeadRender: (columnMeta, updateDirection) => (
            <th
              key={2}
              onClick={() => updateDirection(2)}
              style={{ cursor: "pointer", color: "#172433" }}
            >
              {columnMeta.name}
            </th>
          ),
          setCellHeaderProps: (value) => {
            return {
              style: {
                backgroundColor: "white",
                fontWeight: "bold",
              },
            };
          },
        },
      },
      {
        name: "Component Sides",
        options: {
          filter: true,
          customHeadRender: (columnMeta, updateDirection) => (
            <th
              key={2}
              onClick={() => updateDirection(2)}
              style={{ cursor: "pointer", color: "#172433" }}
            >
              {columnMeta.name}
            </th>
          ),
          setCellHeaderProps: (value) => {
            return {
              style: {
                backgroundColor: "white",
                fontWeight: "bold",
              },
            };
          },
          sort: false,
        },
      },
      {
        name: "Bank",
        options: {
          filter: true,
          customHeadRender: (columnMeta, updateDirection) => (
            <th
              key={2}
              onClick={() => updateDirection(2)}
              style={{ cursor: "pointer", color: "#172433" }}
            >
              {columnMeta.name}
            </th>
          ),
          setCellHeaderProps: (value) => {
            return {
              style: {
                backgroundColor: "white",
                fontWeight: "bold",
              },
            };
          },
          sort: false,
        },
      },
    ];

   

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
    };

    return (
      <>
        <div className="mt-5 pt-4">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col md="12">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-info pt-1 pl-3">
                      <a href="/admin/dashboard">Proof Dashboard</a> /{" "}
                      <span>ByteProof Component</span>
                    </p>
                    <div className="d-flex justify-content-end">
                      <Button color="primary" size="sm" onClick={this.toggle}>
                        Search Component <span className="fa fa-search" />
                      </Button>
                      <Button color="info" size="sm" onClick={this.toggle}>
                        Create Component <span className="fa fa-plus" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col />
              </Row>
            </CardBody>
          </Card>

          <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={"byteproof component list"}
              data={this.dataSet}
              columns={columns}
              options={options}
            />
          </MuiThemeProvider>
        </div>

        <Modal
              title="Create BP Component"
              visible={this.state.createCompo}
              onCancel={this.cancelClass}
              footer={null}
              okText="Add Terminal"
              cancelText="Clear"
              maskClosable={false}
              width={600}
            >
              <div>
                <Form>
                 
                  <div className="row">
                    <div className="col-md-6 pt-3">
                      <FormGroup>
                        <Label for="exampleSelect" className="font-weight-bold">
                          BP Account
                        </Label>
                        <Input
                          type="text"
                          name="bpAccount"
                          onChange={this.onChange}
                          value={this.state.bpAccount}
                          noValidate
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6 pt-3">
                      <FormGroup>
                        <Label for="exampleSelect" className="font-weight-bold">
                         Component Name
                        </Label>
                        <Input
                          type="text"
                          name="compName"
                          onChange={this.onChange}
                          value={this.state.automatch}
                          noValidate
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6 pt-3">
                      <FormGroup>
                        <Label for="exampleSelect" className="font-weight-bold">
                          BP Bank
                        </Label>
                        <Input
                          type="text"
                          name="Bpbank"
                          onChange={this.onChange}
                          value={this.state.ClassName}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6 pt-3">
                      <FormGroup>
                        <Label for="exampleSelect" className="font-weight-bold">
                          Component Balance
                        </Label>
                        <Input
                          type="text"
                          name="compBal"
                          onChange={this.onChange}
                          value={this.state.classDesc}
                        />
                      </FormGroup>
                    </div>

                    <div className="col-md-12 pt-2">
                      <FormGroup className="pt-2">
                        <Label for="exampleSelect" className="font-weight-bold">
                        Component Description
                        </Label>
                        <Input
                          type="textarea"
                          name="compDesc"
                          onChange={this.onChange}
                          value={this.state.classStatus}
                        />
                      
                      </FormGroup>
                    </div>
                    <div className="ml-auto">
                      <Button
                        color="info"
                        className="pt-2 pb-2 mt-3"
                        size="sm"
                        onClick={this.createComponent}
                      >
                        ADD COMPONENT
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Modal>
      </>
    );
  }
  dataSet = [
    [
      "Direct Payment Recievable_A",
      "DP Recievable_A",
      "Holds The Component Side A",
      "0.00",
      "Internal",
      "Zenith",
    ],
    [
      "Direct Payment Recievable_B",
      "DP Recievable_B",
      "Holds The Component Side B",
      "0.00",
      "External",
      "Zenith",
    ],
  ];
}

export default GLRComponents;
