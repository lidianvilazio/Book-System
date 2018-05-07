import React, { Component } from 'react';
import './App.css';
import Main from './Containers/Main'
import Welcome from './Containers/Welcome'
import { withRouter } from 'react-router-dom'

class App extends Component {

  state ={
    auth: null
  }

  componentDidMount() {
   if (localStorage.auth) {
     console.log("local", localStorage);
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
    console.log("App", this.state.auth);
    return (
      <div className="App container-fluid">
        {this.state.auth !== null ? <Main logout={this.logout}/> : <Welcome authSet={this.authSet}/>}
      </div>
    );
  }
}

export default withRouter(App);

 // <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <h1 className="App-title">Welcome to React</h1>
// </header><br/>
