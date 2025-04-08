import React, { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCard";
import { FaChevronLeft } from "react-icons/fa";
import { getMovies, getTrendingMovies } from "./services/movie_api";

function App() {
  //*States
  const [trendng_Movies, set_Trendng_Movies] = useState([]);

  //*Effects
  useEffect(() => {
    async function fetch() {
      let movies = await getTrendingMovies();
      set_Trendng_Movies(movies);
    }
    fetch();
  }, []);

  //*Functions
  const handleclick = async () => {};

  return (
    <div className="">
      <div className="mt-5 flex gap-x-20">
        <h1 className="text-4xl font-bold px-4">Trending</h1>
        <button onClick={handleclick} className="p-2 bg-amber-600">
          click me{" "}
        </button>
      </div>
      <div className="px-4 mt-10 items-center mb-10 ">
        <div className="flex gap-x-6 relative">
          <span className="absolute text-4xl bottom-[59%] -left-4">
            <FaChevronLeft />
          </span>
          {trendng_Movies.map((movie) => {
            return (
              <div key={movie.id}>
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
