import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //dark
  :root {
    --text: #FFFFFF;
    --text-2: #E5E5E5;
    --gray-1: #363636;
    --gray-2: #DDDDDD;
    --gray-3: #AAAAAA;
    --background-2: #242424;
    --background: #1D1D1D;
    --background-t50: #00000050;

    --primary: #FFAD05;
    --primary-t50: #FFAD0590;
    --primary-t100: #FFAD05bb;
  }

  //light
  /* :root {
    --text: #1D1D1D;
    --text-2: #363636;
    --gray-1: #C4C4C4;
    --gray-2: #DDDDDD;
    --gray-3: #AAAAAA;
    --background-2: #EFEFEF;
    --background: #FFFFFF;

    --primary: #e89c00;
    --primary-t50: #e89c0050;
  } */

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: var(--background-t50);

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10000;

    display:flex;
    align-items: center;
    justify-content: center;
  }

  .ReactModal__Body--open {
    overflow: hidden;
  }

  .react-modal-content {
    width: 600px;
    height: 90vh;
    overflow-y: scroll;
    background: var(--background);
    position: relative;
    outline: none;

    @media (max-width: 650px) {
      width: 90vw;
    }
  }
`;
