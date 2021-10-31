import "./App.css";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AddMovieDialog } from "./components/AddMovieDialog";
import { useMovieContext } from "./MovieContext";

function App() {
  const {
    setSearchEvents,
    searchEvents,
    movies,
    showAddMovieDialog,
    handleCloseAddMovieDialog,
    handleOpenAddMovieDialog,
    setNewMovies
  } = useMovieContext();
  return (
    <div className="App">
      <Header
        value={searchEvents}
        setSearch={setSearchEvents}
        length={movies.length}
        handleOpenAddMovieDialog={handleOpenAddMovieDialog}
      />
      <MovieList />
      <AddMovieDialog
        show={showAddMovieDialog}
        onHide={handleCloseAddMovieDialog}
        setNewMovies={setNewMovies}
      />
      <Footer />
    </div>
  );
}

export default App;
