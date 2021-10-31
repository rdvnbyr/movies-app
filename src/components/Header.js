import React from "react";

const Header = ({ value, setSearch, length, handleOpenAddMovieDialog }) => {
  return (
    <>
      <nav className="header">
        <div className="container-fluid">
          <div>
            <p className="header-brand">Movie Search App</p>
            <button
              onClick={handleOpenAddMovieDialog}
              type="button"
              className=" btn btn-outline-warning px-9 py-1 mb-2"
            >
              Add Movie
            </button>
          </div>
          <div className="d-flex input-group-lg">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Find a movie"
              aria-label="Search"
              value={value}
              onChange={(event) => setSearch(event.target.value)}
            ></input>
          </div>
          <span>Now Listed Movies: {length}</span>
        </div>
      </nav>
    </>
  );
};

export default Header;
