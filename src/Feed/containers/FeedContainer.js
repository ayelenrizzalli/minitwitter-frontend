import React, { Component } from 'react';
import FeedComponent from '../components/FeedComponent'
import Tweets from '../../Tweets/containers/TweetsContainer'

class Feed extends Component {
  render() {
    return (
      <FeedComponent>
        <Tweets />
      </FeedComponent>
    )
  }
}

export default Feed;
