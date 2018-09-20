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
      //hardcoded for testing only
      axios.defaults.headers.common['x-auth-token'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViOTI3NWEzZmYwNDBhNjYyY2IxMGE4NyIsImlhdCI6MTUzNzQ1NDE4NiwiZXhwIjoxNTM3NDYxMzg2fQ.lHDuhYEi5IE1qBK37tbwrat1LGlCgV3F8s4NL26lfh0";
      axios.get('http://localhost:3001/feed')
        .then(json => { console.log(json.data); this.setState({tweets: json.data.feed}) })
  };

  render() {
    return (
        <TweetsComponent tweets={this.state.tweets} />
    )
  }
}

export default TweetsContainer;
