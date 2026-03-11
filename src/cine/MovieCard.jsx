import { getImgUrl } from "../utils/cine-utility";
import Rating from "./Rating";
import tagIcon from "../assets/tag.svg";
import { useMovieContext } from "../context/index";
export default function MovieCard({ movie, onSelect }) {
  const { addToCart } = useMovieContext();

  return (
    <figure className="flex flex-col rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
      <button
        type="button"
        className="appearance-none text-left"
        onClick={() => {
          onSelect(movie);
        }}
      >
        <img
          className="w-full object-cover rounded-lg border border-black/10 dark:border-white/10"
          src={getImgUrl(movie.cover)}
          alt={movie.title}
        />
      </button>

      <figcaption className="pt-4 flex flex-col gap-2 flex-1">
        <h3 className="mb-1 text-xl text-slate-900 dark:text-slate-100">
          {movie.title}
        </h3>
        <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">
          {movie.genre}
        </p>
        <div className="flex items-center space-x-1 mb-5">
          <Rating value={movie.rating} />
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {movie.description}
        </p>
        <button
          type="button"
          className="mt-auto flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary py-2 px-5 text-sm font-semibold text-[#171923] transition-colors hover:bg-emerald-500 dark:hover:bg-emerald-300"
          onClick={() => addToCart(movie)}
        >
          <img src={tagIcon} alt="Tag" />
          <span>${movie.price} | Add to Cart</span>
        </button>
      </figcaption>
    </figure>
  );
}
