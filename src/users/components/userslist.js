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
      <div>
      {
        this.state.users.map(function (user) {
          return <User key={user._id} user={user} />
        })
      }
      </div>
    );
  }
}

export default UsersList;
