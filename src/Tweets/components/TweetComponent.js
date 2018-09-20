import React from 'react';


function Tweet(props) {
  return (
    <div>
      <p>{props.text}</p>
      <h2>{props.date}</h2>
    </div>
  )
}

export default Tweet;
