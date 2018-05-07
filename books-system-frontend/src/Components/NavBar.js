import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
      <NavLink className="nav-item nav-link" to="/" exact activeStyle={{background: 'darkblue'}}>Home</NavLink>
      <NavLink className="nav-item nav-link" to="/books" exact activeStyle={{background: 'darkblue'}}>Books</NavLink>
      <NavLink className="nav-item nav-link" to="/user" exact activeStyle={{background: 'darkblue'}}>User</NavLink>
      <NavLink className="nav-item nav-link" to="/login" exact activeStyle={{background: 'darkblue'}}>Log In</NavLink>
      <NavLink className="nav-item nav-link" to="/signup" exact activeStyle={{background: 'darkblue'}}>SignUp</NavLink>
    </div>);
};

export default NavBar;
