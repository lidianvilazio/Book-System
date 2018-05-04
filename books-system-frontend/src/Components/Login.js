import React from 'react'

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
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

render(){
  console.log("username"+this.state.username, "pw"+this.state.password)
  return(
    <div class="col-md-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-center default-text py-3"><i class="fa fa-lock"></i> Login:</h3>

                            <div class="md-form">
                                <i class="fa fa-envelope prefix grey-text"></i>
                                <input type="text" id="defaultForm-email" class="form-control"/>
                                <label for="defaultForm-email">Your Username</label>
                            </div>
                            <div class="md-form">
                                <i class="fa fa-lock prefix grey-text"></i>
                                <input type="password" id="defaultForm-pass" class="form-control"/>
                                <label for="defaultForm-pass">Your password</label>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-default waves-effect waves-light">Submit</button>
                            </div>
                            </div>
                            </div>
                            </div>

  )
  }
}

export default Login;
