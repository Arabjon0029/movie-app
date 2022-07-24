import React from "react";
import Loading from "./Loading";
import Movie from "./Movie";

function MovieList(props) {
  return (
    <>
      {props.movie.length ? (
        props.movie.map((item, idx) => {
          return <Movie key={idx} {...item} />;
        })
      ) : (
        <Loading />
      )}
    </>
  );
}

export default MovieList;
