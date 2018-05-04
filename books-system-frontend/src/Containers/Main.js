import React from 'react'
import Home from '../Components/Home'
import Books from '../Components/Books'
import User from '../Components/User'

class Main extends React.Component {


  render() {
    return(
      <div>
        <Home/>
        <User/>
        <Books/>
      </div>
    )
  }

}

export default Main;
