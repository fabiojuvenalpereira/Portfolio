import React from 'react';
import MainHeader from './styles';

import logo from '../../images/logoWhite.png';

function Header() {
  const handleClick = ({ target }) => {
    console.log(target.id);
  };

  return (
    <MainHeader>
      <div className="image-area">
        <img src={logo} alt="this is a fabio logo" />
      </div>
      <div className="buttons-area">
        <button
          id="projects-button-id"
          className="projects-button"
          type="button"
          onClick={(event) => handleClick(event)}
        >
          Projetos
        </button>
        <button
          id="contact-button-id"
          className="contact-button"
          type="button"
          onClick={(event) => handleClick(event)}
        >
          contatos
        </button>
      </div>
    </MainHeader>
  );
}

export default Header;
