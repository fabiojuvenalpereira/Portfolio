import styled from 'styled-components';

const Main = styled.main`
  background-color: #181818;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  width: 100vw;

  .left-side {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .text-area {
    color: #777777;
  }

  .window-tab-content {
    background: #d9d9d920;
    border-radius: 8px;
    box-shadow: 0 0 10px 10px #15151505;
  }

  .buttons {
    align-items: center;
    display: flex;
    height: 12%;
    width: 100%;
  }

  .btn {
    border-radius: 100%;
    height: 1em;
    width: 1em;
    margin-top: 1em;
    transition: 0.2s;
  }

  .btn:hover {
    filter: brightness(1.5);
    transform: scale(1.05);
    transition: 0.2s;
    cursor: pointer;
  }

  .button-1 {
    background: #fa2e2e;
    margin-left: 1em;
  }

  .button-2 {
    background: #f3eb19;
    margin-left: 0.4em;
  }

  .button-3 {
    background: #79ef50;
    margin-left: 0.4em;
  }

  .content-area {
    color: #777777;
    display: flex;
    flex-direction: column;
    font-size: 1.3em;
    margin-top: 1.2em;
  }

  .line {
    align-items: center;
    display: flex;
    height: 1.7em;
    margin-left: 1.3em;
  }

  .code-text-content {
    color: #cdcdcd;
    margin-left: 1.5em;
  }

  .line-number {
    padding-right: 1em;
  }

  .code-line span {
    color: #71af40;
  }

  @media (max-width: 768px) {
    height: 80vh;
    display: flex;
    flex-direction: column;

    .left-side {
      display: flex;
      flex-direction: column;
      height: 40%;
      justify-content: center;
    }
    
    .text {
      font-size: 2.5em;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0.5em 0;
      text-align: center
    }
    
    .name {
      font-size: 5.5em;
      font-weight: 600;
      margin: 0;
      text-align: center;
    }
    
    .about-button {
      position: absolute;
      visibility: hidden;
    }

    .window-tab-area {
        align-items: center;
      display: flex;
      justify-content: center;
      height: 50%;
    }

    .window-tab-content {
      font-size: 0.6em;
      padding: 1em;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    height: 100vh;

    .left-side {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .text-area {
      color: #777777;
      display: flex;
      flex-direction: column;
      height: 30%;
      width: 70%;
    }

    .about-button {
      height: 20%;
      width: 70%;
    }

    .about-button button {
      background-color: #79ef50;
      border: none;
      border-radius: 8px;
      margin: 2em 0;
      padding: 0.5em;
      font-size: 1.2em;
    }

    .text {
      font-size: 4em;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      margin: 0;
    }

    .name {
      font-size: 8em;
      font-weight: 600;
      margin: 0;
    }

    .window-tab-area {
      align-items: center;
      display: flex;
      justify-content: center;
      margin-top: -10em;
      width: 50%;
    }

    .window-tab-content {
      height: 300px;
      width: 640px;
    }
  }
`;

export default Main;
