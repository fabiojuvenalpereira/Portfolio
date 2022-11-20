import styled from 'styled-components';

const Main = styled.main`
  background-color: #181818;
  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    .hero-layer {
      margin-top: -80vh;
    }

    .footer {
      background-color: red;
      margin-top: 133vw;
    }

    .background-parallax img {
      transform: translateX(-5em);
    }
  }

  @media (min-width: 768px) {
    .hero-layer {
      margin-top: -90vh;
    }

    .footer {
      margin-top: 33vw;
    }


    .background-parallax img {
      width: 100vw;
      height: auto;
    }
  }
`;

export default Main;
