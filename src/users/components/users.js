import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './users.css'

function User (props) {
    return (
     <div> <img className="profileimg" src={props.user.photo}/> {props.user.name} </div>
    );
}

export default User;
