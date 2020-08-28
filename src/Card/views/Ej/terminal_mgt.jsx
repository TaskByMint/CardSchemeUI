import React from "react";
// react plugin used to create charts
import { Line, Pie, Bar, Radar, Doughnut } from "react-chartjs-2";
// reactstrap components
import axios from "axios";

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
  CardText,
  UncontrolledAlert,
  Col,
  Alert,
} from "reactstrap";
import { getMuiTheme } from "../../variables/functions/func";
import Tooltip from "@material-ui/core/Tooltip";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { TerminalsM } from "../../variables/columns/terminal";
import { Helmet } from "react-helmet";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  terminals,
  showTerminal,
  deleteTerminal,
  singleTerminal,
} from "../../action/terminal";
import { Modal } from "antd";
import Header from "../../components/Navbars/DemoNavbar";
import Add from "../../Alerts/Success/terminalAdd";
import Update from "../../Alerts/Success/terminalUpt";
import Delete from "../../Alerts/Success/terminalDel";
import Spinner from "react-loader-spinner";
import MUIDataTable from "mui-datatables";
const { confirm } = Modal;
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
class TerminalMgt extends React.Component {
  state = {
    errors: {
      tillAccount: "",
      terminalId: "",
      branchCode: "",
    },
    validateForm: false,
    bulkData: [],
    addSingle: false,
    editable: false,
    updatable: false,
    Bulk: false,
    TerminalData: [],
    checked: true,
    getTerminal: false,
    totalTerminals: [],
    viewTerminal: false,
    terminalId: "",
    terminalName: "",
    branchCode: "",
    tillAccount: "",
    atmType: "",
    updateTerminal: false,
    updateId: "",
    updateName: "",
    updateCode: "",
    updateAccount: "",
    updateAtm: "",
    updateCheck: false,
    refresh: false,
    csv: "",
    terminalChanger: false,
    alertAdd: false,
    alertUpdate: false,
    alertDel: false,
  };

  addSingle = (e) => {
    e.preventDefault();
    this.setState({
      addSingle: true,
    });
  };

  onChange = (e) => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "terminalId":
        errors.terminalId =
          value.length < 10 ? "Terminal ID must be 10 characters long!" : "";
        break;
      case "tillAccount":
        errors.tillAccount =
          value.length < 10 ? "Till Account must be 10 characters long!" : "";
        break;
      case "tillAccount":
        errors.tillAccount =
          value.length < 10 ? "Till Account must be 10 characters long!" : "";
        break;

