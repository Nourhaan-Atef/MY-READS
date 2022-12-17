import React from "react";
import { NavLink } from "react-router-dom";
import BookShelf from "../Components/BookShelf";

function Books({ books, Shelfchange }) {
  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              books={books}
              shelf="currentlyReading"
              ShelfTitle="Curently Reading"
              Shelfchange={Shelfchange}
            />
            <BookShelf
              books={books}
              shelf="wantToRead"
              ShelfTitle="Want To Read"
              Shelfchange={Shelfchange}
            />
            <BookShelf
              books={books}
              shelf="read"
              ShelfTitle="Read"
              Shelfchange={Shelfchange}
            />
           
          </div>
        </div>
        <div className="open-search">
          <NavLink to="search">Add a book</NavLink>
        </div>
      </div>
    </>
  );
}

export default Books;
