import React from "react";

const BookCard = (props) => {

  const { book, handleClick} = props;

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={book.id}
        onClick={() => handleClick(book)}
      >
        <div className="image">
          <img alt="oh no!" src={book.imageLinks} />
        </div>
        <div className="content">
          <div className="header">
            {book.title}
          </div>
        </div>
      </div>
    </div>
  );

};

export default BookCard;
