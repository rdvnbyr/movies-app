import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
//import Moment from 'react-moment';
//import { StarFill } from 'react-bootstrap-icons';

function Movie(props) {
  return (
    <StyledCard key={props.id}>
      <div className="image-container d-flex justify-content-center">
        <a
          href={`https://www.themoviedb.org/movie/${props.id}`}
          rel="noopener noreferrer"
          target="_blank"
          alt="link-to-site"
          style={{ width: "100%" }}
        >
          <img
            src={
              props.path && `${props.path}`.includes("https://")
                ? props.path
                : `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.path}`
            }
            alt="movie"
            style={{ width: "100%" }}
          />
        </a>
      </div>

      <div className="movie-info">
        <center>
          <p className="movie-title font-weight-bold">{props.name}</p>
        </center>
        <p>
          <span className="movie-date font-weight-bold margin_right_fit">
            Release Date:
          </span>
          {props.release_date}
        </p>
        <p>
          <span className="movie-rating font-weight-bold margin_right_fit">
            Rating:
          </span>{" "}
          {props.vote} <span className="movie-rating font-weight-bold"></span>
        </p>
        <p>
          <span className="movie-overview font-weight-bold margin_right_fit">
            Overview:
          </span>{" "}
          {props.overview}
        </p>
      </div>
    </StyledCard>
  );
}

export default Movie;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.25rem;
  margin: 1rem;
  width: 24rem;
  border-radius: 6px;
  background: ${rgba({ red: 255, green: 255, blue: 255, alpha: 0.125 })};
  transition: 0.3s ease-out;
  .margin_right_fit {
    margin-right: 0.5rem;
  }
`;
