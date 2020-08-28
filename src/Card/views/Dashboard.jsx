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
import { Line, Pie } from "react-chartjs-2";
import Header from "../components/Navbars/DemoNavbar";
// reactstrap components
import {Redirect} from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardImg,
  Button,
  CardText,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "../variables/charts.jsx";

class Dashboard extends React.Component {

  mo = () => {
    alert('moo')

  }
  render() {
   
    return (
      <div className="content">
        <Row>
          <Col md="8">
            <Card body inverse color="dark">
              <div className="d-flex justify-content-between align-items-top">
                <CardTitle className="text-white font-weight-bold h3">
                  BYTEPROOF
                </CardTitle>
                <CardText className="text-right">Good Day, Admin.</CardText>
              </div>
              <CardText className="text-left text-center">
                Welcome to Byteproof
              </CardText>
            </Card>

            <Row>
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-globe text-warning" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">ATM</p>
                          <br />
                          <CardTitle tag="p">300</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-sync-alt" onMouseOver={this.mo} /> Update Now
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="6" sm="6">
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
                          <p className="card-category">DATAS</p>
                          <br />
                          <CardTitle tag="p"> 1,345</CardTitle>
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
              <Col lg="3" md="6" sm="6">
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
                          <p className="card-category">lOGS</p>
                          <br />
                          <CardTitle tag="p">23</CardTitle>
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
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-favourite-28 text-primary" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">TRANS</p>
                          <br />
                          <CardTitle tag="p">+45K</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-sync-alt" /> Update now
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row></Row>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">TRANSACTION STATISTICS</CardTitle>
                <p className="card-category">Line Chart with Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Withdrawal{" "}
                  <i className="fa fa-circle text-warning" /> Deposits
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fas fa-sync-alt" /> Update now
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle tag="h5">TRANSACTION ANALYSIS</CardTitle>
                <p className="card-category">Recent Transaction Performance</p>
              </CardHeader>
              <CardBody>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Opened{" "}
                  <i className="fa fa-circle text-warning" /> Read{" "}
                  <i className="fa fa-circle text-danger" /> Deleted{" "}
                  <i className="fa fa-circle text-gray" /> Unopened
                </div>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Update now
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card body inverse color="dark">
              <div className="d-flex justify-content-between align-items-top">
                <CardTitle className="text-white font-weight-bold h3">
                  SYSTEM MODULES
                </CardTitle>
                <CardText className="text-right text-info font-weight-bold">
                  Good Day, Admin.
                </CardText>
              </div>
              <div className="text-center">
                <Col md="12">
                  <Card body inverse color="dark">
                    <CardTitle className="font-weight-bold  text-center text-success">
                      EJ CONTENT MANAGER
                    </CardTitle>
                    <i className="font-weight-bold text-success text-center fa fa-file"></i>
                    <CardText>
                      With supporting Modularity and Included Functionality of
                      Managing Financial Contents and Records Efficiently.
                    </CardText>
                    <button className="btn btn-sm btn-info">EXPLORE</button>
                  </Card>
                </Col>
                <Col md="12">
                  <Card body inverse color="dark">
                    <CardTitle className="font-weight-bold text-success text-center">
                      EJ BULK SEARCH
                    </CardTitle>
                    <i className="text-center text-success fa fa-search"></i>
                    <CardText>
                      With supporting Modularity and Included Functionality of
                      Searching Bulky Financial Contents and Records
                      Efficiently..
                    </CardText>
                    <button className="btn btn-sm btn-info">EXPLORE</button>
                  </Card>
                </Col>
                <Col md="12">
                  <Card body inverse color="dark">
                    <CardTitle className="font-weight-bold text-success text-center">
                      EJ TRANSACTIONAL SEARCH
                    </CardTitle>
                    <i className="text-center text-success fa fa-search"></i>
                    <CardText>
                      With supporting Modularity and Included Functionality of
                      Searching Transactional Financial Contents and Records
                      Efficiently..
                    </CardText>
                    <button className="btn btn-sm btn-info">EXPLORE</button>
                  </Card>
                </Col>
                <Col md="12">
                  <Card body inverse color="dark">
                    <CardTitle className="font-weight-bold text-success text-center">
                      EJ POOL DASHBOARD
                    </CardTitle>
                    <i className="text-center fa fa-exchange text-success"></i>
                    <CardText>
                      With supporting Modularity and Included Functionality of
                      Managing the Overflow of Large Financial Contents and
                      Records Efficiently..
                    </CardText>
                    <button className="btn btn-sm btn-info">EXPLORE</button>
                  </Card>
                </Col>
                <Col md="12">
                  <Card body inverse color="dark">
                    <CardTitle className="font-weight-bold text-success text-center text-success">
                      DISPUTE MANAGER
                    </CardTitle>
                    <i className="text-center fa fa-briefcase text-success"></i>
                    <CardText>
                      With supporting Modularity and Included Functionality of
                      Managing And Resolving Disputes in Financial Contents and
                      Records Efficiently..
                    </CardText>
                    <button className="btn btn-sm btn-info">EXPLORE</button>
                  </Card>
                </Col>
                <Col md="12">
                  <Card body inverse color="dark">
                    <CardTitle className="font-weight-bold text-white text-center text-success">
                      GL PROOFING
                    </CardTitle>
                    <i className="text-center fa fa-eye text-success"></i>
                    <CardText>
                      With supporting Modularity and Included Functionality
                      Financial Contents and Records Proofing Efficiently..
                      <br />
                      <br />
                    </CardText>
                    <button className="btn btn-sm btn-info">EXPLORE</button>
                  </Card>
                </Col>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
