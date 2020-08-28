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
  UncontrolledAlert,
} from "reactstrap";
import { Modal } from "antd";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "../../variables/charts.jsx";
import Header from "../../components/Navbars/DemoNavbar";
import MUIDataTable from "mui-datatables";
import { getMuiTheme } from "../../variables/functions/func";
import axios from "axios";

class GLRAccounts extends React.Component {
  state = {
    createAccount: false,
    terminalChanger: false,
    accounts: {
      pfAccountName: "",
      pfAccountNum: "",
      pfAccountMatch: "",
      pfAccountStatus: "",
      pfAccountData: "",
      bpClass: "",
      componentNameA: "",
      componentNameB: "",
      componentDescA: "",
      componentDescB: "",
      componentBalA: "",
      componentBalB: "",
      pfAccountDesc: "",
      pfAccountType: "",
      pfAccountCurrency: "",
      bpBankA: "",
      bpBankB: "",
    },
  };

  toggle = (e) => this.setState({ createAccount: true });

  cancelAccount = () => this.setState({ createAccount: false });

  onChange = (e) => {
    const { accounts } = { ...this.state };
    const currentState = accounts;
    const { name, value } = e.target;
    currentState[name] = value;
    this.setState({ accounts: currentState });

    if (e.target.value === "Bulk Account") {
      this.setState({
        terminalChanger: true,
      });
    } else if (e.target.value === "Single Account") {
      this.setState({
        terminalChanger: !this.state.terminalChanger,
      });
    }
  };

