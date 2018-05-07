import React from 'react'


class Search extends React.Component {

  state = {
    title: ''
  }

  handleChange = e => {
    this.setState({title: e.target.value})
  }

  render() {

    console.log(this.state.title);
    return (<div>
      <input type='text' name='title' onChange={this.handleChange} value={this.state.title}/>
      </div>)

  }
}

export default Search;
