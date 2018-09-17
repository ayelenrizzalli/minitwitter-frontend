import React from 'react';
import { render } from 'react-dom';
import UsersList from './users/components/userslist.js';
import Login from './login/components/login.js';


const app = document.getElementById('app');
render(<Login />,app);
