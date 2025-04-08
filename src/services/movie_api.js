import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/`;
const search_URL = `search/movie?api_key=${API_KEY}&language=en-US&query=`;
const trending_URL = `trending/movie/day?api_key=${API_KEY}&language=en-US`;

export const getMovies = async (title) => {
  const fetch = await axios.get(`${BASE_URL}${search_URL}${title}`);
  let response = fetch.data.results;
  console.log(response);
};

export const getTrendingMovies = async () => {
  const fetch = await axios.get(`${BASE_URL}${trending_URL}`);
  let response = fetch.data.results;

  const trendingMovies = response.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      media_type: movie.media_type,
      release_date: movie.release_date,
      poster: movie.poster_path,
    };
  });
  return trendingMovies;
};
