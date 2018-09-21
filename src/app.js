import React, { Fragment } from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import UsersList from './users/components/userslist.js';
import LoginContainer from './login/containers/LoginContainer.js';
import Feed from './Feed/containers/FeedContainer.js';

import { BrowserRouter, Route } from 'react-router-dom';


const app = document.getElementById('app');
render(
  <BrowserRouter>
    <Fragment>
      <LoginContainer />
      <Route exact path="/users/" component={UsersList}/>
    </Fragment>
  </BrowserRouter>
  ,app
);
