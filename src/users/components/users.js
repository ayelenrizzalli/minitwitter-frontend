import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class Users extends React.Component {
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
    console.log(this.state.users);
    return (
      <ul>
      {
        this.state.users.map(function (user) {
          return <li key={user._id}> {user.name} </li>
        })
      }
      </ul>
    );
  }
}

export default Users;
