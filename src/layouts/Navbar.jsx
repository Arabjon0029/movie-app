import React, { useState } from "react";

const Navbar = (props) => {
  const [title, setTitle] = useState("Avengers");
  const [type, setType] = useState("all");

  const clickDown = (e) => {
    if (e.key === "Enter") {
      props.searchTitle(title, type);
    }
  };

  const Handler = (e) => {
    props.searchTitle(title, e.target.value);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark border-bottom">
        <div className="container">
          <a className="navbar-brand" href="/">
            Movie App
          </a>

          <div className="d-flex">
            <button
              onClick={Handler}
              className="btn btn-outline-dark"
              value="all"
            >
              All
            </button>

            <button
              onClick={Handler}
              className="btn btn-outline-warning mx-3"
              value="movie"
            >
              Movies
            </button>

            <button
              onClick={Handler}
              className="btn btn-outline-danger"
              value="series"
            >
              Series
            </button>
          </div>
        </div>
      </nav>
      <div className="my-3 container">
        <input
          style={{
            border: "none",
            borderBottom: "1px solid #ccc",
            padding: "10px",
            width: "100%",
            fontSize: "1.2rem",
            backgroundColor: "transparent",
            outline: "none",
            color:'#fff'
          }}
          placeholder="Search for a movie"
          type="search"
          aria-label="Search"
          value={title}
          onChange={changeTitle}
          onKeyDown={clickDown}
        />
      </div>
    </>
  );
};

export default Navbar;
