import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import UsersList from './users/components/userslist.js';
import Login from './login/containers/login.js';


const app = document.getElementById('app');
render(<Login />,app);
