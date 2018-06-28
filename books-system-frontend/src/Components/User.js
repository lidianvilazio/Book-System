import React from 'react'
import BookCard from './BookCard'
import SingleBook from './SingleBook'

// const url = "http://localhost:3000/api/v1/users"

class User extends React.Component {

  state = {
    auth: '',
    myBooks: [],
    selectedBook: null,
    button: 'Post Book'
  }

  componentDidMount() {
    const auth = JSON.parse(localStorage.auth)
    this.setState({auth: auth},()=> {this.fetchUserBooks()})
  }

  fetchUserBooks = () => {
    fetch('http://localhost:3000/api/v1/user_books/'+this.state.auth.id)
    .then(r=>r.json())
    .then(json => this.setState({myBooks: json}))
  }
  // [...new Set(json.map(item => Object.toJSON(item)))]

  handleClick = (book) => {
    this.setState({selectedBook: book})
  }

  back = () => {
    this.setState({selectedBook: null}, () => this.fetchUserBooks())
  }

  postUserBook = (book) => {
    const user = JSON.parse(localStorage.auth)
    fetch('http://localhost:3000/api/v1/user_books/'+book.id, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/javascript"
      },
      method: "PATCH",
      body: JSON.stringify({avalible: true, user_id: user.id})
    }, () => {this.fetchBooks()})
  }


  render() {

    const b = this.state.myBooks.map(book => {
      return <div><BookCard key={book.id} book={book} handleClick={this.handleClick}/></div>
    })

    return(
      <div>
        <h2>User</h2>
        <p>{this.state.auth.username}</p>
        <div className="ui four column grid">
      		<div className="row">
          {this.state.selectedBook !== null ? <SingleBook book={this.state.selectedBook} button={this.state.button}back={this.back} postUserBook={this.postUserBook}/> : b}
      		</div>
    	  </div>
      </div>
    )
  }

}


export default User;
