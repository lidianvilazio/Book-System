import React from 'react'

const url = "http://localhost:3000/api/v1/users"

class User extends React.Component {

  state = {
    user: []
  }

  fetchUser = () => {
    fetch(url)
    .then(r => r.json())
    .then(json => this.setState({user: json}))
  }

  componentDidMount() {
    this.fetchUser()
  }


  render() {

    const user = this.state.user.map(u => {
      return <p>{u.username}</p>
    })
    console.log(this.state.user);
    return(
      <div>
        <h2>User</h2>
        {user}
      </div>
    )
  }

}


export default User;
