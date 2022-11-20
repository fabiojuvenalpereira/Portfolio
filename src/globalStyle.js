import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: none;
      border: none;
      font-family: 'Fira Code', monospace;
      margin: none;
      outline: none;
      padding: none;
      ::-webkit-scrollbar {
        display: none;
      }
    }
`;

export default GlobalStyle;
