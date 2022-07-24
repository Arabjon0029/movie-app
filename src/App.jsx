import React, { useEffect, useState } from "react";
import Navbar from "./layouts/Navbar";
import Content from "./components/Content";
import Footer from "./layouts/Footer";
import { getMovies, getType } from "./actions";

function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovies().then((data) => setMovie(data.Search));
  }, []);

  const searchTitle = (title, type) => {
    getType(title, type).then((data) => setMovie(data.Search));
  };

  return (
    <>
      <Navbar searchTitle={searchTitle} />
      <Content movie={movie} />
      <Footer />
    </>
  );
}

export default App;
