import React from 'react'

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/sessions", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/javascript"
      },
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(r => r.json()).then(console.log)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

render(){
  console.log("username"+this.state.username, "pw"+this.state.password)
  return(
    <div>
      <form>
        Username:
        <input id="username" type="text" value={this.state.username} name="username" onChange={this.handleChange} />
        Password:
        <input id="password"type="password" name="password" value={this.state.password} onChange={this.handleChange} />
      <input type="submit" onSubmit={this.handleSubmit} value="Submit" />
      </form>
    </div>
  )
  }
}

export default Login;
