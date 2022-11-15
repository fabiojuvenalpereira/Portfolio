import styled from 'styled-components';

const MainHeader = styled.div`
  align-items: center;
  background-color: #242424;
  display: flex;
  height: 10vh;
  width: 100vw;

  @media (max-width: 768px) {
    && img {
      width: 50px;
      margin-left: 1.5em;
    }

    .image-area {
      width: 100%;
    }

    .buttons-area {
      background: none;
      display: flex;
      justify-content: space-around;
      width: 300px;
    }

    .buttons-area button {
      background: none;
      color: white;
      padding:1em;
      font-size: 1em;
    }
  }

  @media (min-width: 768px) {
    && img {
      width: 75px;
      margin-left: 1.5em;
    }

    .image-area {
      width: 100%;
    }

    .buttons-area {
      background: none;
      display: flex;
      justify-content: space-around;
      width: 300px;
    }

    .buttons-area button {
      background: none;
      color: whitesmoke;
      padding:1em;
      font-size: 1em;
    }

    .buttons-area button:hover {
      color: white;
    }
  }
`;

export default MainHeader;
