import React from 'react'

class SignUp extends React.Component {

  state = {
    name: '',
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("HELLO!!!!")
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        password: this.state.password
      })
    }).then(r => r.json()).then(console.log)
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  // <div>
  // <form>
  // Name:
  // <input id="name" type="text" value={this.state.name} name="name" onChange={this.handleChange} />
  // Username:
  // <input id="username" type="text" value={this.state.username} name="username" onChange={this.handleChange} />
  // Password:
  // <input id="password"type="password" name="password" value={this.state.password} onChange={this.handleChange} />
  // <input type="submit" onSubmit={this.handleSubmit} value="Submit" />
  // </form>
  // </div>

render(){
  return(
    <div className="col-md-6 mb-4 col-centered">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center default-text py-3"><i className="fa fa-lock"></i> Login:</h3>
            <div className="md-form">
              <i className="fa fa-envelope prefix grey-text"></i>
                <input type="text" id="username" className="form-control" value={this.state.username} name="username" onChange={this.handleChange}/>
                  <label htmlFor="defaultForm-email">Your Username</label>
            </div>
            <div className="md-form">
              <i className="fa fa-lock prefix grey-text"></i>
              <input type="password" id="password" className="form-control" value={this.state.password} name="password"onChange={this.handleChange}/>
              <label htmlFor="defaultForm-pass">Your password</label>
            </div>
            <div className="text-center">
              <button className="btn btn-default waves-effect waves-light" onSubmit={this.handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>

  )
  }
}

export default SignUp;
