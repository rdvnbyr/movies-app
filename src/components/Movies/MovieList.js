import Movie from "./Movie";
import styled from "styled-components";
import { useMovieContext } from "../../context/MovieContext";
import { useLocationHook } from "../../hooks/useLocationHook";

const MovieList = () => {
  const { loading, favoriteHandler } = useMovieContext();
  const { filteredMovies } = useLocationHook();

  return (
    <StyledWrapper>
      {filteredMovies &&
        filteredMovies.length > 0 &&
        filteredMovies.map((movie) => (
          <Movie
            key={movie._id}
            {...movie}
            favoriteHandler={favoriteHandler}
            loading={loading}
          />
        ))}
    </StyledWrapper>
  );
};

export default MovieList;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  justify-content: center;
  margin-top: 3rem;
`;
