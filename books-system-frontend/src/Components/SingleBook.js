import React from "react";

const SingleBook = props => {
  let { book, back } = props;

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
            <p>
              <strong>Catchphrase: </strong>
              {}
            </p>
            <strong>
              Class: {} {}
            </strong>
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
              onClick={() =>
                console.log(
                  "connect this to a function that adds this bot to your bot army list"
                )
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