      default:
        break;
    }
    this.setState({ errors, [name]: value });

    if (e.target.value === "Bulk Terminal") {
      this.setState({
        terminalChanger: true,
      });
    } else if (e.target.value === "Single Terminal") {
      this.setState({
        terminalChanger: !this.state.terminalChanger,
      });
    }
  };

  checkChange = (e) => {
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
  };

  fileChange = (event) => {
    this.setState({
      csv: event.target.files[0],
    });
  };

  fileUpload = () => {
    let formData = new FormData();
    const token = sessionStorage.getItem("token");
    formData.append("terminals", this.state.csv, this.state.csv.name);
    axios
      .post(
        `http://localhost:5000/byteproof-service/api/v1/terminal/bulk`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            ContentType: "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data.result);

        this.setState({
          bulkData: res.data.result,
          Bulk: true,
          addSingle: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  editable = () => {
    this.setState({
      updatable: true,
      viewTerminal: false,
    });
  };

  updateTerminal = (id) => {
    this.setState({
      updateTerminal: true,
      updateId: id.rowData[0],
      updateName: id.rowData[1],
      updateCode: id.rowData[2],
      updateAccount: id.rowData[3],
      updateAtm: id.rowData[4],
    });
  };

  showDeleteConfirm = (id) => {
    confirmAlert({
      message: "Are you sure to do delete this item.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const token = sessionStorage.getItem("token");
            const terminal = id.rowData[0];
            axios
              .delete(
                `http://localhost:5000/byteproof-service/api/v1/terminal/${terminal}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((res) => {
                console.log(res.data.result);
                this.setState({ alertDel: true });
                setTimeout(() => {
                  this.setState({ alertDel: false });
                }, 2500);
                this.refresh();
              });
          },
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  };

  updateTerminalclose = (e) => {
    e.preventDefault();
    this.setState({
      updatable: false,
      editable: false,
    });
  };

  retrieveTerminal = (e) => {
    e.preventDefault();
    this.setState({
      getTerminal: true,
    });
  };

  handlegetTerminal = (e) => {
    e.preventDefault();
    this.setState({
      getTerminal: false,
    });
  };

  singleTerminal = () => {
    if (validateForm(this.state.errors)) {
      const singleTerminal = {
        terminalId: this.state.terminalId,
        terminalName: this.state.terminalName,
        branchCode: this.state.branchCode,
        tillAccount: this.state.tillAccount,
        atmType: this.state.atmType,
      };
      if (
        singleTerminal.terminalId &&
        singleTerminal.terminalName &&
        singleTerminal.branchCode &&
        singleTerminal.tillAccount &&
        singleTerminal.atmType
      ) {
        const token = sessionStorage.getItem("token");
        axios
          .post(
            `http://localhost:5000/byteproof-service/api/v1/terminal/single`,
            singleTerminal,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            this.setState({
              addSingle: false,
              terminalId: "",
              terminalName: "",
              branchCode: "",
              tillAccount: " ",
              atmType: "",
              alertAdd: true,
            });
            setTimeout(() => {
              this.setState({ alertAdd: false });
            }, 2500);
            this.refresh();
          });
      } else {
        this.setState({ validateForm: true });
        setTimeout(() => {
          this.setState({ validateForm: false });
        }, 2500);
      }
    } else {
    }
  };

  componentWillMount = () => {
    this.refresh();
  };

  refresh = () => {
    const token = sessionStorage.getItem("token");
    this.props.terminals(token);

   
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
      searchData: true,
    });
  };

  handleCancelSearch = (e) => {
    this.setState({
      addSingle: false,
    });
  };

  handleCancelBulk = (e) => {
    this.setState({
      Bulk: false,
    });
  };

  viewTerminal = (e) => {
    e.preventDefault();
    this.setState({
      viewTerminal: true,
    });
  };

  viewTerminalData = (id) => {
    const terminal = id.rowData[0];
    this.setState({
      viewTerminal: true,
      updateTerminal: true,
      updateId: id.rowData[0],
      updateName: id.rowData[1],
      updateCode: id.rowData[2],
      updateAccount: id.rowData[3],
      updateAtm: id.rowData[4],
      updateCheck: id.rowData[5],
    });
    const token = sessionStorage.getItem("token");
    this.props.showTerminal(token, terminal);
  };

  viewTerminalclose = (e) => {
    e.preventDefault();
    this.setState({
      viewTerminal: false,
      updateTerminal: "",
      updateId: "",
      updateName: "",
      updateCode: "",
      updateAccount: "",
      updateAtm: "",
      editable: false,
    });
  };

  update = () => {
    this.setState({
      updatable: false,
    });
    const updateData = {
      terminalId: this.state.updateId,
      terminalName: this.state.updateName,
      branchCode: this.state.updateCode,
      tillAccount: this.state.updateAccount,
      atmType: this.state.updateAtm,
      status: this.state.updateCheck === true ? "1" : "0",
    };
    confirmAlert({
      message: "Are you sure to do update this item?.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const token = sessionStorage.getItem("token");

            console.log(updateData);
            axios
              .post(
                `http://localhost:5000/byteproof-service/api/v1/terminal/single`,
                updateData,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((res) => {
                console.log(res.data.result);
                this.props.showTerminal(this.state.updateId);
                this.setState({
                  viewTerminal: false,
                  updateTerminal: "",
                  updateId: "",
                  updateName: "",
                  updateCode: "",
                  updateAccount: "",
                  updateAtm: "",
                  updateCheck: "",
                  editable: false,
                  alertUpdate: true,
                });
                setTimeout(() => {
                  this.setState({ alertUpdate: false });
                }, 2500);
                this.refresh();
              });
          },
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  };

  render() {
    const Terminal = [
      {
        name: "Terminal ID",
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

                whiteSpace: "pre",
                color: "#172433",
              },
            };
          },
        },
      },
      {
        name: "Terminal Name",
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

                whiteSpace: "pre",
                color: "#172433",
              },
            };
          },
        },
      },
      {
        name: "Branch Code",
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

                whiteSpace: "pre",
                color: "#172433",
              },
            };
          },
        },
      },
      {
        name: "Till Account",
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

                whiteSpace: "pre",
                color: "#172433",
              },
            };
          },
        },
      },
      {
        name: "Atm Type",
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

                whiteSpace: "pre",
                color: "#172433",
              },
            };
          },
        },
      },
      {
        name: "Status",
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

                whiteSpace: "pre",
                color: "#172433",
              },
            };
          },
        },
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
                <Tooltip title={"View Terminal"}>
                  <Button
                    onClick={this.viewTerminalData.bind(this, tableMeta)}
                    className="mt-0 mb-0"
                    color="info"
                  >
                    <i className="fa fa-eye" />
                  </Button>
                </Tooltip>
                <Tooltip title={"Delete Terminal"}>
                  <Button
                    onClick={this.showDeleteConfirm.bind(this, tableMeta)}
                    className="mt-0 mb-0"
                    color="danger"
                  >
                    <i className="fa fa-trash" />
                  </Button>
                </Tooltip>
              </>
            );
          },
        },
      },
    ];

    const options = {
      filter: true,
      selectableRows: true,
      filterType: "dropdown",
      responsive: "stacked",
      rowsPerPage: 7,
    };

    let outerArray = [];
    let innerArray = [];
    this.props.data.forEach((res) => {
      let jsObjs = res;
      innerArray = [];
      innerArray.push(jsObjs.terminalId);
      innerArray.push(jsObjs.terminalName);
      innerArray.push(jsObjs.branchCode);
      innerArray.push(jsObjs.tillAccount);
      innerArray.push(jsObjs.atmType);
      innerArray.push(jsObjs.status);
      outerArray.push(innerArray);
    });

    let outerArray2 = [];
    let innerArray2 = [];
    this.state.bulkData.forEach((res) => {
      let jsObjs = res;
      innerArray2 = [];
      innerArray2.push(jsObjs.terminalId);
      innerArray2.push(jsObjs.terminalName);
      innerArray2.push(jsObjs.branchCode);
      innerArray2.push(jsObjs.tillAccount);
      innerArray2.push(jsObjs.atmType);
      innerArray2.push(jsObjs.status);
      outerArray2.push(innerArray2);
    });

    // let outerArray2 = [];
    // let innerArray2= [];
    //   innerArray2.push(this.props.singleData.terminalId);
    //   innerArray2.push(this.props.singleData.terminalName);
    //   innerArray2.push(this.props.singleData.tillAccount);
    //   innerArray2.push(this.props.singleData.branchCode);
    //   innerArray2.push(this.props.singleData.atmType);
    //   innerArray2.push(this.props.singleData.status);
    //   innerArray2.push(this.props.singleData.createdAt);
    //   innerArray2.push(this.props.singleData.updatedAt);
    //   outerArray2.push(innerArray2);
    const { errors } = this.state;
    console.log('its is '+  this.props.data)
    return (
      <>
        <div className="">
        <Card className="card-stats pt-5">
              <CardBody>
                <Row className="">
                  <Col md="12">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text-info pt-1 pl-2">
                        <a href="/admin/dashboard">EJ Content Manager </a>/{" "}
                        <span>Terminal Management</span>
                      </p>
                      <div className="d-flex justify-content-end">
                        <Button color="info" size="sm" onClick={this.addSingle}>
                          {" "}
                          Add Terminal{" "}
                          <span className="mt-1 fa fa-plus-circle" />
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col />
                </Row>
              </CardBody>
            </Card>
          <div className="mt-5 pt-1">
           
            {this.state.alertAdd && (
              <Col md="6 offset-3">
                <Add />
              </Col>
            )}
            {this.state.alertUpdate && (
              <Col md="6 offset-3">
                <Update />
              </Col>
            )}
            {this.state.alertDel && (
              <Col md="6 offset-3">
                <Delete />
              </Col>
            )}

            {this.props.data.length !== 0 ? (
              <div className="content">
                <MuiThemeProvider theme={getMuiTheme()} className="ml-3">
                  <MUIDataTable
                    title={"TERMINAL LIST"}
                    data={outerArray}
                    columns={Terminal}
                    options={options}
                  />
                </MuiThemeProvider>

                <Card>
                  <CardBody>
                    <h4 className="text-center font-weight-bold">
                      Total Terminals <i class="fa fa-share" />{" "}
                      {this.props.totalTerminals}
                    </h4>
                  </CardBody>
                </Card>

                <Modal
                  title={"view terminal details"}
                  visible={this.state.viewTerminal}
                  onCancel={this.viewTerminalclose}
                  footer={null}
                  cancelText="Clear"
                  maskClosable={false}
                >
                  <Card>
                    <CardBody>
                      {this.props.singleData ? (
                        <div>
                          <Form>
                            <Row>
                              <Col className="" md="6">
                                <FormGroup>
                                  <Label
                                    for="exampleSelect"
                                    className="font-weight-bold"
                                  >
                                    Terminal ID
                                  </Label>
                                  <Input
                                    type="text"
                                    value={this.props.singleData.terminalId}
                                    disabled
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup>
                                  <Label
                                    for="exampleSelect"
                                    className="font-weight-bold"
                                  >
                                    Branch Code
                                  </Label>
                                  <Input
                                    type="text"
                                    value={this.props.singleData.branchCode}
                                    disabled
                                  />
                                </FormGroup>
                              </Col>
                            </Row>

                            <FormGroup>
                              <Label
                                for="exampleSelect"
                                className="font-weight-bold"
                              >
                                Terminal Name
                              </Label>
                              <Input
                                type="text"
                                value={this.props.singleData.terminalName}
                                disabled
                              />
                            </FormGroup>
                            <Row>
                              <Col md="6">
                                <FormGroup>
                                  <Label
                                    for="exampleSelect"
                                    className="font-weight-bold"
                                  >
                                    Till Account
                                  </Label>
                                  <Input
                                    type="text"
                                    value={
                                      this.props.singleData.tillAccount
                                        ? this.props.singleData.tillAccount
                                        : "Null"
                                    }
                                    disabled
                                  />
                                </FormGroup>
                              </Col>

                              <Col md="6">
                                <FormGroup>
                                  <Label
                                    for="exampleSelect"
                                    className="font-weight-bold"
                                  >
                                    Atm Type
                                  </Label>
                                  <Input
                                    type="text"
                                    value={this.props.singleData.atmType}
                                    disabled
                                  />
                                </FormGroup>
                              </Col>
                            </Row>

                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={
                                    this.props.singleData.status === 1
                                      ? true
                                      : false
                                  }
                                  color="primary"
                                />
                              }
                              label={
                                this.props.singleData.status === 1
                                  ? "Status : Enabled "
                                  : "Status: Disabled"
                              }
                            />
                            <Button
                              color="info"
                              size="md"
                              className="text-center btn btn-block"
                              onClick={this.editable}
                            >
                              EDIT DETAILS
                            </Button>
                          </Form>
                        </div>
                      ) : (
                        <Spinner type="Plane" />
                      )}
                    </CardBody>

                    <div />
                  </Card>
                </Modal>
                <Modal
                  title="Update Terminal"
                  visible={this.state.updatable}
                  footer={null}
                  onCancel={this.updateTerminalclose}
                  okText="Update"
                  cancelText="Clear"
                  maskClosable={false}
                >
                  <Form>
                    <Row>
                      <Col className="" md="6">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            Terminal ID
                          </Label>
                          <Input
                            type="text"
                            name="updateId"
                            value={this.state.updateId}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            Branch Code
                          </Label>
                          <Input
                            type="text"
                            name="updateCode"
                            onChange={this.onChange}
                            value={this.state.updateCode}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <FormGroup>
                      <Label for="exampleSelect" className="font-weight-bold">
                        Terminal Name
                      </Label>
                      <Input
                        type="text"
                        name="updateName"
                        onChange={this.onChange}
                        value={this.state.updateName}
                      />
                    </FormGroup>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            Till Account
                          </Label>
                          <Input
                            type="text"
                            name="updateAccount"
                            onChange={this.onChange}
                            value={this.state.updateAccount}
                          />
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            Atm Type
                          </Label>
                          <Input
                            type="select"
                            name="updateAtm"
                            onChange={this.onChange}
                          >
                            <option>{this.state.updateAtm}</option>
                            <option>Wincor</option>
                            <option>NCR</option>
                            <option>Hyosung</option>
                            <option>Daibold</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.updateCheck}
                          onChange={this.checkChange}
                          name="updateCheck"
                          color="primary"
                        />
                      }
                      label={
                        this.state.updateCheck
                          ? "Status : Enabled "
                          : "Status: Disabled"
                      }
                    />
                    <Button
                      color="info"
                      size="md"
                      className="text-center btn btn-block"
                      onClick={this.update}
                    >
                      SAVE DETAILS
                    </Button>
                  </Form>
                </Modal>
              </div>
            ) : (
              <Card className="card-stats my-5 py-5 ml-4 mr-4">
                <br />
                <br />
                <CardBody>
                  <Row className="">
                    <Col md="12">
                      <Spinner
                        type="ThreeDots"
                        color="#6D9FBB"
                        className="text-center"
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            )}
          </div>
        </div>

        <Modal
          title="Bulk Terminal Uploads"
          visible={this.state.Bulk}
          footer={null}
          onCancel={this.handleCancelBulk}
          okText="Update"
          cancelText="Clear"
          maskClosable={false}
          width={950}
          centered={true}
          bodyStyle={{ background: "whitesmoke" }}
        >
          <div>
            <MuiThemeProvider theme={getMuiTheme()} className="ml-3">
              <MUIDataTable
                data={outerArray2}
                columns={TerminalsM}
                options={options}
              />
            </MuiThemeProvider>
          </div>
        </Modal>

        <Modal
          title="Create Terminal"
          visible={this.state.addSingle}
          // onOk={this.singleTerminal}
          onCancel={this.handleCancelSearch}
          footer={null}
          okText="Add Terminal"
          cancelText="Clear"
          maskClosable={false}
          width={850}
        >
          <div>
            <Form>
              {this.state.validateForm && (
                <UncontrolledAlert
                  className="alert-with-icon"
                  color="danger"
                  fade={false}
                >
                  <span data-notify="icon" className="nc-icon nc-bell-55" />
                  <span data-notify="message">
                    Missing Fields Are Required!
                  </span>
                </UncontrolledAlert>
              )}
              <FormGroup>
                <Label for="exampleSelect" className="font-weight-bold">
                  Terminal Type
                </Label>
                <Input type="select" name="terminalId" onChange={this.onChange}>
                  <option>Single Terminal</option>
                  <option>Bulk Terminal</option>
                </Input>
              </FormGroup>
              {!this.state.terminalChanger ? (
                <div className="row">
                  <div className="col-md-4 pt-3">
                    <FormGroup>
                      <Label for="exampleSelect" className="font-weight-bold">
                        Terminal ID
                      </Label>
                      <Input
                        type="text"
                        name="terminalId"
                        onChange={this.onChange}
                        value={this.state.terminalId}
                        noValidate
                      />
                      {errors.terminalId.length > 0 && (
                        <span className="errorVal">{errors.terminalId}</span>
                      )}
                    </FormGroup>
                  </div>
                  <div className="col-md-4 pt-3">
                    <FormGroup>
                      <Label for="exampleSelect" className="font-weight-bold">
                        Till Account
                      </Label>
                      <Input
                        type="text"
                        name="tillAccount"
                        onChange={this.onChange}
                        value={this.state.tillAccount}
                        noValidate
                      />
                      {errors.tillAccount.length > 0 && (
                        <span className="errorVal">{errors.tillAccount}</span>
                      )}
                    </FormGroup>
                  </div>
                  <div className="col-md-4 pt-3">
                    <FormGroup>
                      <Label for="exampleSelect" className="font-weight-bold">
                        Branch Code
                      </Label>
                      <Input
                        type="text"
                        name="branchCode"
                        onChange={this.onChange}
                        value={this.state.branchCode}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-6 pt-3">
                    <FormGroup>
                      <Label for="exampleSelect" className="font-weight-bold">
                        Terminal Name
                      </Label>
                      <Input
                        type="text"
                        name="terminalName"
                        onChange={this.onChange}
                        value={this.state.terminalName}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-6 pt-3">
                    <FormGroup>
                      <Label for="exampleSelect" className="font-weight-bold">
                        Atm Type
                      </Label>
                      <Input
                        type="select"
                        name="atmType"
                        onChange={this.onChange}
                      >
                        <option>Select Atm Type</option>
                        <option>NCR</option>
                        <option>Wincor</option>
                        <option>Hyosung</option>
                        <option>Daibold</option>
                      </Input>
                    </FormGroup>
                  </div>
                  <div className="ml-auto">
                    <Button
                      color="info"
                      className="pt-2 pb-2"
                      size="sm"
                      onClick={this.singleTerminal}
                    >
                      ADD TERMINAL
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <form>
                    <div class="form-group text-center pt-4">
                      <label
                        for="exampleFormControlFile1"
                        className="text-center font-weight-bold"
                      >
                        {this.state.csv
                          ? this.state.csv.name
                          : "Attach Csv File"}
                        <br />
                        <i className="fa fa-upload fa-3x" />
                      </label>
                      <input
                        type="file"
                        name="csv"
                        class="form-control-file"
                        onChange={this.fileChange}
                      />
                    </div>
                    <div className="text-right">
                      <Button
                        color="info"
                        className=""
                        size="sm"
                        onClick={this.fileUpload}
                      >
                        ADD TERMINAL
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </Form>
          </div>
        </Modal>
      </>
    );
  }
  dataSet = [
    ["1050001", "001", "0012345678", "23257", "Active", "NGN", 2233],
    ["1050001", "001", "0012345678", "23257", "Active", "NGN", 2233],
    ["1050001", "001", "0012345678", "23257", "Active", "NGN", 2233],
    ["1050001", "001", "0012345678", "23257", "Active", "NGN", 2233],
    ["1050001", "001", "0012345678", "23257", "Active", "NGN", 2233],
    ["1050001", "001", "0012345678", "23257", "Active", "NGN", 2233],
    ["1050001", "001", "0012345678", "23257", "Active", "NGN", 2233],
  ];
}

TerminalMgt.propTypes = {
  data: PropTypes.array.isRequired,
  singleData: PropTypes.array.isRequired,
  showTerminal: PropTypes.func.isRequired,
};

const map = (state) => ({
  data: state.terminal.terminals,
  singleData: state.terminal.singleTerminal,
  single: state.terminal.single,
  totalTerminals: state.terminal.totalTerminals
});

export default connect(
  map,
  { terminals, showTerminal, deleteTerminal, singleTerminal }
)(TerminalMgt);
