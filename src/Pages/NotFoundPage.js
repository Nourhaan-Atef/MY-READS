import React from "react";
import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="notFoundPageContent">
        <h2>Not Found Page</h2>
        <NavLink to="/" className="back">
          Back To Home Page
        </NavLink>
        <div className="image"></div>
      </div>
    </>
  );
}

export default NotFoundPage;
