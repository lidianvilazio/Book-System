import React from 'react'

class BookBrowser extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.books.length < this.props.length) {
      console.log('did',prevProps);
    }
  }

  render() {

    console.log(this.props.books);
    const books = this.props.books.filter(book => book.title.toLowerCase().includes(this.props.title));

    const b = books.map(book => {
      return <div key={book.id}><h1>{book.title}</h1> <img src={book.imageLinks} alt="book's cover" /></div>
    })
    return (
      <div>{b}</div>
    )
  }
}

export default BookBrowser;
