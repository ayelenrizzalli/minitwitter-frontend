import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import NewTweetForm from '../components/NewTweetFormComponent';


class NewTweetContainer extends Component {

constructor(props) {
    super(props);

    this.state = {
      tweetText: "",
      token: axios.defaults.headers.common['x-auth-token'],
    };

    this.validateForm = this.validateForm.bind(this);
  }

  validateForm() {
    return true;
  }

  handleChange = event => {
    this.setState({tweetText: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    var reqData = {
      "x-auth-token": this.state.token,
      "text": this.state.tweetText
    };

    axios({
          method: 'post',
          url: 'http://localhost:3001/tweets/',
          withCredentials: true,
          crossdomain: true,
          data: Object.keys(reqData).map(function(key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(reqData[key])}).join('&'),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    }).then(function (response) {
      console.log("new tweet")
      console.log(response)
    })
    .catch(function (error) {
      console.log("Post Error : " + error);
    });
  }



  render() {
    return (
      <NewTweetForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} validateForm={this.validateForm} />
    );
  }
}

export default NewTweetContainer;
