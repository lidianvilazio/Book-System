import React, { Component } from 'react';
import './App.css';
import Main from './Containers/Main'
import { withRouter } from 'react-router-dom'

class App extends Component {

  state ={
    auth: null
  }

  componentDidMount() {
   if (localStorage.auth) {
     const auth = JSON.parse(localStorage.auth)
     this.setState({ auth: auth });
   }
 }

 authSet = (auth) =>{
   localStorage.auth = JSON.stringify(auth);
   this.setState({ auth }, ()=> this.props.history.push("/"));
 }

 logout = () => {
   localStorage.auth = ''
   this.setState({ auth: null }, ()=> this.props.history.push("/login"));
 }

  render() {
    return (
      <div className="App container-fluid">
        <Main authSet={this.authSet} logout={this.logout} auth={this.auth}/>
      </div>
    );
  }
}

export default withRouter(App);

 // <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <h1 className="App-title">Welcome to React</h1>
// </header><br/>
