import React from "react";
import NavBar from "./Components/NavBar";
import Searchbar from "./Components/Searchbar";
import MovieCard from "./Components/MovieCard";

function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Searchbar />
      <div className="mt-5">
        <h1 className="text-4xl font-bold px-4">Trending</h1>
      </div>
      <div className="cards gap-y-8 grid  grid-cols-3 items-center w-full px-10 gap-x-10 mt-10 ">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default App;
