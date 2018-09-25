import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './NewTweetFormComponent.css'

function NewTweetFormComponent (props) {
  return (
    <div className="NewTweet">
      <form onSubmit={props.handleSubmit}>
        <FormGroup bsSize="large">
          <ControlLabel>TextTweet</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={props.text}
            onChange={props.handleChange}
          />
        </FormGroup>
        <Button
          block
          bsSize="large"
          disabled={!props.validateForm()}
          type="submit"
        >
          New Tweet
        </Button>
      </form>
    </div>
  )
}

export default NewTweetFormComponent;
