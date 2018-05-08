import React from 'react'
import BookCard from './BookCard'
import SingleBook from './SingleBook'

// const url = "http://localhost:3000/api/v1/users"

class User extends React.Component {

  state = {
    auth: '',
    myBooks: [],
    selectedBook: null
  }

  componentDidMount() {
    const auth = JSON.parse(localStorage.auth)
    this.setState({auth: auth},()=> {this.fetchUserBooks()})
  }

  fetchUserBooks = () => {
    console.log(this.state.auth.id)
    fetch('http://localhost:3000/api/v1/user_books/'+this.state.auth.id).then(r=>r.json()).then(json=> this.setState({myBooks: json}))
  }

  handleClick = (book) => {
    this.setState({selectedBook: book})
  }

  back = () => {
    this.setState({selectedBook: null})
  }

  postUserBook = () => {
    console.log(":)");
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
          {this.state.selectedBook !== null ? <SingleBook book={this.state.selectedBook} back={this.back} postUserBook={this.postUserBook}/> : b}
      		</div>
    	  </div>
      </div>
    )
  }

}


export default User;
