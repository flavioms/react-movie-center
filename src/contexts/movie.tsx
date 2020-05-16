import React, { createContext, useState, useEffect } from 'react';
// import { UserInfo } from 'firebase';
import { getPopularMovies, getGender } from '../services/movie';

interface MovieBasic {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: number[];
  genreNames?: string[];
  overview: string;
}

interface MovieContextData {
  bannerMovies: MovieBasic[] | null;
  getMoviesToBanner(): Promise<void>;
}
const MovieContext = createContext<MovieContextData>({} as MovieContextData);

export const MovieProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<MovieBasic[] | null>(null);

  async function getMoviesToBanner(): Promise<void> {
    const genders = await getGender();
    const data: MovieBasic[] | null = await getPopularMovies();

    const response = data.map(movie => {
      return Object.assign(movie, {
        genreNames: movie.genre_ids.map(key => {
          return genders
            .filter(gender => gender.id === key)
            .map(gender => gender.name);
        }),
      });
    });

    setMovies(response);
  }

  return (
    <MovieContext.Provider
      value={{
        bannerMovies: movies,
        getMoviesToBanner,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
