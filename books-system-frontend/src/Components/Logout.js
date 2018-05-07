import React from 'react'
import {Link} from 'react-router-dom';

class Logout extends React.Component{

  render(){
    return (
      <div><button className="btn btn-default waves-effect waves-light" onClick={this.props.logout}>Logout</button></div>
    )
  }
}

export default Logout;
