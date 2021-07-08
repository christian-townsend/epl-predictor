import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Login = () =>{
    return(
        <Link to='/registration'>
            Go to registration
        </Link>
    )
}

export default Login;