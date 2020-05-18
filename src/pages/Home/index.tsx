/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import Movie from '../../store/ducks/Movie';
import * as PopularMoviesActions from '../../store/ducks/popularMovies/actions';
import * as UpcomingMoviesActions from '../../store/ducks/upcomingMovies/actions';
import * as TopRatedMoviesActions from '../../store/ducks/topRatedMovies/actions';
import Header from '../../components/Header';
import SlideShow from '../../components/SlideShow';
import MovieList from '../../components/MovieList';
import { Container } from './styles';

interface StateProps {
  popularMovies: Movie[];
  upcomingMovies: Movie[];
  topRatedMovies: Movie[];
}

interface DispatchProps {
  loadPopularRequest(): void;
  loadUpcomingRequest(): void;
  loadTopRatedRequest(): void;
}

type Props = StateProps & DispatchProps;

const Home: React.FC<Props> = ({
  popularMovies,
  upcomingMovies,
  topRatedMovies,
  loadPopularRequest,
  loadUpcomingRequest,
  loadTopRatedRequest,
}) => {
  useEffect(() => {
    loadPopularRequest();
    loadUpcomingRequest();
    loadTopRatedRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Header />
      <SlideShow movies={popularMovies} />

      <MovieList
        onEdge={() => console.log('teste')}
        movies={upcomingMovies}
        title="Os mais populares"
      />

      <MovieList
        onEdge={() => console.log('teste')}
        movies={topRatedMovies}
        title="Coleção em destaque"
      />
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    popularMovies: state.popularMovies.data,
    upcomingMovies: state.upcomingMovies.data,
    topRatedMovies: state.topRatedMovies.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      ...PopularMoviesActions,
      ...UpcomingMoviesActions,
      ...TopRatedMoviesActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
