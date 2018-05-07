import React from 'react'
import Home from '../Components/Home'
import Books from '../Components/Books'
import User from '../Components/User'
import Logout from '../Components/Logout'
import {
  Route
} from 'react-router-dom';
import NavBar from '../Components/NavBar';

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
      <Route exact path="/user" component={User} />
      <Route exact path="/logout" render={renderProps => <Logout history={renderProps.history} logout={this.props.logout}/> }/>
      </div>
      <h1 className="App-title">Welcome to React</h1>
      </header>

  );
}
}

export default Main;
