import React from 'react'
//HELLO

class Login extends React.Component {

  // <form  id="quick-login" role="form" class="form col-md-12 center-block">
  // <div className="form-group">
  // <label for="Username" className="control-label">Username</label>
  // <input id="username" type="text" value={this.state.username} name="username" onChange={this.handleChange} />
  // </div>

  // <div class="form-group">
  // <label for="Password" className="control-label">Password</label>
  // <input id="password"type="password" name="password" value={this.state.password} onChange={this.handleChange} />
  // </div>
  // <button type="submit" className="btn btn-success btn-block" onSubmit={this.handleSubmit} value="Submit">Submit</button>
  // </form>

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("HELLO!!!!")
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
      [e.target.name]: e.target.value
    })
  }



render(){
  console.log("username"+this.state.username, "pw"+this.state.password)
  return(
    <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center default-text py-3"><i className="fa fa-lock"></i> Login:</h3>

                            <div className="md-form">
                                <i className="fa fa-envelope prefix grey-text"></i>
                                <input type="text" id="username" className="form-control" value={this.state.username} name="username" onChange={this.handleChange}/>
                                <label for="defaultForm-email">Your Username</label>
                            </div>

                            <div className="md-form">
                                <i className="fa fa-lock prefix grey-text"></i>
                                <input type="password" id="password" className="form-control" value={this.state.password} name="password"onChange={this.handleChange}/>
                                <label for="defaultForm-pass">Your password</label>
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

export default Login;
