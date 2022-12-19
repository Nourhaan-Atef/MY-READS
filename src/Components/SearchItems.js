import React from "react";
import Book from "./Book";

function SearchItems({ books, searchB, Shelfchange }) {
  return (
    <>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchB.map((book) => {
            const foundShelf = books.filter((search) => search.id === book.id);
            if (foundShelf[0]) {
              book.shelf = foundShelf[0].shelf;
            } else {
              book.shelf = "none";
            }
            return (
              <Book books={book} key={book.id} Shelfchange={Shelfchange} shelf={book.shelf}/>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default SearchItems;
