import React from "react";

const BookCard = (props) => {

  const { book, handleClick} = props;

  const s = {
    width: '18rem'
  }

  return (
      <div className="card-group" style={s}>
        <div className="card mb-4 my-card" onClick={() => handleClick(book)}>
          <div className="view overlay">
            <img className="card-img-top image" src={book.imageLinks} alt="Card image cap"/>
          </div>
          <div className="card-body">
            <h4 className="card-title title">{book.title}</h4>
            <p className="card-text"></p>
          </div>
        </div>
      </div>

  );

};

export default BookCard;
