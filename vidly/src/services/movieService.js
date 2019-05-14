import http from "./httpService";
import { apiUrl } from "../config.json";

function movieUrl(id) {
  return `${apiUrl}movies/${id}`;
}

export function getMovies() {
  return http.get(apiUrl + "movies");
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  http.post(apiUrl + "movies/", movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
