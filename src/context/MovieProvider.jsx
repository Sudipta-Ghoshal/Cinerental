import { useState } from "react";
import { MovieContext } from "./index";

export default function MovieProvider({ children }) {
  const [cartData, setCartData] = useState([]);

  function addToCart(movie) {
    cartData.find((item) => item.id === movie.id) ||
      setCartData((prev) => [...prev, movie]);
  }

  function removeFromCart(movieId) {
    setCartData((prev) => prev.filter((movie) => movie.id !== movieId));
  }

  return (
    <MovieContext.Provider
      value={{
        cartData,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
