import React from 'react'


class Search extends React.Component {

  handleChange = e => {
    this.props.setTitle(e.target.value)
  }

  render() {
    return (<div>
      <input type='text' name='title' onChange={this.handleChange} value={this.props.title}/>
      <div><button className="btn btn-default waves-effect waves-light" onClick={this.props.handleSubmit}>Search</button></div>
      </div>)

  }
}

export default Search;
