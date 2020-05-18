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

export const MovieItem = styled.div`
  padding: 1em;
  width: 100%;
  max-width: 250px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: solid 1px rgba(0, 0, 0, 0);
  }
`;
