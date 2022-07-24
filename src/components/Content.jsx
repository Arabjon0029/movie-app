import React from "react";
import Error from "./Error";
import MovieList from "./MovieList";

const Content = (props) => {
  if (!props.movie) {
    return <Error />;
  }
  return (
    <div className="content container my-3">
      <MovieList movie={props.movie} />
    </div>
  );
};
export default Content;
