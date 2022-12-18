import { NavLink } from "react-router-dom";
import SearchItems from "../Components/SearchItems";

function Search({ books, handleQuery, searchB, Shelfchange }) {
  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <NavLink to="/MY-READS" className="close-search">
            Close
          </NavLink>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={searchB.value}
              onChange={handleQuery}
            />
          </div>
        </div>
        <SearchItems books={books} Shelfchange={Shelfchange} searchB={searchB} />
      </div>
    </>
  );
}

export default Search;
