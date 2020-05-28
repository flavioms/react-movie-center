import React, { Suspense } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo from '../../assets/logo.png';

import { Container, MovieItem } from './styles';

const settings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  arrows: false,
  lazyLoad: 'ondemand',
};

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: number[];
  genreNames?: string[];
  overview: string;
}
interface OwnProps {
  movies: Movie[] | undefined;
  title: string;
  onEdge(): void;
}

const MovieList: React.FC<OwnProps> = ({ movies, title, onEdge }) => {
  return (
    <Container>
      <Suspense fallback={<h1>loading...</h1>}>
        <h1>{title}</h1>
        <Slider {...settings} onEdge={onEdge}>
          {movies &&
            movies.map(movie => (
              <MovieItem to={`/movie/${movie.id}`} key={movie.id}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : Logo
                  }
                  alt={movie.title}
                />
              </MovieItem>
            ))}
        </Slider>
      </Suspense>
    </Container>
  );
};

export default MovieList;
