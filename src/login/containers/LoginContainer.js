import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LoginComponent from '../components/LoginComponent';


export default class LoginContainer extends Component {

constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      token:"",
    };

    this.validateForm = this.validateForm.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    var reqData = {
            "email": this.state.email,
            "password": this.state.password,
        };

    axios({
          method: 'post',
          url: 'http://localhost:3001/users/login',
          withCredentials: true,
          crossdomain: true,
          data: Object.keys(reqData).map(function(key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(reqData[key])}).join('&'),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    }).then(function (response) {
      console.log("Heade With Authentication :");
      console.log(response);
      console.log(typeof(response));
      axios.defaults.headers.common['x-auth-token'] = response.data.token;
    })
    .catch(function (error) {
      console.log("Post Error : " + error);
    });
  }



  render() {
    return (
      <LoginComponent handleSubmit={this.handleSubmit} handleChange={this.handleChange} validateForm={this.validateForm} />
    );
  }
}
