import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './users.css'
import User from "./users.js"

class UsersList extends Component {
  constructor(props) {
        super(props);
        this.state = {
            users: []
          }
    };

  componentDidMount() {
      axios.get('http://localhost:3001/users')
        .then(json => this.setState({users: json.data.users}))
    };

  render() {
    return (
      <ul className="userList">
      {
        this.state.users.map(function (user) {
          return <li key={user._id}> <User user={user} /> </li>
        })
      }
      </ul>
    );
  }
}

export default UsersList;
