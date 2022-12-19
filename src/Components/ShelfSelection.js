import React from "react";

function ShelfSelection({ books, Shelfchange, shelf }) {
  const Shelves = [
    {
      id: 1,
      ShelfName: "currentlyReading",
      ShownName: "Currently Reading",
    },
    {
      id: 2,
      ShelfName: "wantToRead",
      ShownName: "Want To Read",
    },
    {
      id: 3,
      ShelfName: "read",
      ShownName: "Read",
    },

    {
      id: 4,
      ShelfName: "none",
      ShownName: "None",
    },
  ];
  const ShelfUpdate = (e) => {
    Shelfchange(books, e.target.value);
  };

  return (
    <>
      <div className="book-shelf-changer">
        <select onChange={ShelfUpdate} value={shelf ? shelf : "none"}>
          <option value="" disabled>
            Move to...
          </option>
          {Shelves.map((shelf) => {
            return (
              <option key={shelf.id} value={shelf.ShelfName}>
                {shelf.ShownName}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default ShelfSelection;
