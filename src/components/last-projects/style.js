import styled from 'styled-components';

const Main = styled.main`
  background-color: #181818;
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
  display: flex;
  flex-direction: column;
  height: 100%;

  .title-section-page {
    color: white;
    text-align: center;
    padding-top: 3em;
  }

  .cards {
    display: flex;
    justify-content: space-evenly;
    height: 60vh;
  }
`;

export default Main;
