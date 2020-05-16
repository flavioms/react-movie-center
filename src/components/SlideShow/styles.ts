import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Slide = styled.div`
  padding: 1em;
  width: 100%;
  height: 550px;
`;

interface BannerProps {
  src: string;
}

export const Banner = styled.figure<BannerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-repeat: none;
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(7, 41, 86, 0) 3%,
      #020916 102%
    );
  }
`;

export const BannerInfo = styled.div`
  margin-left: 5%;
  z-index: 2;

  h3,
  a {
    line-height: 1.33;
    letter-spacing: 1.76px;
    font-weight: normal;
    font-size: 1.2em;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    opacity: 0.7;
    margin-bottom: 0.5em;
  }

  a {
    display: flex;
    align-items: center;

    & > svg {
      margin-right: 0.5em;
    }
  }

  h1 {
    font-size: 3em;
    font-weight: 600;
    line-height: 1.32;
    letter-spacing: 0.18px;
    color: #eee;
    text-transform: capitalize;
    margin-bottom: 0.5em 0;
  }
`;
