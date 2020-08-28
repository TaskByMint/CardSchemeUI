/*!

=========================================================
* Paper Byte React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-Byte-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-Byte-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie,Bar,Radar ,Doughnut} from "react-chartjs-2";
import { Table, Label, Form, Input, FormGroup, Button, } from 'reactstrap';
import PrettyJSON from 'react-prettify-json';
import ParseJson from 'parse-json';


import axios from 'axios'
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,

  Col

} from "reactstrap";
import Axios from "axios";
import parseJson from "parse-json";
// core components


const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
class Byte extends React.Component {
  state = {
    cbn: "",
    fills2: false,
    errors: {
      cbn: "",
      terminalId: "",
      branchCode: "",
    },
    start: "",
    limit: "",
    response1: {},
    truu: false,
    truu2: false,
    response2: {
      success: true,
      start: 1,
      limit: 2,
      size: 8,
      payload: '{"45717988":1,"45717958":17}',
    },
    error: false,
    show: false,
    error2: false,
    fills: false,
    jsonObject: [
  

    ]
  }

  onChange = (e) => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "cbn":
        errors.cbn =
          value.length <= 1
            ? "Card Bin must be at least 8 digit characters long!"
            : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  verify = () => {
    if (this.state.cbn) {
      if (validateForm(this.state.errors)) {
        axios
          .get(`http://localhost:3002/card-scheme/verify/${this.state.cbn}`)
          .then((res) => {
            if (res.data.success) {
              this.setState({ response1: res.data.payload, truu1: true });
              this.getCount2()

            } else {
              this.setState({
                error: true,
              });
              setTimeout(() => {
                this.setState({
                  error: false,
                });
              }, 2000);
            }
          })
          .catch((err) => {});
      }
    } else {
      this.setState({ fills: true });
      setTimeout(() => {
        this.setState({ fills: false });
      }, 2000);
    }
  };

  getCount = () => {
    if (this.state.start && this.state.limit) {
      axios
        .get(
          `http://localhost:3002/card-scheme/stats?start=${this.state.start}&limit=${this.state.limit}`
        )
        .then((res) => {
          if (res.data.success) {
            this.setState({ response2: res.data, truu2: true });
          } else {
            this.setState({ error2: true });
            setTimeout(() => {
              this.setState({ error2: false });
            }, 2000);
          }
        })
        .catch(() => {});
    } else {
      this.setState({ fills2: true });
      setTimeout(() => {
        this.setState({ fills2: false });
      }, 2000);
    }
  };

  getCount2 = () => {
    
      axios
        .get(
          `http://localhost:3001/card-scheme/consume`
        )
        .then((res) => {
          this.setState({jsonObject: res.data, show:true})
        })
        .catch(() => {});
 
  };



 
  render() {
    const JSON = parseJson(this.state.response2.payload)
  

    return (
      <>
        <div className="content container">
          <Row className="mt-5 pt-5 ">
            <Col lg="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Card Scheme Verification</CardTitle>
                  <p className="card-category">Kafka Producer</p>
                </CardHeader>
                <CardBody>
                  <Form className="col-md-10 offset-1">
                    <FormGroup>
                      <Label className="font-weight-bold">Card Bin</Label>
                      <Input
                        type="number"
                        name="cbn"
                        onChange={this.onChange}
                        style={{ border: this.state.fills && "1px solid red" }}
                      />
                      {this.state.errors.cbn.length > 0 && (
                        <span className="errorVal">
                          {this.state.errors.cbn}
                        </span>
                      )}
                    </FormGroup>
                    <div className="text-right">
                      <Button color="info" onClick={this.verify}>
                        Verify Card
                      </Button>
                    </div>
                  </Form>
                  {this.state.truu1 && (
                    <div>
                      <hr />
                      <div>
                        <p>
                          <span className="font-weight-bold">SCHEME : </span>
                          {this.state.response1.scheme}
                        </p>
                        <p>
                          {" "}
                          <span className="font-weight-bold">TYPE :</span>{" "}
                          {this.state.response1.type}
                        </p>
                        <p>
                          <span className="font-weight-bold">BANK : </span>
                          {this.state.response1.bank}
                        </p>
                      </div>
                    </div>
                  )}
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Get Hit Count</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="col-md-10 offset-1">
                    <FormGroup>
                      <Label className="font-weight-bold">Start</Label>
                      <Input
                        type="number"
                        name="start"
                        onChange={this.onChange}
                        style={{ border: this.state.fills2 && "1px solid red" }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className="font-weight-bold">Limit</Label>
                      <Input
                        type="number"
                        name="limit"
                        onChange={this.onChange}
                        style={{ border: this.state.fills2 && "1px solid red" }}
                      />
                    </FormGroup>
                    <div className="text-right">
                      <Button color="info" onClick={this.getCount}>
                        Get Hit Count
                      </Button>
                    </div>
                  </Form>
                  {this.state.truu2 && (
                    <div>
                      <hr />
                      <p>
                        <span className="font-weight-bold">START : </span>
                        {this.state.start}
                      </p>
                      <p>
                        {" "}
                        <span className="font-weight-bold">LIMIT :</span>{" "}
                        {this.state.limit}
                      </p>
                      <p>
                        {" "}
                        <span className="font-weight-bold">SIZE :</span>{" "}
                        {this.state.response2.size}
                      </p>

                      <Table>
                        <thead>
                          <tr>
                            <th>CARD BIN</th>
                            <th>NUMBER OF COUNT</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.keys(JSON).map(
                            (key, i) => {
                              return (
                                <tr key={i}>
                                  <td>{key}</td>
                                  <td> {JSON[key]}</td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </Table>
                    </div>
                  )}
                </CardBody>
              </Card>
            </Col>

            <Col md="6">
              <Card>
                <CardHeader>
                  <p className="pt-5">Kafka Consumer</p>
                </CardHeader>
                <CardBody>
                  <div className="">
    <PrettyJSON 
    jsonObject={this.state.jsonObject}
    colors={{
      punctuation: '#fff',
      key: '#a3fff3',
      value: '#49cabe',
      string: '#49caeb',
    }}
  />                  </div>
                 
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Byte;