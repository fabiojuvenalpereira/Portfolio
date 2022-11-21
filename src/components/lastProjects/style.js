import styled from 'styled-components';

const Main = styled.main`
  background-color: #181818;
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
  height: 100%;

  .title {
    color: white;
    text-align: center;
    padding-top: 3em;
  }

  .cards {
    display: flex;
    justify-content: space-evenly;
    /* background: #000; */
    /* height: 70vh; */
  }

  .main-project-card {
    /* cursor: pointer; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin-top: 2em;
    width: 20%;
  }

  .background {
    background: #242424;
    border-radius: 10px;
    height: 100%;
    margin: 1em 0 0 0;
    padding: 0 0 0 1em;
    position: absolute;
    transition: 0.4s;
    width: 100%;
    z-index: -1;
  }

  .main-project-card:hover .background {
    border-radius: 10px;
    height: 100%;
    margin: 0 0 1em -1em;
    padding: 1em 0 1em 2em;
    transition: 0.4s;
    width: 100%;
  }

  .project-image {
    width: 100%;
    height: 70%;
  }

  .project-image img {
    border-radius: 5px;
    box-shadow: 0 0 10px 10px #18181850;
    width: 100%;
    height: 100%;
    transition: 0.2s;
  }

  .project-image img:hover {
    filter: brightness(0.5);
    transition: 0.2s;
  }

  .title-card-area {
    color: white;
    font-size: 2em;
    font-weight: 800;
    height: 20%;
    text-indent: 1em;
    text-transform: uppercase;
  }

  .resume-card-area {
    align-self: center;
    background-color  : #000;
    border-radius: 5px;
    box-shadow: 0 0 10px 10px #18181850;
    color: white;
    text-align: center;
    transform: translateX(-3em);
    padding: 0.5em;
    height: 20%;
  }

  .skills-area {
    /* background: red; */
    /* align-items: center; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.5em;
    height: 40%;
    width: 100%;
  }

  .skill {
    background: #000;
    border-radius: 5px;
    color: white;
    /* cursor: pointer; */
    margin-top: -0.5em;
    /* padding: 1em; */
    text-transform: uppercase;
    transform: scale(0.8);
  }

  .skill:hover {
    background: #121212;
  }
`;

export default Main;
