import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: 0;
      border: 0;
      font-family: 'Fira Code', monospace;
      margin: 0;
      outline: 0;
      padding: 0;
      ::-webkit-scrollbar {
        display: none;
      }
    }
`;

export default GlobalStyle;
