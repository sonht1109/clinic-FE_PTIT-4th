import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
  body{
    padding : 0;
    margin : 0;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden!important;
  }

  input, select, button, textarea {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  span {
    display: inline-block;
  }

  .round {
    border-radius: 50%;
  }
  
  .pointer {
    cursor: pointer;
  }
`;
