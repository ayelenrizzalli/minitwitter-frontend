import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './users.css'

class User extends Component {

  render() {
    return (
     <div> <img className="profileimg" src={this.props.user.photo}/> {this.props.user.name} </div>
    );
  }
}

export default User;
