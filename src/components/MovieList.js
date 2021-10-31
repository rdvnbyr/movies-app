import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../MovieContext";
import styled from "styled-components";

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <StyledWrapper>
      {movies &&
        movies.map((movie) => (
          <Movie
            name={movie.title}
            overview={movie.overview}
            key={movie.id}
            id={movie.id}
            vote={movie.vote_average}
            popularity={movie.popularity}
            release_date={movie.release_date}
            path={movie.poster_path}
          />
        ))}
    </StyledWrapper>
  );
};

export default MovieList;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: fit-content;
  justify-content: center;
  margin-top: 3rem;
`;
