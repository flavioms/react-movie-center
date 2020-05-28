import styled from 'styled-components';

export const Container = styled.div``;

export const Backdrop = styled.div`
  position: relative;
  width: 100%;
  height: 550px;

  & > img {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.5;

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
  }
`;

export const Overview = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: #eeeeee;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 4em;

  & > .overview-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 4em;
      font-weight: 600;
      line-height: 1.34;
      letter-spacing: 0.23px;
    }

    h3 {
      font-size: 2.5em;
      font-weight: 500;
      line-height: 1.32;
      letter-spacing: 0.18px;
      margin: 0.5em 0;
    }

    p {
      font-size: 1.5em;
      font-weight: 300;
      line-height: 1.32;
      letter-spacing: 0.1px;
    }
    ul {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;

      li {
        list-style: none;
        margin-left: 0.5em;
      }
    }
  }

  & > img {
    max-height: 450px;
    margin-right: 3em;
  }
`;

export const CrewGroup = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const CrewDetail = styled.div`
  text-align: center;
  font-size: 0.8em;
  font-weight: 900;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const TrailerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2em 0 4em;

  h1 {
    color: #fff;
    margin: 2em 0;
  }
`;
