import { createContext, useContext } from "react";

const MovieContext = createContext();

export function useMovieContext() {
  return useContext(MovieContext);
}

export { MovieContext };



