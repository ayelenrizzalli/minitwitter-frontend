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
