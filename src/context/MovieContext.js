import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useCallback,
} from "react";
import axios from "axios";

export const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchEvents, setSearchEvents] = useState("");

  const [showAddMovieDialog, setShowAddMovieDialog] = useState(false);
  const handleOpenAddMovieDialog = () => {
    setShowAddMovieDialog(true);
  };
  const handleCloseAddMovieDialog = () => {
    setShowAddMovieDialog(false);
  };
  const setNewMovies = useCallback((movie) => {
    setMovies((prev) => [...prev, movie]);
  }, []);

  //const api_key= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US //? get movie by id

  const getMovieRequest = async (url) => {
    setLoading(true);
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.data) {
      setMovies(responseJson.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!searchEvents) {
      getMovieRequest(
        "https://api-movies-app-node.herokuapp.com/api/movie/get-movies/100"
        // `https://api.themoviedb.org/3/movie/top_rated?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1`
      );
    }
  }, [searchEvents]);

  // passes new searchValue to our getMovieRequest
  useEffect(() => {
    let search;
    if (searchEvents) {
      search = setTimeout(() => {
        getMovieRequest(
          `https://api.themoviedb.org/3/search/movie?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&query=${searchEvents}&page=1&include_adult=true`
        );
      }, 500);
    }
    return () => {
      clearTimeout(search);
    };
  }, [searchEvents]);

  const favoriteHandler = (id, event) => {
    setLoading(true);
    let is_favorite = false;
    if (event === "remove") {
      is_favorite = false;
    }
    if (event === "add") {
      is_favorite = true;
    }

    axios
      .patch(`https://api-movies-app-node.herokuapp.com/api/movie/${id}/update-movie`, {
        is_favorite,
      })
      .then((res) => {
        if (res.status === 200) {
          getMovieRequest("https://api-movies-app-node.herokuapp.com/api/movie/get-movies/100");
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const ctxValue = {
    loading,
    movies,
    setMovies,
    setSearchEvents,
    searchEvents,

    showAddMovieDialog,
    handleCloseAddMovieDialog,
    handleOpenAddMovieDialog,
    setNewMovies,
    favoriteHandler,
  };

  return (
    <MovieContext.Provider value={ctxValue}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
