import React from 'react';

import { motion } from 'framer-motion';

import MainHeader from './styles';

import logo from '../../images/logoWhite.png';

function Header() {
  const handleClick = ({ target }) => {
    if (target) {
      return '';
    }
    return '';
  };

  return (
    <motion.div
      initial={{ scale: 100 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <MainHeader>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className="image-area"
        >
          <img src={logo} alt="this is a fabio logo" />
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className="buttons-area"
        >
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
        </motion.div>
      </MainHeader>
    </motion.div>
  );
}

export default Header;
