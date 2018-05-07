import React from 'react'
import Search from './Search'


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
      return <div key={book.id}><h1>{book.title}</h1> <img src={book.imageLinks} alt="book's cover" /></div>
    })
    return(
      <div>
        <h2>Books</h2>
        <Search/>
        {books}
      </div>
    )
  }

}

export default Books;
