/* eslint-disable @typescript-eslint/camelcase */
import axios from '../config/axios';

interface Genre {
  id: number;
  name: string;
}
interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: number[];
  genreNames?: string[];
  overview: string;
}
interface MovieFull {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  genres: Genre[];
  overview: string;
  release_date: string;
  popularity: number;
}
export interface MovieResponseProps {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

interface CreditsProps {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

const paramsRequest = {
  api_key: process.env.REACT_APP_MOVIEDB_KEY,
  language: 'pt-BR',
};

const genreConvertName = async (movies: Movie[]): Promise<Movie[]> => {
  const genders: Genre[] = await axios
    .get('/genre/movie/list', {
      params: paramsRequest,
    })
    .then(result => result.data.genres);
  const response = movies.map(movie => {
    return Object.assign(movie, {
      genreNames: movie.genre_ids.map(key => {
        return genders
          .filter(gender => gender.id === key)
          .map(gender => gender.name);
      }),
    });
  });

  return response;
};

export const popularMoviesGet = async (): Promise<MovieResponseProps> => {
  const { results, ...rest }: MovieResponseProps = await axios
    .get('/movie/popular', {
      params: paramsRequest,
    })
    .then(result => result.data);
  const response = await genreConvertName(results);
  return { ...rest, results: response };
};

export const upcomingMoviesGet = async (
  page = 1,
): Promise<MovieResponseProps> => {
  const data = await axios
    .get('/movie/upcoming', {
      params: {
        ...paramsRequest,
        page,
      },
    })
    .then(result => result.data);
  return data;
};

export const topRatedMoviesGet = async (
  page = 1,
): Promise<MovieResponseProps> => {
  const data = await axios
    .get('/movie/top_rated', {
      params: {
        ...paramsRequest,
        page,
      },
    })
    .then(result => result.data);
  return data;
};

export const movieDetailGet = async (id: number): Promise<MovieFull> => {
  const data = await axios
    .get(`/movie/${id}`, {
      params: paramsRequest,
    })
    .then(result => result.data);
  return data;
};

export const movieCreditsGet = async (id: number): Promise<CreditsProps[]> => {
  const data = await axios
    .get(`/movie/${id}/credits`, {
      params: paramsRequest,
    })
    .then(result => result.data.cast);
  return data;
};
