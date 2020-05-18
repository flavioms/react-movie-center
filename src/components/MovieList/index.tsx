import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Movie from '../../store/ducks/Movie';

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

interface OwnProps {
  movies: Movie[];
  title: string;
  onEdge(): void;
}

const MovieList: React.FC<OwnProps> = ({ movies, title, onEdge }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <Slider {...settings} onEdge={onEdge}>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` || ''}
              alt={movie.title}
            />
          </MovieItem>
        ))}
      </Slider>
    </Container>
  );
};

export default MovieList;
