import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./Pages/Books";
import Search from "./Pages/Search";
import * as BookAPI from "./BooksAPI";
import { useState, useEffect } from "react";
import NotFoundPage from "./Pages/NotFoundPage";
function App() {
  const [books, setBooks] = useState([]);
  const [Query, setQuery] = useState([]);
  const [searchB, setSearchB] = useState([]);

  useEffect(() => {
    BookAPI.getAll().then((res) => {
      setBooks(res);
    });
  }, []);
  useEffect(() => {
    let isActive = true;
    if (Query) {
      BookAPI.search(Query).then((res) => {
        if (res.error) {
          console.log(res);
        } else {
          if (isActive) {
            setSearchB(res);
            console.log(res);
          }
        }
      });
    }
    return () => {
      isActive = false;
      setSearchB([]);
    };
  }, [Query]);

  const Shelfchange = async (book, shelf) => {
    BookAPI.update(book, shelf);
    BookAPI.getAll().then((res) => {
      setBooks(res);
    });
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
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
      
          <Route
            path="/MY-READS/search"
            element={
              <Search
                books={books}
                handleQuery={handleQuery}
                searchB={searchB}
                Shelfchange={Shelfchange}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
