import React from "react";
import Book from "./Book";
function BookShelf({ books, shelf, ShelfTitle, Shelfchange }) {
const ShelfCategory = books.filter((book) => book.shelf === shelf);


  return (
    <>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ShelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {ShelfCategory.map((book) => {
              return (
                <Book
                  key={book.id}
                  books={book}
                  Shelfchange={Shelfchange}
                  shelf={shelf}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default BookShelf;
