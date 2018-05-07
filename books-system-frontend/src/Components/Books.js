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
    // fetch(url, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/javascript"
    //   },
    //   method: "POST",
    //   body: JSON.stringify()
    // }).then(r => r.json()).then(json => this.setState({allBooks: json}))
  }

  componentDidMount() {
    this.fetchBooks('')
  }

  fetchSearch = title => {

  }

  // setTitle = debounce(title => {
  //   this.setState({title: title})
  // }, 1000)

  handleSubmit = () => {
    console.log(":)");
  }



  render() {
    const books = this.state.allBooks.filter(book => book.title.toLowerCase().includes(this.state.title));

    const b = books.map(book => {
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
