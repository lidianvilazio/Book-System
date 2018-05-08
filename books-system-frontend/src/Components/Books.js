import React from 'react'
import Search from './Search'
// import {debounce} from 'debounce';


const url = "http://localhost:3000/api/v1/books"

class Books extends React.Component {

  state = {
    allBooks: [],
    title: ''
  }


  fetchBooks = title => {
    fetch(url)
    .then(r => r.json())
    .then(json => this.setState({allBooks: json}))
  }

  componentDidMount() {
    this.fetchBooks()
  }

  // search = title => {
  //   const books = this.state.allBooks.filter(book => book.title.toLowerCase().includes(this.state.title));
  //   return books
  // }

  // setTitle = debounce(title => {
  //   this.setState({title: title})
  // }, 1000)

  setTitle = title => {
    this.setState({title: title})
  }


  handleSubmit = () => {
    fetch('http://localhost:3000/api/v1/search', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/javascript"
      },
      method: "POST",
      body: JSON.stringify({title: this.state.title})
    }).then(r => r.json()).then(json => this.setState({allBooks: json}))
  }



  render() {

    // const books = this.state.allBooks.filter(book => book.title.toLowerCase().includes(this.state.title));

    const b = this.state.allBooks.map(book => {
      return <div key={book.id}><h1>{book.title}</h1> <img src={book.imageLinks} alt="book's cover" /></div>
    })
    return(
      <div>
        <h2>Books</h2>
        <Search setTitle={this.setTitle} handleSubmit={this.handleSubmit}/>
        {b}
      </div>
    )
  }

}

export default Books;
