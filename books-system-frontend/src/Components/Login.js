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

  DEFAULT_STATE = {
    username: "",
    password: "",
    errors: []
  }
  state = this.DEFAULT_STATE

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const auth = { username, password };
    this.doFetch(auth)
  }

  authSet = (auth) =>{
      localStorage.auth = JSON.stringify(auth);
      this.setState({ auth });
    }

  doFetch = (auth) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(auth)
    }).then(r => r.json()).then(json => {
      if (json.error){
        this.setState({errors: json.error})
      } else {
        this.setState({ ...this.DEFAULT_STATE })
        this.authSet(json)
        this.history.push("/")
      }
    })
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
    {this.state.errors.length ? alert({this.state.errors}) : ""}
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
                                <button className="btn btn-default waves-effect waves-light" onClick={this.handleSubmit}>Submit</button>
                            </div>
                            </div>
                            </div>





                            </div>

  )
  }
}

export default Login;
