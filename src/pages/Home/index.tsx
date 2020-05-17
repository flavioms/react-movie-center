/* eslint-disable @typescript-eslint/camelcase */
import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import SlideShow from '../../components/SlideShow';
import MovieList from '../../components/MovieList';
import { Container } from './styles';
import MovieContext from '../../contexts/movie';

const Home: React.FC = () => {
  const {
    popularMovies,
    topRatedMovies,
    getMoviesToPopular,
    getMoviesToTopRated,
  } = useContext(MovieContext);

  useEffect(() => {
    getMoviesToPopular();
    getMoviesToTopRated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Header />
      <SlideShow />
      <MovieList
        onEdge={() => getMoviesToPopular()}
        movies={popularMovies?.results}
        title="Os mais populares"
      />
      <MovieList
        onEdge={() => getMoviesToTopRated()}
        movies={topRatedMovies?.results}
        title="Coleção em destaque"
      />
      {/* <button type="button" onClick={() => signOutAuth()}>
        Sair
      </button> */}
    </Container>
  );
};

export default Home;
