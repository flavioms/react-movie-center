import styled from 'styled-components';

export const Container = styled.div`
  & > h1 {
    font-size: 2em;
    font-weight: 600;
    line-height: 1.34;
    color: #ffffff;
    margin: 0.5em 2em;
  }
`;

export const Movie = styled.a`
  & > img {
    width: 250px;
    height: 375px;
    border-radius: 10px;
    border: solid 1px rgba(0, 0, 0, 0);
  }
`;
