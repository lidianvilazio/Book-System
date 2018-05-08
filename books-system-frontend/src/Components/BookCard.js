import React from "react";

const BookCard = (props) => {

  const { book, handleClick} = props;

  const s = {
    width: '18rem'
  }

  return (
      <div className="card-group" style={s}>
        <div className="card mb-4" onClick={() => handleClick(book)}>
          <div className="view overlay">
            <img className="card-img-top" src={book.imageLinks} alt="Card image cap"/>
          </div>
          <div className="card-body">
            <h4 className="card-title">{book.title}</h4>
            <p className="card-text"></p>
          </div>
        </div>
      </div>

  );

  // <div className="ui column">
  //   <div
  //     className="ui card"
  //     key={book.id}
  //     onClick={() => handleClick(book)}
  //   >
  //     <div className="image">
  //       <img alt="oh no!" src={book.imageLinks} />
  //     </div>
  //     <div className="content">
  //       <div className="header">
  //         {book.title}
  //       </div>
  //     </div>
  //   </div>
  // </div>

};

export default BookCard;
