import React from 'react'
import BookCard from './BookCard'
import SingleBook from './SingleBook'

class BookBrowser extends React.Component {

  state = {
    books: this.props.books,
    selectedBook: null,
    button: 'Get Book'
  }


  componentDidUpdate(prevProps, prevState) {
    if(prevProps.books.length < this.props.books.length) {
      this.setState({books: this.props.books})
    }
  }

  handleClick = (book) => {
    this.setState({selectedBook: book})
  }

  back = () => {
    this.setState({selectedBook: null})
  }

  postUserBook = (book) => {
    const user = JSON.parse(localStorage.auth)
    fetch('http://localhost:3000/api/v1/user_books#create', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/javascript"
      },
      method: "POST",
      body: JSON.stringify({book_id: book.id, user_id: user.id})
    }).then(r=> r.json()).then(json => console.log(json))
  }

  render() {
    console.log("browser", this.props.books);
    const books = this.state.books.filter(book => book.title.toLowerCase().includes(this.props.title));

    const b = books.map(book => {
      return <div><BookCard key={book.id} book={book} handleClick={this.handleClick}/></div>
    })
    return (
      <div className="ui four column grid">
    		<div className="row">
        {this.state.selectedBook !== null ? <SingleBook book={this.state.selectedBook} button={this.state.button}back={this.back} postUserBook={this.postUserBook}/> : b}
    		</div>
  	  </div>
    )
  }
}



export default BookBrowser;
