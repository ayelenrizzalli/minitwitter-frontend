import React from 'react'
import Tweet from './TweetComponent'

function TweetsComponent(props) {
  return(
    <div>
      {
        props.tweets.map((item) =>{
          return <Tweet key={item.id} {...item} />
        })
      }
    </div>
  )
}

export default TweetsComponent;
