import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;

  h1 {
    font-size: 2em;
    font-weight: 600;
    line-height: 1.34;
    color: #ffffff;
    margin: 0.5em 2em;
  }
`;

export const ElencoItem = styled.figure`
  padding: 1em;
  width: 100%;
  max-width: 250px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: solid 1px rgba(0, 0, 0, 0);
  }

  figcaption {
    text-align: center;
    font-weight: 500;
    line-height: 1.32;
    h1 {
      font-size: 1.2em;
    }

    h2 {
      font-size: 1em;
      color: #999999;
    }
  }
`;
