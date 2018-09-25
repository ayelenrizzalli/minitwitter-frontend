import React, { Component } from 'react';
import FeedComponent from '../components/FeedComponent'
import Tweets from '../../Tweets/containers/TweetsContainer'
import NewTweet from '../../Tweets/containers/NewTweetContainer'

class Feed extends Component {
  render() {
    return (
      <FeedComponent>
        <NewTweet />
        <Tweets />
      </FeedComponent>
    )
  }
}

export default Feed;
