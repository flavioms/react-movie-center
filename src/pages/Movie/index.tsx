/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetailGet, movieCreditsGet } from '../../services/movieDB';
import ElencoList from '../../components/ElencoList';
import Header from '../../components/Header';
import { Container, Backdrop, Overview } from './styles';

interface Genre {
  id: number;
  name: string;
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
interface CastProps {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

const Movie: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieFull | null>(null);
  const [casts, setCasts] = useState<CastProps[] | null>(null);
  const movieDetail = movieDetailGet(parseInt(id, 10));
  const movieCasts = movieCreditsGet(parseInt(id, 10));
  useEffect(() => {
    Promise.all([movieDetail, movieCasts]).then(values => {
      setMovie(values[0]);
      setCasts(values[1]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Header />
      {movie && (
        <Backdrop>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt=""
          />
          <Overview>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
            <div className="overview-detail">
              <h1>{movie.title}</h1>
              <h3>Sinopse & Detalhes</h3>
              <p>{movie.overview}</p>
            </div>
          </Overview>
        </Backdrop>
      )}

      <ElencoList
        casts={casts}
        title="Elenco"
        onEdge={() => {
          console.log('teste');
        }}
      />
    </Container>
  );
};

export default Movie;
