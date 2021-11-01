import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";

export function useLocationHook() {
  const { movies } = useMovieContext();
  const location = useLocation().pathname.split("/")[1];
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (location === "favorite-movies") {
      const _movies = movies.filter((m) => m.is_favorite);
      setFilteredMovies(_movies);
    } else {
      setFilteredMovies(movies);
    }
  }, [location, movies]);

  return { filteredMovies, length: filteredMovies.length };
}
