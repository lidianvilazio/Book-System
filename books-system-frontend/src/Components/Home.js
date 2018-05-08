import React from 'react'
import BookCard from './BookCard'
import SingleBook from './SingleBook'

class Home extends React.Component{
  state = {
    books: [],
    selectedBook: null
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = () => {
    fetch('http://localhost:3000/api/v1/user_books')
    .then(r => r.json())
    .then(json => this.setState({books: json}))
    // this.setState({books: json})
  }

  handleClick = (book) => {
    this.setState({selectedBook: book})
  }

  back = () => {
    this.setState({selectedBook: null})
  }

  postUserBook = (book) => {
    console.log(book.id);
    const user = JSON.parse(localStorage.auth)
    fetch('http://localhost:3000/api/v1/user_books/'+book.id, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/javascript"
      },
      method: "PATCH",
      body: JSON.stringify({avalible: false, user_id: user.id})
    }, () => {this.fetchBooks()})
  }


  render() {

    const b = this.state.books.map(book => {
      return <div><BookCard key={book.id} book={book} handleClick={this.handleClick}/></div>
    })

    return(
      <div>
        <h2>Home</h2>
        <div className="ui four column grid">
      		<div className="row">
          {this.state.selectedBook !== null ? <SingleBook book={this.state.selectedBook} back={this.back} postUserBook={this.postUserBook}/> : b}
      		</div>
    	  </div>
      </div>
    )
  }
}

export default Home;
