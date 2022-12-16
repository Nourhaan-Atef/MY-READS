import React from "react";
import { NavLink } from "react-router-dom";

function Search() {
  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <NavLink to="/" className="close-search">
            Close
          </NavLink>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title, author, or ISBN" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    </>
  );
}

export default Search;
