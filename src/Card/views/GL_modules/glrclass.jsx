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
import { Modal } from "antd";
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
  UncontrolledAlert,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "../../variables/charts";
import Header from "../../components/Navbars/DemoNavbar";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import axios from "axios";
import { getMuiTheme } from "../../variables/functions/func";
class GLRClass extends React.Component {
  state = {
    createClass: false,
    bpGroup: "",
    automatch: "",
    classDesc: "",
    className: "",
    classStatus: "",
    data: [],
  };

  cancelClass = () => this.setState({ createClass: false });

  componentWillMount = () => {
    this.refresh();
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  createClass = () => {
    const token = sessionStorage.getItem("token");
    const classBody = {
      bpGroup: this.state.bpGroup,
      pfClassAutoMatch: this.state.automatch,
      pfClassDesc: this.state.classDesc,
      pfClassName: this.state.className,
      pfClassStatus: this.state.classStatus,
    };
    axios
      .post(
        `http://54.194.183.10:5000/byteproof-service/api/v1/bpclass/create`,
        classBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.result);
        this.setState({
          bpGroup: "",
          automatch: "",
          classDesc: "",
          classStatus: "",
          ClassName: "",
          createClass: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  toggle = (e) => {
    e.preventDefault();
    this.setState({ createClass: true });
  };

  toggle2 = (e) => {
    e.preventDefault();
    this.setState({ createModal: !this.state.createModal });
  };

  componentWillMount = () => {
    
  };

  render() {
    const columns = [
      {
        name: "Group Name",
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
                backgroundColor: "#fff",
                fontWeight: "bold",
                color: "#172443",
              },
            };
          },
        },
      },
      {
        name: "Class Name",
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
        },
      },
      {
        name: "Class Status",
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
        },
      },
      {
        name: "Class Auto Matching",
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
        },
      },
      {
        name: "Created By",
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
          sort: false,
        },
      },
      {
        name: "Modified By",
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
          sort: false,
        },
      },
      {
        name: "Created Date",
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
          sort: false,
        },
      },
    ];

    console.log(this.state.data);
    const data1 = [];

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
    };

    return (
      <>
        <div className="mt-5 pt-4">
          <Card className="card-stats">
            <CardBody>
              <Row className="">
                <Col md="12">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-info pt-1 pl-2">
                      <a href="/admin/dashboard">GL Proofing </a>/{" "}
                      <span>BP Class</span>
                    </p>
                    <div className="d-flex justify-content-end">
                      <Button color="info" size="sm" onClick={this.toggle}>
                        {" "}
                        Add Class <span className="mt-1 fa fa-plus-circle" />
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
              title={"byteproof class list"}
              data={this.dataSet}
              columns={columns}
              options={options}
            />
          </MuiThemeProvider>

          <div>
            <Modal
              title="Create BP Class"
              visible={this.state.createClass}
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
                          BP Group
                        </Label>
                        <Input
                          type="text"
                          name="bpGroup"
                          onChange={this.onChange}
                          value={this.state.bpGroup}
                          noValidate
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6 pt-3">
                      <FormGroup>
                        <Label for="exampleSelect" className="font-weight-bold">
                          PF Class AutoMatch
                        </Label>
                        <Input
                          type="text"
                          name="automatch"
                          onChange={this.onChange}
                          value={this.state.automatch}
                          noValidate
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6 pt-3">
                      <FormGroup>
                        <Label for="exampleSelect" className="font-weight-bold">
                          PF Class Name
                        </Label>
                        <Input
                          type="text"
                          name="className"
                          onChange={this.onChange}
                          value={this.state.ClassName}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6 pt-3">
                      <FormGroup>
                        <Label for="exampleSelect" className="font-weight-bold">
                          PF Class Description
                        </Label>
                        <Input
                          type="text"
                          name="classDesc"
                          onChange={this.onChange}
                          value={this.state.classDesc}
                        />
                      </FormGroup>
                    </div>

                    <div className="col-md-12 pt-3">
                      <FormGroup className="pt-2">
                        <Label for="exampleSelect" className="font-weight-bold">
                          PF Class Status
                        </Label>
                        <Input
                          type="text"
                          name="classStatus"
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
                        onClick={this.createClass}
                      >
                        ADD TERMINAL
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Modal>
          </div>
        </div>
      </>
    );
  }
  dataSet = [
    [
      "Prudential Zenithj NIG",
      "Direct Payment",
      "Active",
      "Y",
      "Paschal",
      "Paschal",
      "20-02-2020",
    ],
  ];
}

export default GLRClass;
