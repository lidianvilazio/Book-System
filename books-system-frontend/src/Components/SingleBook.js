import React from "react";

const SingleBook = props => {
  let { book, back, postUserBook } = props;
  let author
  if (book.author){
    author = book.author.replace('[',' ').replace(']',' ')
  } else {
    author = "Unknown"
  }


  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={book.imageLinks}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {book.title}</h2>
            <h2> {book.subtitle}</h2>
            <p>
              <strong>Author(s): </strong>
              {author}
            </p>
            <p>
              <strong>Description: </strong>
              {book.description}
            </p>
            <p>
              <strong>Page Count: </strong>
              {book.pageCount}
            </p>
            <p>
              <strong>Publisher: </strong>
              {book.publisher}
            </p>
            <p>
              <strong>Published Date: </strong>
              {book.publishedDate}
            </p>

            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn btn-default waves-effect waves-light"
              onClick={() =>
                back()
              }
            >
              Go Back
            </button>
            <button
              className="btn btn-default waves-effect waves-light"
              onClick={() => {
                postUserBook(book)
                back()
              }
              }
            >
              Get Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default SingleBook;
