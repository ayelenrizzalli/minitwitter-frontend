import React, { Component } from 'react';
import TweetsComponent from '../components/TweetsComponent'
import axios from 'axios'


class TweetsContainer extends Component {
  constructor(props) {
        super(props);
        this.state = {
            tweets: []
          }
    };

  componentDidMount() {
    const scope = this;
    let reqData={
      "x-auth-token" : axios.defaults.headers.common['x-auth-token']
    }
    axios({
          method: 'get',
          url: 'http://localhost:3001/feed',
          withCredentials: true,
          crossdomain: true,
          data: Object.keys(reqData).map(function(key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(reqData[key])}).join('&'),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    }).then(function (response) {
        console.log("with auth");
        console.log(response);
        console.log(typeof(response));
        scope.setState({ tweets : response.data.feed });
    })
    .catch(function (error) {
      console.log("Get Error : " + error);
    });
  }

  render() {
    return (
        <TweetsComponent tweets={this.state.tweets} />
    )
  }
}

export default TweetsContainer;
