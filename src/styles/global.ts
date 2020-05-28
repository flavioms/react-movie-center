import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  html, body {
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
    background: #020916;
  }

  button, a {
    cursor: pointer;
  }

`;
