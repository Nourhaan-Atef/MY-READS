import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./Pages/Books";
import Search from "./Pages/Search";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/MY-READS" exact element={<Books />} />
        

          <Route path="/MY-READS/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
