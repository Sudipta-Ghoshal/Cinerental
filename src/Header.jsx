import Moon from "./assets/icons/moon.svg";
import Sun from "./assets/icons/sun.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import Cart from "./assets/shopping-cart.svg";
import { useEffect, useState } from "react";
import CartDetails from "./cine/CartDetails";
import { useMovieContext } from "./context";

export default function Header() {
  const [showCart, setShowCard] = useState(false);
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const { cartData } = useMovieContext();

  function handleCartShow() {
    setShowCard(true);
  }

  return (
    <header className="border-b border-black/10 bg-white/70  dark:border-white/10 dark:bg-slate-950/80">
      {showCart && <CartDetails onClose={() => setShowCard(false)} />}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="Logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/10 rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="Ring" />
            </a>
          </li>
          <li>
            <button
              type="button"
              className="bg-primary/20 dark:bg-primary/10 rounded-lg backdrop-blur-[2px] p-1 inline-block cursor-pointer"
              onClick={toggleTheme}
            >
              <img
                src={theme === "light" ? Moon : Sun}
                width="24"
                height="24"
                alt="Moon"
              />
            </button>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/10 rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img src={Cart} width="24" height="24" alt="Cart" />
              {cartData.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D42967] text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
