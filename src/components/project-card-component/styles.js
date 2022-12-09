import styled from 'styled-components';

const Main = styled.div`
  list-style: none;
  /* cursor: pointer; */
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 2em;
  width: 25%;
  height: auto;

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

  &&:hover .background {
    border-radius: 10px;
    height: 100%;
    margin: -1em 0 1em -1em;
    padding: 2em 0 0 2em;
    transition: 0.4s;
    width: 100%;
  }

  .card-image {
    width: 100%;
    height: 50%;
  }

  .card-image img {
    border-radius: 5px;
    box-shadow: 0 0 10px 10px #18181850;
    width: 100%;
    height: 100%;
    transition: 0.2s;
  }

  .card-image img:hover {
    /* filter: brightness(0.5); */
    transition: 0.2s;
  }
  .card-content {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;
  }

  .title-card {
    color: white;
    height: 10%;
    font-size: 2em;
    font-weight: 800;
    margin: 1em 0;
    text-align: center;
    text-transform: uppercase;
  }

  .resume-card {
    background: #343434;
    border-radius: 5px;
    box-shadow: 0 0 10px 10px #18181850;
    color: white;
    height: 50%;
    padding: 0.5em;
    text-align: center;
    transform: translateX(-5em);
  }

  .skills-card {
    flex-wrap: wrap;
    height: 10%;
    width: 50%;
  }

  .skill {
    background: #00000095;
    border-radius: 5px;
    color: white;
    /* cursor: pointer; */
    margin-top: -0.5em;
    padding: 1em;
    text-transform: uppercase;
    transform: scale(0.8);
  }

  .skill:hover {
    background: #121212;
  }

  .card-content-container.open {
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: red;
  z-index: 1;
  overflow: hidden;
  padding: 40px 0;
}
`;

export default Main;
