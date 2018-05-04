import React from 'react'


const url = "http://localhost:3000/api/v1/books"

class Books extends React.Component {

  state = {
    allBooks: []
  }


  fetchBooks = () => {
    fetch(url)
    .then(r => r.json())
    .then(json => this.setState({allBooks: json}))
  }

  componentDidMount() {
    this.fetchBooks()
  }

  render() {
    console.log(this.state.allBooks);
    const books = this.state.allBooks.map(book => {
      return <p>{book.title}</p>
    })
    return(
      <div>
        <h2>Books</h2>
        {books}
      </div>
    )
  }

}

export default Books;
