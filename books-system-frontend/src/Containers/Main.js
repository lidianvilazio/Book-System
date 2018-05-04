import React from 'react'
import Home from '../Components/Home'
import Books from '../Components/Books'
import User from '../Components/User'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'

class Main extends React.Component {


  render() {
    return (
    <Router>
      <div>
        <NavBar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/user" component={User} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}
}

export default Main;
