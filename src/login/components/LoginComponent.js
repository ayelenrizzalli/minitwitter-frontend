import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './login.css'

function LoginComponent (props) {
  return (
    <div className="Login">
      <form onSubmit={props.handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={props.email}
            onChange={props.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={props.password}
            onChange={props.handleChange}
            type="password"
          />
        </FormGroup>
        <Button
          block
          bsSize="large"
          disabled={!props.validateForm()}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  )
}

export default LoginComponent;
