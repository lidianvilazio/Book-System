import React from 'react'


const url = "http://localhost:3000/api/v1/books"

class Books extends React.Component {

  state = {
    allBooks: []
  }


  fetchBooks = () => {
    fetch(url)
    .then(r => r.json())
    .then(console.log)
  }

  componentDidMount() {
    this.fetchBooks()
  }

  render() {
    console.log(this.state.allBooks);
    return(
      <div><h2>Books</h2></div>
    )
  }

}

export default Books;
