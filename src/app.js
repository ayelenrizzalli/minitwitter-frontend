import React, { Fragment } from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import UsersList from './users/components/userslist.js';
import LoginContainer from './login/containers/LoginContainer.js';
import Feed from './Feed/containers/FeedContainer.js';
import NotFound from './pages/components/not-found.js';

import { BrowserRouter as Router , Route, Link, Switch } from 'react-router-dom';


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
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route exact path="/users" component={UsersList} />
            <Route exact path="/feed" component={Feed} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </Router>
  ,app
);
