/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import {
  movieDetailGet,
  movieCreditsGet,
  similarMoviesGet,
  movieVideoGet,
  MovieResponseProps,
} from '../../services/movieDB';
import ElencoList from '../../components/ElencoList';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';
import {
  Container,
  Backdrop,
  Overview,
  CrewDetail,
  CrewGroup,
  TrailerContainer,
} from './styles';

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
  runtime: number | null;
}
interface CastProps {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}
interface CrewProps {
  id: number;
  name: string;
  department: string;
  job: string;
  profile_path: string;
}

interface MovieVideoProps {
  id: string;
  key: string;
  name: string;
  size: number;
}

const Movie: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieFull | null>(null);
  const [casts, setCasts] = useState<CastProps[] | null>(null);
  const [crews, setCrews] = useState<CrewProps[] | null>(null);
  const [videos, setVideos] = useState<MovieVideoProps[] | null>(null);
  const [similarMovies, setSimilarMovies] = useState<MovieResponseProps | null>(
    null,
  );

  useEffect(() => {
    const movieDetail = movieDetailGet(parseInt(id, 10));
    const movieCasts = movieCreditsGet(parseInt(id, 10));
    const movieSimilar = similarMoviesGet(parseInt(id, 10));
    const movieVideos = movieVideoGet(parseInt(id, 10));
    Promise.all([movieDetail, movieCasts, movieSimilar, movieVideos]).then(
      values => {
        setMovie(values[0]);
        setCasts(values[1].cast);
        setCrews(values[1].crew);
        setSimilarMovies(values[2]);
        setVideos(values[3]);
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
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
              <ul>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
                {movie.runtime && <li>{` - ${movie.runtime} min`}</li>}
              </ul>

              <h3>Sinopse & Detalhes</h3>
              <p>{movie.overview}</p>
              <CrewGroup>
                {crews?.map(
                  (crew, index) =>
                    index <= 4 && (
                      <CrewDetail key={crew.id}>
                        <p>
                          <strong>{crew.name}</strong>
                        </p>
                        <p>{crew.job}</p>
                      </CrewDetail>
                    ),
                )}
              </CrewGroup>
            </div>
          </Overview>
        </Backdrop>
      )}

      <ElencoList
        casts={casts}
        title="Elenco"
        onEdge={() => {
          console.log('');
        }}
      />

      {videos?.length && (
        <TrailerContainer>
          <h1>Trailer</h1>
          <YouTube
            videoId={videos[0].key}
            opts={{ width: videos[0].size.toString() }}
          />
        </TrailerContainer>
      )}

      <MovieList
        title="Você gostou desse? então veja titulos similares"
        movies={similarMovies?.results}
        onEdge={() => {
          console.log('');
        }}
      />
    </Container>
  );
};

export default Movie;
