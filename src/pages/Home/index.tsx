import React, { useEffect, useState } from 'react';
import {
  popularMoviesGet,
  topRatedMoviesGet,
  upcomingMoviesGet,
  MovieResponseProps,
} from '../../services/movieDB';
import SlideShow from '../../components/SlideShow';
import MovieList from '../../components/MovieList';
import Header from '../../components/Header';
import { Container } from './styles';

const Home: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<MovieResponseProps | null>(
    null,
  );
  const [
    topRatedMovies,
    setTopRatedMovies,
  ] = useState<MovieResponseProps | null>(null);
  const [
    upcomingMovies,
    setUpcomingMovies,
  ] = useState<MovieResponseProps | null>(null);

  const upcomingNextPage = async (): Promise<void> => {
    if (upcomingMovies) {
      const nextPage = upcomingMovies?.page + 1;
      if (upcomingMovies?.total_pages > nextPage) {
        const data = await upcomingMoviesGet(nextPage);
        setUpcomingMovies({
          ...data,
          results: [...upcomingMovies.results, ...data.results],
        });
      }
    }
  };

  const topRatedNextPage = async (): Promise<void> => {
    if (topRatedMovies) {
      const nextPage = topRatedMovies?.page + 1;
      if (topRatedMovies?.total_pages > nextPage) {
        const data = await topRatedMoviesGet(nextPage);
        setTopRatedMovies({
          ...data,
          results: [...topRatedMovies.results, ...data.results],
        });
      }
    }
  };

  useEffect(() => {
    const popular = popularMoviesGet();
    const topRated = topRatedMoviesGet();
    const upcoming = upcomingMoviesGet();
    Promise.all([popular, topRated, upcoming]).then(values => {
      setPopularMovies(values[0]);
      setTopRatedMovies(values[1]);
      setUpcomingMovies(values[2]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />
      <SlideShow movies={popularMovies?.results} />

      <MovieList
        onEdge={upcomingNextPage}
        movies={upcomingMovies?.results}
        title="Os mais populares"
      />

      <MovieList
        onEdge={topRatedNextPage}
        movies={topRatedMovies?.results}
        title="Coleção em destaque"
      />
    </Container>
  );
};

export default Home;
