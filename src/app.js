import React, { Fragment } from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import UsersList from './users/components/userslist.js';
import LoginContainer from './login/containers/LoginContainer.js';
import Feed from './Feed/containers/FeedContainer.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const app = document.getElementById('app');
render(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={LoginContainer} />
          <Route path="/users" component={UsersList} />
          <Route path="/feed" component={Feed} />
        </div>
      </Router>
  ,app
);
