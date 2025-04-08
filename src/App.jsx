import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./Components/MovieCard";
import { FaChevronLeft } from "react-icons/fa";
import { getMovies, getTrendingMovies } from "./services/movie_api";

function App() {
  //*States & Ref
  const [trendng_Movies, set_Trendng_Movies] = useState([]);
  const trending_Movie_crousel = useRef(null);

  //*Variables
  let scroll_Interval;

  //*Effects
  useEffect(() => {
    async function fetch() {
      let movies = await getTrendingMovies();
      set_Trendng_Movies(movies);
    }
    fetch();
  }, []);

  //*Functions
  const handleclick = async (direction) => {
    if (direction === "right") {
      trending_Movie_crousel.current.scrollLeft -= 200;
    } else if (direction === "left") {
      trending_Movie_crousel.current.scrollLeft += 200;
    }
  };

  return (
    <div className="">
      <div className="mt-5 flex gap-x-20">
        <h1 className="text-4xl font-bold px-4">Trending</h1>
      </div>
      <div className="px-4 mt-10 items-center mb-10 relative">
        <div className="flex justify-start gap-x-4 items-center relative z-10 w-245 bottom-[63%] cursor-pointer">
          <button
            onClick={() => handleclick("right")}
            className="text-[40px] cursor-pointer"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => handleclick("left")}
            className="text-[40px] rotate-z-180 cursor-pointer"
          >
            <FaChevronLeft />
          </button>
        </div>
        <div
          ref={trending_Movie_crousel}
          className="flex gap-x-7 overflow-x-scroll py-4 scrollbar-hide transition-all scroll-smooth"
        >
          {trendng_Movies.map((movie) => {
            return (
              <div key={movie.id} className="">
                <MovieCard poster={movie.poster} title={movie.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
