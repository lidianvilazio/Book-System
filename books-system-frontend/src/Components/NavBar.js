import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className="nav nav-tabs" id="nav-tab" role="tablist">

    {(localStorage.auth) ?
      <React.Fragment>
        <NavLink className="nav-item nav-link" to="/" exact activeStyle={{background: "#2BBBAD"}}>Home</NavLink>
        <NavLink className="nav-item nav-link" to="/books" exact activeStyle={{background: '#2BBBAD'}}>Books</NavLink>
        <NavLink className="nav-item nav-link" to="/user" exact activeStyle={{background: '#2BBBAD'}}>User</NavLink>
        <NavLink className="nav-item nav-link" to="/logout" exact activeStyle={{background: '#2BBBAD'}}>Log Out</NavLink>
      </React.Fragment>
        :
        <React.Fragment>
          <NavLink className="nav-item nav-link" to="/login" exact activeStyle={{background: '#2BBBAD'}}>Log In</NavLink>
          <NavLink className="nav-item nav-link" to="/signup" exact activeStyle={{background: '#2BBBAD'}}>SignUp</NavLink>
        </React.Fragment>
      }
    </div>);
};

export default NavBar;
