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
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
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
import Tooltip from "@material-ui/core/Tooltip";
import Header from "../../components/Navbars/DemoNavbar";
import PropTypes from 'prop-types'
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import axios from "axios";
import { getMuiTheme } from "../../variables/functions/func";
import {connect} from 'react-redux';
import {groups, singleGroup} from '../../action/group'
class GLRGroup extends React.Component {
  state = {
    createGroup: false,
    bpGroup: "",
    automatch: "",
    classDesc: "",
    className: "",
    classStatus: "",
    viewGroup: false,
    groupDesc: '',
    updateGroup: false,
    updateID : '',
    updatebpGroup: '',
    updateGroupDesc: ''
  };

  cancelClass = () => this.setState({ createGroup: false });
  
  editGroup = () => this.setState({updateGroup:true, viewGroup:false})

  cancelUpdate = () => this.setState({updateGroup:false})


  componentWillMount = () => {
    this.refresh()
  };
 
  refresh =() => {
    const token = sessionStorage.getItem('token')
    this.props.groups(token)
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  closeViewGroup = () => this.setState({viewGroup:false})

  createGroup = () => {
    const token = sessionStorage.getItem("token");
    const group = {
     groupname: this.state.bpGroup,
     groupdesc: this.state.groupDesc
    };
    axios
      .post(
        `http://54.194.183.10:5000/byteproof-service/api/v1/bpgroup/create`,
        group,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.result);
        this.setState({
          groupName: "",
          groupDesc: "",
          createGroup:false
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  toggle = (e) => {
    e.preventDefault();
    this.setState({ createGroup: true });
  };

  toggle2 = (e) => {
    e.preventDefault();
    this.setState({ createModal: !this.state.createModal });
  };

  viewGroup = (id) => {
    this.setState({viewGroup: true})
    const token = sessionStorage.getItem('token')
    const groupID =  id.rowData[0]
    this.setState({
      updateID: id.rowData[0],
      updatebpGroup: id.rowData[1],
      updateGroupDesc: id.rowData[2]
    })
    this.props.singleGroup(token, groupID)
   
  }

  addNewGroup  = (e) => {
    e.preventDefault()
    const token = sessionStorage.getItem('token')
    const group = {
      groupdesc: this.state.bpGroup,
      groupname: this.state.groupDesc,
    }
    axios.post(`http://54.194.183.10:5000/byteproof-service/api/v1/bpgroup/create`,group, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).
    then((res) => {
        this.setState({createGroup:false ,bpGroup: '', groupDesc: ''})
        this.refresh()
    })
  }

  showDeleteConfirm = (id) => {
    confirmAlert({
      message: 'Are you sure to do delete this Group Item.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            const token = sessionStorage.getItem('token');
            const groupID = id.rowData[0]
            axios.delete(`http://54.194.183.10:5000/byteproof-service/api/v1/bpgroup/${groupID}`, {
              headers: {
                  Authorization : `Bearer ${token}`
              }
          }).
          then((res) => {
              console.log(res.data.result)
              this.refresh()       
          })
          
          }
        },
        {
          label: 'No',
          onClick: () => console.log('Click No')
        }
      ]
    });

  }

  update = (id) => {
    this.setState({updateGroup:false})
    confirmAlert({
      message: 'Are you sure to do Update this Group Item.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            const datas = {
              groupdesc: this.state.updateGroupDesc,
              groupname: this.state.updatebpGroup
            }
            const token = sessionStorage.getItem('token');
            axios.put(`http://54.194.183.10:5000/byteproof-service/api/v1/bpgroup/${this.state.updateID}`, datas,{
              headers: {
                  Authorization : `Bearer ${token}`
              }
          }).
          then((res) => {
              console.log(res.data.result)
              this.refresh()       
          })
          
          }
        },
        {
          label: 'No',
          onClick: () => console.log('Click No')
        }
      ]
    });

  }


  render() {

    let Groups = [];
    let innerArray= [];
    this.props.allGroups.forEach(res => {
      let jsObjs = res;
      innerArray = [];
      innerArray.push(jsObjs.id);
      
      innerArray.push(jsObjs.pfgroupname);
      innerArray.push(jsObjs.pfgroupdesc);
      Groups.push(innerArray);
    });

    const Group = [
      {
        name: "ID",
        options: {
          filter: false,
          display: false,
        },
      },
      {
        name: "PF Group Name",
        options: {
          filter: true,
          customHeadRender: (columnMeta, updateDirection) => (
            <th
              style={{ cursor: "pointer", color: "#172433" }}
            >
               {columnMeta.name}
            </th>
          ),
       
        },
      },
      {
        name: "PF Group Description",
        options: {
          filter: true,
          customHeadRender: (columnMeta, updateDirection) => (
            <th
              style={{ cursor: "pointer", color: "#172433" }}
            >
              {columnMeta.name}
            </th>
          ),
        },
      },
      {
        name: "Action",
        options: {
          filter: false,
          customHeadRender: (columnMeta, updateDirection) => (
            <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:'#172433',paddingLeft: '2rem' }}>
              {columnMeta.name}
            </th>
          ),
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <>
              <Tooltip title="View Group">
              <Button onClick={this.viewGroup.bind(this,tableMeta)} className="mt-0 mb-0" color="info"  >
               <i className="fa fa-eye"></i>
              </Button>
              </Tooltip>
              <Tooltip title={"Delete Group"}>
              <Button onClick={this.showDeleteConfirm.bind(this,tableMeta)} className="mt-0 mb-0" color="danger" >
              <i className="fa fa-trash"></i>
              </Button>
              </Tooltip>
              
              
             
            </>
            );
          }
        }
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
                      <span>Byteproof Group</span>
                    </p>
                    <div className="d-flex justify-content-end">
                      <Button color="info" size="sm" onClick={this.toggle}>
                        {" "}
                        Add Group{" "}
                        <span className="mt-1 fa fa-plus-circle" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col />
              </Row>
            </CardBody>
          </Card>

         
              <div className="col-md-8 offset-2 pt-3 pb-3">
                <MuiThemeProvider theme={getMuiTheme()}>
                  <MUIDataTable
                    title={"BP GROUP"}
                    data={Groups}
                    columns={Group}
                    options={options}
                  />
                </MuiThemeProvider>
              </div>
            

          <div>
            <Modal
              title="Create BP Group"
              visible={this.state.createGroup}
              onCancel={this.cancelClass}
              footer={null}
              okText="Add Terminal"
              cancelText="Clear"
              maskClosable={false}
              centered={true}
            >
              <div>
                <Form>
                  <FormGroup>
                    <Label for="exampleSelect" className="font-weight-bold">
                      BP Group Name
                    </Label>
                    <Input
                      type="text"
                      name="bpGroup"
                      onChange={this.onChange}
                      value={this.state.bpGroup}
                      noValidate
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect" className="font-weight-bold">
                      BP Group Description
                    </Label>
                    <Input
                      type="textarea"
                      name="groupDesc"
                      onChange={this.onChange}
                      value={this.state.groupDesc}
                      noValidate
                    />
                  </FormGroup>

                  <div className="text-right">
                    <Button
                      color="info"
                      className="pt-2 pb-2 mt-3"
                      size="sm"
                      onClick={this.addNewGroup}
                    >
                      ADD GROUP
                    </Button>
                  </div>
                </Form>
              </div>
            </Modal>
            {this.props.single &&
            <Modal
              title={"View Group details"}
              visible={this.state.viewGroup}
              onCancel={this.closeViewGroup}
              footer={null}
              cancelText="Clear"
              maskClosable={false}
            >
              <Card>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label
                        for="exampleSelect"
                        className="font-weight-bold"
                      >
                        Group Name
                      </Label>
                      <Input
                        type="text"
                        value={this.props.single.pfgroupname}
                        disabled
                      />
                    </FormGroup>
                    <br />

                    <FormGroup>
                      <Label
                        for="exampleSelect"
                        className="font-weight-bold"
                      >
                        Group Description
                      </Label>
                      <Input
                        type="textarea"
                        value={this.props.single.pfgroupdesc}
                        disabled
                      />
                    </FormGroup>

                    <Button
                      color="info"
                      
                      className="pt-2 pb-2 btn-block mt-3 mb-3"
                      size="sm"
                      onClick={this.editGroup}
                    >
                      EDIT GROUP
                    </Button>
                  </Form>
                </CardBody>
                <div />
              </Card>
            </Modal>}

            <Modal
              title="Update BP Group"
              visible={this.state.updateGroup}
              onCancel={this.cancelUpdate}
              footer={null}
              okText="Add Terminal"
              cancelText="Clear"
              maskClosable={false}
              centered={true}
            >
              <div>
                <Form>
                  <FormGroup>
                    <Label for="exampleSelect" className="font-weight-bold">
                      BP Group Name
                    </Label>
                    <Input
                      type="text"
                      name="updatebpGroup"
                      onChange={this.onChange}
                      value={this.state.updatebpGroup}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect" className="font-weight-bold">
                      BP Group Description
                    </Label>
                    <Input
                      type="textarea"
                      name="updateGroupDesc"
                      onChange={this.onChange}
                      value={this.state.updateGroupDesc}
                    />
                  </FormGroup>

                  <div className="text-right">
                    <Button
                      color="info"
                      className="pt-2 pb-2 mt-3"
                      size="sm"
                      onClick={this.update}
                    >
                      UPDATE GROUP
                    </Button>
                  </div>
                </Form>
              </div>
            </Modal>
          </div>
        </div>
      </>
    );
  }

}
const map = state => ({
  allGroups: state.group.groups,
  single: state.group.group
})

export default connect(map, {groups, singleGroup})(GLRGroup);
