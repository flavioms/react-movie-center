import React from 'react';
import Slider, { Settings } from 'react-slick';
import { FaPlayCircle } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Banner, BannerInfo, Slide } from './styles';

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
}
const SlideShow: React.FC<OwnProps> = ({ movies }) => {
  const settings: Settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 60 * 100,
  };

  return (
    <Container>
      <Slider {...settings}>
        {movies &&
          movies.map(movie => (
            <Slide key={movie.id}>
              <Banner
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              >
                <BannerInfo>
                  <h3>Destaques</h3>
                  <h1>{movie.title}</h1>
                  <h3>{`${movie.genreNames}`}</h3>
                  <a href="$">
                    <FaPlayCircle />
                    Veja o trailer
                  </a>
                </BannerInfo>
              </Banner>
            </Slide>
          ))}
      </Slider>
    </Container>
  );
};

export default SlideShow;
