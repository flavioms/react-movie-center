import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, Movie } from './styles';

const settings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  arrows: false,
  lazyLoad: 'ondemand',
};

interface MovieBasic {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: number[];
  genreNames?: string[];
  overview: string;
}

interface MovieListProps {
  movies: MovieBasic[] | null | undefined;
  title: string;
  onEdge(): void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, title, onEdge }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <Slider {...settings} onEdge={onEdge}>
        {movies &&
          movies.map(movie => (
            <Movie href="$" key={movie.id}>
              <img
                src={
                  `https://image.tmdb.org/t/p/w500/${movie.poster_path}` || ''
                }
                alt={movie.title}
              />
            </Movie>
          ))}
      </Slider>
    </Container>
  );
};

export default MovieList;
