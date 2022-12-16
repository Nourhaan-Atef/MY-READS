import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./Pages/Books";
import Search from "./Pages/Search";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Books />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
