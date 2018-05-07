import React from 'react'
import Home from '../Components/Home'
import Books from '../Components/Books'
import User from '../Components/User'
import Logout from '../Components/Logout'
import {
  Route
} from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';

class Main extends React.Component {

// flex-xl-nowrap
// className='row'


  render() {
    return (
      <header className="App-header">
      <div >
      <NavBar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/user" render={ renderProps => <User auth={this.props.auth}/>} />
      <Route exact path="/logout" render={renderProps => <Logout history={renderProps.history} logout={this.props.logout}/> }/>
      <Route exact path="/login" render={renderProps => <Login authSet={this.props.authSet} history={renderProps.history}/> } />
      <Route exact path="/signup" render={renderProps => <SignUp authSet={this.props.authSet} history={renderProps.history}/> }/>
      </div>
      </header>

  );
}
}

export default Main;
