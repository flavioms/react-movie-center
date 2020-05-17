/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/camelcase */
import React, { createContext, useState } from 'react';
// import { UserInfo } from 'firebase';
import { getMovies, getGender } from '../services/movie';

interface MovieBasic {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: number[];
  genreNames?: string[];
  overview: string;
}

interface ReturnAPIProps {
  page: number;
  results: MovieBasic[];
  total_pages: number;
}

interface MovieContextData {
  bannerMovies: ReturnAPIProps | null;
  popularMovies: ReturnAPIProps | null;
  topRatedMovies: ReturnAPIProps | null;
  getMoviesToUpcoming(): Promise<void>;
  getMoviesToPopular(): Promise<void>;
  getMoviesToTopRated(): Promise<void>;
}

const MovieContext = createContext<MovieContextData>({} as MovieContextData);

export const MovieProvider: React.FC = ({ children }) => {
  const [bannerMovies, setBannerMovies] = useState<ReturnAPIProps | null>(null);
  const [popularMovies, setPopularMovies] = useState<ReturnAPIProps | null>(
    null,
  );
  const [topRatedMovies, setTopRatedMovies] = useState<ReturnAPIProps | null>(
    null,
  );

  async function resolveGenderName(
    movies: MovieBasic[],
  ): Promise<MovieBasic[]> {
    const genders = await getGender();
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
  }

  async function getMoviesToPopular(): Promise<void> {
    const { page, results, total_pages }: ReturnAPIProps = await getMovies(
      'popular',
    );

    const response = await resolveGenderName(results);

    setPopularMovies({
      page,
      total_pages,
      results: response,
    });
  }

  async function getMoviesToUpcoming(): Promise<void> {
    const { page, results, total_pages }: ReturnAPIProps = await getMovies(
      'upcoming',
    );

    const response = await resolveGenderName(results);

    setBannerMovies({
      page,
      total_pages,
      results: response,
    });
  }

  async function getMoviesToTopRated(): Promise<void> {
    const { page, results, total_pages }: ReturnAPIProps = await getMovies(
      'top_rated',
    );

    const response = await resolveGenderName(results);

    setTopRatedMovies({
      page,
      total_pages,
      results: response,
    });
  }

  return (
    <MovieContext.Provider
      value={{
        bannerMovies,
        popularMovies,
        topRatedMovies,
        getMoviesToUpcoming,
        getMoviesToPopular,
        getMoviesToTopRated,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
