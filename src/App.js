import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./Pages/Books";
import Search from "./Pages/Search";
import * as BookAPI from "./BooksAPI";
import { useState, useEffect } from "react";
function App() {
  const [books, setBooks] = useState([]);
  console.log(books);

  useEffect(() => {
    BookAPI.getAll().then((res) => {
      setBooks(res);
    });
  }, []);

  const Shelfchange = async (book, shelf) => {
    BookAPI.update(book, shelf);
    BookAPI.getAll().then((res) => {
      setBooks(res);
    });
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/MY-READS"
            exact
            element={<Books books={books} Shelfchange={Shelfchange} />}
          />

          <Route path="/MY-READS/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
