import React from 'react'

class SignUp extends React.Component {

  state = {
    name: '',
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
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
        Name:
        <input id="name" type="text" value={this.state.name} name="name" onChange={this.handleChange} />
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

export default SignUp;
