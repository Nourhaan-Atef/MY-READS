import React from "react";
import ShelfSelection from "./ShelfSelection";

function Book({ books, Shelfchange, shelf }) {
  return (
    <>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${books.imageLinks.smallThumbnail})`,
            }}
          ></div>
          <ShelfSelection Shelfchange={Shelfchange} shelf={shelf} books={books}/>
        </div>
        <div className="book-title">{books.title}</div>
        <div className="book-authors">{books.authors}</div>
      </div>
    </>
  );
}

export default Book;
