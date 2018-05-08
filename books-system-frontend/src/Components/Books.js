import React from 'react'
import Search from './Search'
// import {debounce} from 'debounce';
import BookBrowser from './BookBrowser'


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

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('did',prevProps);
  //   if(prevProps.length > this.state.allBooks) {
  //     console.log(this.state.allBooks);
  //   }
  // }

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
    }).then(r => r.json()).then(json => this.setState({
      allBooks: json,
      // title: ''
    }))
  }



  render() {
    return(
      <div>
        <h2>Books</h2>
        <Search setTitle={this.setTitle} handleSubmit={this.handleSubmit} title={this.state.title}/>
        <BookBrowser books={this.state.allBooks} title={this.state.title}/>
      </div>
    )
  }

}

export default Books;
