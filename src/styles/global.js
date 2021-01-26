import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-white: #fff;
    --primary-red: #cc1d01;
    --primary-green: #1b811b;
    --secondary-green: #346a1c;
    --primary-yellow: #fa9900;

    --primary-grey: #9b9b9b;
    --secondary-grey: #a6a8a6;
    --tertiary-grey: #333333;
    --quaternary-grey: #656565;
    --hover-grey: #939593;

  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 768px) {
      font-size: 50%;
    }
  }

  html, body, #root {
    height: 100%;
  }

  html,
  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.2;
    margin: auto;
    width: 100%;
    overflow: auto;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, textarea, button {
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
