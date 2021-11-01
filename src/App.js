import "./assets/css/App.css";
import MovieList from "./components/Movies/MovieList";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { AddMovieDialog } from "./components/Movies/AddMovieDialog";
import { useMovieContext } from "./context/MovieContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoadingScreenDialog } from "./components/ui-elements";

function App() {
  const {
    loading,
    setSearchEvents,
    searchEvents,
    movies,
    showAddMovieDialog,
    handleCloseAddMovieDialog,
    handleOpenAddMovieDialog,
    setNewMovies,
  } = useMovieContext();

  return (
    <div className="App">
      {loading && <LoadingScreenDialog />}
      <BrowserRouter>
        <Header
          value={searchEvents}
          setSearch={setSearchEvents}
          length={movies.length}
          handleOpenAddMovieDialog={handleOpenAddMovieDialog}
        />
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/favorite-movies" component={MovieList} />
        </Switch>
        <AddMovieDialog
          show={showAddMovieDialog}
          onHide={handleCloseAddMovieDialog}
          setNewMovies={setNewMovies}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
