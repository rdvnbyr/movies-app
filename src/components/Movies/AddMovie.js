import React, { useState, useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

function AddMovie() {
  const { setMovies } = useContext(MovieContext);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  function getNameInput(e) {
    setName(e.target.value);
  }

  function getDateInput(e) {
    setDate(e.target.value);
  }

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, date: date }]);
  };

  return (
    <div>
      <form onSubmit={addMovie}>
        <input
          type={"text"}
          name={"name"}
          value={name}
          onChange={getNameInput}
        />
        <input
          type={"text"}
          name={"date"}
          value={date}
          onChange={getDateInput}
        />
        <button onClick={addMovie}>Submit</button>
      </form>
    </div>
  );
}

export default AddMovie;
