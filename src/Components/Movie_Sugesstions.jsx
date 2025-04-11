import React, { useEffect, useState } from "react";
import { topRatedMovies, topRatedTvShows } from "../services/movie_api";

//*States
const [top_Rated_Movies, set_Top_Rated_Movies] = useState([]);
const [top_Rated_Shows, set_Top_Rated_Shows] = useState([]);

//*Effects
useEffect(() => {
  async function fetch() {
    const movies = await topRatedMovies();
    const shows = await topRatedTvShows();
    set_Top_Rated_Movies(movies);
    set_Top_Rated_Shows(shows);
  }
  fetch();
}, []);

const Movie_Sugesstions = () => {
  return (
    <div className="">
      
        <div
          className="md:w-55 md:h-75 sm:w-50 sm:h-65 w-27 h-42 rounded-2xl cursor-pointer bg-no-repeat bg-cover mb-3 shadow-sm shadow-gray-500"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w780/)`,
          }}
        ></div>

        <span className="font-semibold text-xl mt-5 ">{}</span>
      
    </div>
  );
};

export default Movie_Sugesstions;
