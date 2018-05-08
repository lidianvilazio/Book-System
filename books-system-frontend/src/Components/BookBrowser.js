import React from 'react'
import BookCard from './BookCard'
import SingleBook from './SingleBook'

class BookBrowser extends React.Component {

  state = {
    books: [],
    selectedBook: null
  }

  componentDidMount() {
    this.setState({books: this.props.books})
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.books.length < this.props.books.length) {
      this.setState({books: this.props.books})
    }
  }

  handleClick = (book) => {
    this.setState({selectedBook: book})
  }

  render() {

    console.log(this.state.books);
    const books = this.state.books.filter(book => book.title.toLowerCase().includes(this.props.title));

    const b = books.map(book => {
      return <div><BookCard key={book.id} book={book} handleClick={this.handleClick}/></div>
    })
    return (
      <div>{this.state.selectedBook !== null ? <SingleBook book={this.state.selectedBook}/> : b}</div>
    )
  }
}



export default BookBrowser;
