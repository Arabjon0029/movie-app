import React from "react";

const Movie = ({ Title, Year, Type, Poster }) => {
  return (
    <div className="card mt-5 text-center" style={{ width: "18rem" }}>
      <img src={Poster} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">
          Year: {Year}
          Type: {Type}
        </p>
        <a href="/" className="btn btn-primary">
          Download
        </a>
      </div>
    </div>
  );
};

export default Movie;
