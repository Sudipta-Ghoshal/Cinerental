import { getImgUrl } from "../utils/cine-utility";
import tagIcon from "../assets/tag.svg";
import { useMovieContext } from "../context";

export default function MovieDetailsModal({ movie, onClose }) {
  const { addToCart } = useMovieContext();

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-105 sm:max-w-150 lg:max-w-246 p-4 max-h-[90vh] overflow-auto">
        <div className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-slate-900 sm:grid sm:grid-cols-[2fr_1fr]">
          <img
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-75"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <div className="p-5 lg:p-11">
            <div className="">
              <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100 lg:text-[50px]">
                {movie.title}
              </h2>
              <span className="my-3 block text-base text-slate-500 dark:text-slate-400">
                {movie.genre}
              </span>
              <div></div>
            </div>
            <p className="mb-8 text-sm text-slate-700 dark:text-slate-300 lg:mb-16 lg:text-base">
              {movie.description}
            </p>
            <div className="grid lg:grid-cols-2 gap-2">
              <button
                type="button"
                className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary py-2 px-5 text-sm font-semibold text-[#171923] transition-colors hover:bg-emerald-500 dark:hover:bg-emerald-300"
                onClick={() => addToCart(movie)}
              >
                <img src={tagIcon} alt="Tag" />
                <span>${movie.price.toFixed(2)} | Add to Cart</span>
              </button>
              <button
                type="button"
                className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-400 py-2 px-5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
