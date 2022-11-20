import styled from 'styled-components';

const Main = styled.div`
  align-items: center;
  background-color: #0f0f0f;
  display: flex;
  flex-direction: column;
  height: 30vh;
  justify-content: flex-end;
  width: auto;

  @media (max-width: 768px) {

    && img {
      width: 70px;
      margin: 2em 0;
    }

    .socials {
      display: flex;
      justify-content: space-around;
      width: 60%;
      margin-bottom: 1.5em;
    }

    .signature {
      color: #a1a1a1;
      font-size: 0.5em;
      font-family: fira-code;
      padding: 1.5em;
    }
  }

  @media (min-width: 768px) {

    && img {
      width: 70px;
      margin: 2em 0;
    }

    .socials {
      display: flex;
      justify-content: space-around;
      width: 10%;
      margin-bottom: 2em;
    }

    .signature {
      color: #a1a1a1;
      font-size: 0.8em;
      font-family: fira-code;
      margin-bottom: 2em;
    }
  }
`;

export default Main;
