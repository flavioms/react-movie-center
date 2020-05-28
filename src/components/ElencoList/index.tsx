import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo from '../../assets/logo.png';

import { Container, ElencoItem } from './styles';

const settings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  arrows: false,
  lazyLoad: 'ondemand',
};

interface CastProps {
  character: string;
  id: number;
  name: string;
  profile_path: string;
}
interface OwnProps {
  casts: CastProps[] | null;
  title: string;
  onEdge(): void;
}

const ElencoList: React.FC<OwnProps> = ({ casts, title, onEdge }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <Slider {...settings} onEdge={onEdge}>
        {casts &&
          casts.map(cast => (
            <ElencoItem key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : Logo
                }
                alt={cast.name}
              />
              <figcaption>
                <h1>{cast.name}</h1>
                <h2>{cast.character}</h2>
              </figcaption>
            </ElencoItem>
          ))}
      </Slider>
    </Container>
  );
};

export default ElencoList;
