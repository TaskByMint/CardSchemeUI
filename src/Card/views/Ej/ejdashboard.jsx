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
import {Table} from "../Table";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,

  Col

} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,


  dashboardNASDAQChart
} from "../../variables/charts.jsx";
import Header from '../../components/Navbars/DemoNavbar'


class Dashboard extends React.Component {
  render() {

    return (
      <>
        <div className="content">
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
                        <p className="card-category">Count of Success</p>
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
                        <p className="card-category">Count of Suspicious</p>
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
                        <p className="card-category">Count of failures</p>
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
            <Col lg="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">System Success Count</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Bar
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
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
          <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Count Of Suspicious</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Pie
                     data={dashboardEmailStatisticsChart.data}
                     options={dashboardEmailStatisticsChart.options}
                    width={400}
                    height={100}
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
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Count Of Suspicious</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
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
          <Col lg="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Count Of failures</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                <Radar
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
                  <CardTitle tag="h5">Performance Rate Behavior</CardTitle>
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


        </div>
      </>
    );
  }
  dataSet = [
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25","$170,750","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Doris Wilder", "Sales Assistant", "Sydney", "3023", "2010/09/20", "$85,600","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Michelle House", "Integration Specialist", "Sydney", "2769", "2011/06/02", "$95,400","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"],
    ["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675","Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25"]
];
}

export default Dashboard;
