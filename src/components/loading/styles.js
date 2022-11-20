import styled, { keyframes } from 'styled-components';

const animatedLogo = keyframes`
  0% {
      transform: scale3d(1, 1, 1);
    }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const back = keyframes`
   0% {
      background-color: black;
    }
    50% {
      background-color: black;
    }
    100% {
      background-color: #242424;
    }
`;

const Main = styled.main`
  align-items: center;
  animation: ${back} 3s normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  
  img {
    animation: ${animatedLogo} 1s ease 0s 1 normal both;
  }

  @media (max-width: 768px) {
    img {
    scale: 0.7;
  }
  }

`;

export default Main;
