import { getAllMovies } from "../data/movies";
import MovieCard from "./MovieCard";
import { useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";

export default function MovieList() {
  const movies = getAllMovies();

  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleSelectMovie(movie) {
    setSelectedMovie(movie);
  }

  function closeModal() {
    setSelectedMovie(null);
  }

  return (
    <>
      {selectedMovie && (
        <MovieDetailsModal movie={selectedMovie} onClose={closeModal} />
      )}

      <div className="content pt-2">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              onSelect={handleSelectMovie}
            />
          ))}
        </div>
      </div>
    </>
  );
}
