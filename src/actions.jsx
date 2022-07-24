const getMovies = async () => {
  const res = await fetch(
    "https://www.omdbapi.com/?apikey=b1b3cfca&s=avengers"
  );
  return res.json();
};

const getType = async (name, type) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=b1b3cfca&s=${name}${
      type !== "all" ? `&type=${type}` : ""
    }`
  );
  return res.json();
};

export { getMovies, getType };
