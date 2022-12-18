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
              backgroundImage: books.imageLinks
                ? `url(${books.imageLinks.smallThumbnail})`
                : `url("https://i.pinimg.com/564x/4e/19/c2/4e19c2d8da38136202aa53345057f601.jpg")`,
            }}
          ></div>
          <ShelfSelection
            Shelfchange={Shelfchange}
            shelf={shelf}
            books={books}
          />
        </div>
        <div className="book-title">{books.title}</div>
        <div className="book-authors">{books.authors}</div>
      </div>
    </>
  );
}

export default Book;
