import React, { useContext, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import { FaPlayCircle } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieContext from '../../contexts/movie';
import { Container, Banner, BannerInfo, Slide } from './styles';

const SlideShow: React.FC = () => {
  const { bannerMovies, getMoviesToBanner } = useContext(MovieContext);
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

  useEffect(() => {
    getMoviesToBanner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Slider {...settings}>
        {bannerMovies &&
          bannerMovies.map(movie => (
            <Slide key={movie.id}>
              <Banner
                src={
                  `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` ||
                  ''
                }
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
