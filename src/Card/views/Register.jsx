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
/*eslint-disable*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
   Label, FormText } from 'reactstrap';
   import logo from '../assets/img/g5842.png';
   import {Redirect } from 'react-router-dom'
   import Footer from '../components/Footer/Footer';
   import Spinner from 'react-loader-spinner'

class ByteRegister extends React.Component {
  state = {
    visible: false,
    register: false
  };

  onClick = (e) => {
    e.preventDefault();
    this.setState({
      visible: true
    })
  }

  register = (e) =>{
    e.preventDefault();
    this.setState({
      register: true
    })

  }

  loginLink = (e) => {
    e.preventDefault();
    this.props.history.push('/login')

  }
 
  render() {
    if(this.state.visible){
      return(
        <Redirect to="/dashboard" />
      )
    }
    return (
      <>
        <div className="content login-bg">
          <br />
   
        
  <div className="mt-4  d-flex justify-content-center align-items-center">
  <div class="card" style={{width: "20rem"}}>
  <img src={logo} class="logo-normal  card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text text-danger text-center font-weight-bold">Register</p>
    {this.state.register && <Spinner className="text-center pt-0" type="Oval" width={30} />}
    <Form className="col-md-12">
      <FormGroup>
        <Label for="exampleEmail" className="text-left">Email</Label>
        <Input type="email" name="email" id="exampleEmail"  />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail" className="text-left">Usernamee</Label>
        <Input type="email" name="email" id="exampleEmail"  />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail" className="text-left">Password</Label>
        <Input type="email" name="email" id="exampleEmail"  />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail" className="text-left">Confirm Password</Label>
        <Input type="email" name="email" id="exampleEmail"  />
      </FormGroup>
      <Button onClick={this.onClick} onClick={this.register} color="dark btn-block">REGISTER</Button>
      <Button onClick={this.onClick} onClick={this.loginLink} color="primary btn-block">Login</Button>
    </Form>
  </div>
</div>
                  </div>   
                  <Footer className="" />
              
         
        </div>
      </>
    );
  }
}

export default ByteRegister;