  accountCreate = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    // const accountData = {
    //   bpBankA: this.state.accounts.bpBankA,
    //   bpBankB: this.state.accounts.bpBankB,
    //   bpClass: this.state.accounts.bpClass,
    //   componentBalanceA: this.state.accounts.componentBalA,
    //   componentBalanceB: this.state.accounts.componentBalB,
    //   componentDescA: this.state.accounts.componentDescA,
    //   componentDescB: this.state.accounts.componentDescB,
    //   componentNameA: this.state.accounts.componentNameA,
    //   componentNameB: this.state.accounts.componentNameB,
    //   pfAccountAutoMatch: this.state.accounts.pfAccountMatch,
    //   pfAccountCurrency: this.state.accounts.pfAccountCurrency,
    //   pfAccountDataFiles: this.state.accounts.pfAccountData,
    //   pfAccountDesc: this.state.accounts.pfAccountDesc,
    //   pfAccountName: this.state.accounts.pfAccountName,
    //   pfAccountNumber: this.state.accounts.pfAccountNum,
    //   pfAccountReconType: this.state.accounts.pfAccountType,
    //   pfAccountStatus: this.state.accounts.pfAccountStatus
    // }
    const datas = new FormData();
    datas.append("bpBankA", this.state.accounts.bpBankA);
    datas.append("bpBankB", this.state.accounts.bpBankB);
    datas.append("bpClass", this.state.accounts.bpClass);
    datas.append("componentBalanceA", this.state.accounts.componentBalA);
    datas.append("componentBalanceB", this.state.accounts.componentBalB);
    datas.append("componentDescA", this.state.accounts.componentDescA);
    datas.append("componentDescB", this.state.accounts.componentDescB);
    datas.append("componentNameA", this.state.accounts.componentNameA);
    datas.append("componentNameB", this.state.accounts.componentNameB);
    datas.append("pfAccountAutoMatch", this.state.accounts.pfAccountMatch);
    datas.append("pfAccountDesc", this.state.accounts.pfAccountDesc);
    datas.append("pfAccountName", this.state.accounts.pfAccountName);
    datas.append("pfAccountNumber", this.state.accounts.pfAccountNum);
    datas.append("pfAccountReconType", this.state.accounts.pfAccountType);
    datas.append("pfAccountCurrency", this.state.accounts.pfAccountCurrency);
    datas.append("pfAccountStatus", this.state.accounts.pfAccountStatus);
    datas.append(
      "pfAccountDataFiles",
      this.state.accounts.pfAccountData,
      this.state.accounts.pfAccountData.name
    );
    console.log(datas);
    axios
      .post(
        `http://54.194.183.10:5000/byteproof-service/api/v1/bpaccount/create`,
        datas,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            ContentType: "multipart/form-data",
          },
        }
      )
      .then((res) => {
        this.setState({
          bpBankA: "",
          bpBankB: "",
          bpClass: "",
          componentBalB: "",
          componentBalA: "",
          componentDescA: "",
          componentDescB: "",
          componentNameA: "",
          componentNameB: "",
          pfAccountMatch: "",
          pfAccountCurrency: "",
          pfAccountData: "",
          pfAccountDesc: "",
          pfAccountName: "",
          pfAccountNum: "",
          pfAccountType: "",
          pfAccountStatus: "",
        });
      });
  };

  render() {
    const columns = [
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
        },
      },
      {
        name: "Account Number",
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
        name: "Account Description",
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
        name: "Account Status",
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
        name: "Currency",
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
        name: "DataLoadablFile",
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
                backgroundColor: "lightgrey",
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
                      <a href="/admin/dashboard">GL Proofing </a>/{" "}
                      <span>ByteProof Account</span>
                    </p>
                    <div className="d-flex justify-content-end">
                      {/* <Button color="primary" size="sm" onClick={this.toggle}>Search Account <span className="fa fa-search"></span></Button> */}
                      <Button color="info" size="sm" onClick={this.toggle}>
                        Create Account <span className="fa fa-plus" />
                      </Button>
                      {/* <Button color="info" size="sm">Bulk Account Create <span className="fa fa-plus-circle"></span></Button> */}
                    </div>
                  </div>
                </Col>
                <Col />
              </Row>
            </CardBody>
          </Card>

          <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={"Byteproof account list"}
              data={this.dataSet}
              columns={columns}
              options={options}
            />
          </MuiThemeProvider>

          <div>
            <Modal
              title="Create BP Account"
              visible={this.state.createAccount}
              onCancel={this.cancelAccount}
              footer={null}
              okText="Add Terminal"
              cancelText="Clear"
              maskClosable={false}
              width={930}
            >
              <div>
                <Form>
                  <div className="pt-3">
                    <FormGroup className="pt-2">
                      <Label for="exampleSelect" className="font-weight-bold">
                        Terminal Type
                      </Label>
                      <Input
                        type="select"
                        name="terminalId"
                        onChange={this.onChange}
                      >
                        <option>Single Account</option>
                        <option>Bulk Account</option>
                      </Input>
                    </FormGroup>
                  </div>
                  {!this.state.terminalChanger ? (
                    <div className="row">
                      <div className="col-md-4 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            PF AccountName
                          </Label>
                          <Input
                            type="text"
                            name="pfAccountName"
                            onChange={this.onChange}
                            value={this.state.pfAccountName}
                            noValidate
                          />
                        </FormGroup>
                      </div>
                      <div className="col-md-4 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            PF AccountNumber
                          </Label>
                          <Input
                            type="text"
                            name="pfAccountNum"
                            onChange={this.onChange}
                            value={this.state.pfAccountNum}
                            noValidate
                          />
                        </FormGroup>
                      </div>

                      <div className="col-md-4 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            PF Account AutoMatch
                          </Label>
                          <Input
                            type="text"
                            name="pfAccountMatch"
                            onChange={this.onChange}
                            value={this.state.pfAccountMatch}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-md-4 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            PF Account Status
                          </Label>
                          <Input
                            type="select"
                            name="pfAccountStatus"
                            onChange={this.onChange}
                            value={this.state.pfAccountStatus}
                          >
                            <option>Select Class Status</option>
                            <option>Select Class Status</option>
                            <option>Select Class Status</option>
                          </Input>
                        </FormGroup>
                      </div>

                      <div className="col-md-4 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            PF Account Reconciliation Type
                          </Label>
                          <Input
                            type="select"
                            name="pfAccountType"
                            onChange={this.onChange}
                            value={this.state.pfAccountType}
                          >
                            <option>Select Class Status</option>
                            <option>Select Class Status</option>
                            <option>Select Class Status</option>
                          </Input>
                        </FormGroup>
                      </div>
                      <div className="col-md-4 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            BP Class
                          </Label>
                          <Input
                            type="text"
                            name="bpClass"
                            onChange={this.onChange}
                            value={this.state.bpClass}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-md-4 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            Component Name A
                          </Label>
                          <Input
                            type="text"
                            name="componentNameA"
                            onChange={this.onChange}
                            value={this.state.componentNameA}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-md-4 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            Component Name B
                          </Label>
                          <Input
                            type="text"
                            name="componentNameB"
                            onChange={this.onChange}
                            value={this.state.componentNameB}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-md-4 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            Component Description A
                          </Label>
                          <Input
                            type="text"
                            name="componentDescA"
                            onChange={this.onChange}
                            value={this.state.componentDescA}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-md-4 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            Component Description B
                          </Label>
                          <Input
                            type="text"
                            name="componentDescB"
                            onChange={this.onChange}
                            value={this.state.componentDescB}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-md-4 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            Component Balance A
                          </Label>
                          <Input
                            type="text"
                            name="componentBalA"
                            onChange={this.onChange}
                            value={this.state.componentBalA}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-md-4 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            Component Balance B
                          </Label>
                          <Input
                            type="text"
                            name="componentBalB"
                            onChange={this.onChange}
                            value={this.state.componentBalB}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-md-12 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            PF Account Description
                          </Label>
                          <Input
                            type="textarea"
                            name="pfAccountDesc"
                            onChange={this.onChange}
                            value={this.state.pfAccountDesc}
                          />
                        </FormGroup>
                      </div>

                      <div className="col-md-12 pt-3">
                        <FormGroup>
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            PF Account Currency
                          </Label>
                          <Input
                            type="select"
                            name="pfAccountCurrency"
                            onChange={this.onChange}
                            value={this.state.pfAccountCurrency}
                          >
                            <option>Select Class Status</option>
                            <option>Select Class Status</option>
                            <option>Select Class Status</option>
                          </Input>
                        </FormGroup>
                      </div>
                      <div className="col-md-12 pt-3">
                        <FormGroup className="pt-2">
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            BP Bank A
                          </Label>
                          <Input
                            type="select"
                            name="bpBankA"
                            onChange={this.onChange}
                          >
                            <option>Select Class Status</option>
                            <option>Select Class Status</option>
                            <option>Select Class Status</option>
                          </Input>
                        </FormGroup>
                      </div>
                      <div className="col-md-12 ">
                        <FormGroup className="pt-3">
                          <Label
                            for="exampleSelect"
                            className="font-weight-bold"
                          >
                            BP Bank B
                          </Label>
                          <Input
                            type="select"
                            name="bpBankB"
                            onChange={this.onChange}
                          >
                            <option>Select Class Status</option>
                            <option>Select Class Status</option>
                            <option>Select Class Status</option>
                          </Input>
                        </FormGroup>
                      </div>
                      <div className="col-md-12 pt-3">
                        <FormGroup>
                          <label
                            for="exampleFormControlFile1"
                            className="text-center font-weight-bold"
                          >
                            {this.state.csv
                              ? this.state.csv.name
                              : "Attach PFAccount DataFile"}
                            <br />
                            <i className="fa fa-upload fa-3x" />
                          </label>
                          <Input
                            type="file"
                            name="pfAccountData"
                            onChange={this.onChange}
                            value={this.state.pfAccountData}
                          />
                        </FormGroup>
                      </div>

                      <div className="ml-auto">
                        <Button
                          color="info"
                          className="pt-2 pb-2 mt-3 MT-3"
                          size="sm"
                          onClick={this.accountCreate}
                        >
                          ADD ACCOUNT
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
          </div>
        </div>
      </>
    );
  }
  dataSet = [
    [
      "Direct Payment",
      "Direct Pay-ment Recievable",
      "0012345678",
      "Holds Direct Payment Recievable Transaction",
      "Active",
      "NGN",
      2,
    ],
  ];
}

export default GLRAccounts;
