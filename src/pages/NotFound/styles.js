import styled from 'styled-components';

const Main = styled.div`

@media (max-width: 768px) {
  .main-not-found {
    background: rgba(255, 0, 0, 0.849);
    width: 100vw;
    height: 100vh;
  }
  
  .container-message {
    align-items: center;
    border: 1px solid black;
    display: flex;
    font-family: 'Press Start 2P', cursive; 
    height: 100%;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  
  .message {
    font-size: 25vw;
  }

  .links{
    border: 1px solid rgb(0, 0, 0);
    border-radius: 0.4em;
    display: flex;
    flex-direction: row;
    width: 70%;
    margin-top: 1.2em;
  }
  
  .text {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-size:calc(2vw + 1.5vw);
    font-family: 'Press Start 2P', cursive; 
    justify-content: center;
    padding: 1em;
  };
}

@media (min-width: 768px) {
  .main-not-found {
    background: rgba(0, 162, 255, 0.849);
    width: 100vw;
    height: 100vh;
  }
  
  .container-message {
    align-items: center;
    border: 1px solid black;
    display: flex;
    font-family: 'Press Start 2P', cursive; 
    height: 100%;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  
  .message {
    font-size: 25vw;
  }

  .links{
    border: 1px solid rgb(0, 0, 0);
    border-radius: 0.4em;
    display: flex;
    flex-direction: row;
    width: 70%;
    margin-top: 1.2em;
  }
  
  .text {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-size:calc(2vw + 1.5vw);
    font-family: 'Press Start 2P', cursive; 
    justify-content: center;
    padding: 1em;
  };
}

`;

export default Main;
