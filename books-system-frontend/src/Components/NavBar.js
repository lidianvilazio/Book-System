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
    <div className= 'navbar'>
      <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
      <NavLink to="/books" exact style={link} activ activeStyle={{background: 'darkblue'}}>Books</NavLink>
      <NavLink to="/user" exact style={link} activ activeStyle={{background: 'darkblue'}}>User</NavLink>
      <NavLink to="/login" exact style={link} activ activeStyle={{background: 'darkblue'}}>Log In</NavLink>
      <NavLink to="/signup" exact style={link} activ activeStyle={{background: 'darkblue'}}>SignUp</NavLink>
    </div>);
};

export default NavBar;
