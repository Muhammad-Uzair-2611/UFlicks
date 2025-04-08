import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <>
      <div
        className="w-35 h-55 rounded-2xl cursor-pointer bg-no-repeat bg-cover mb-3 shadow-sm shadow-gray-500"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780/${props.poster})`,
        }}></div>

      <span className="font-semibold text-xl mt-5 ">{props.title}</span>
    </>
  );
};

export default MovieCard;
