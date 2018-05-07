import React from 'react'
import NavBar from '../Components/NavBar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'

class Welcome extends React.Component {



  render() {
    return (
      <Router>
      <div>
      <NavBar/>
      <Route exact path="/login" render={renderProps => <Login authSet={this.props.authSet} history={renderProps.history}/> } />
      <Route exact path="/signup" render={renderProps => <SignUp authSet={this.props.authSet} history={renderProps.history}/> }/>
      </div>
      </Router>
    )
  }

}

export default Welcome;
