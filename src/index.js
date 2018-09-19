import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import UsersList from './users/components/userslist.js';
import LoginContainer from './login/containers/LoginContainer.js';


const app = document.getElementById('app');
render(<LoginContainer />,app);
