import React from 'react'

// const url = "http://localhost:3000/api/v1/users"

class User extends React.Component {

  state = {
    auth: ''
  }

  componentDidMount() {
    const auth = JSON.parse(localStorage.auth)
    this.setState({auth: auth})
  }


  render() {
    return(
      <div>
        <h2>User</h2>
        <p>{this.state.auth.username}</p>
      </div>
    )
  }

}


export default User;
