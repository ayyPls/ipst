import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat, sans-serif;
    font-weight: 800;
    line-height: 1.2;
  }  
  a{
    cursor: pointer;
    text-decoration: none;
    color: #282c34;
  }
  a:hover{
    color:#61dafb;
  }
`;