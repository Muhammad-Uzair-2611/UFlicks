import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
const getMovie = (query) => {
  const fetch = axios.get("");
};

export default getMovie;
