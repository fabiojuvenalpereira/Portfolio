import React from 'react';
import { motion } from 'framer-motion';

import Main from './styles';
import logo from '../../images/logoWhite.png';

function Loading() {
  return (
    <Main>
      <motion.div
        animate={{
          y: [0, 0, 0, 0, -1000],
          scale: [1, 0.5, 1, 1, 1],
          rotate: [0, -180, 180, 0, 0],
          opacity: [1, 1, 1, 1, 0],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      >
        <img src={logo} alt="this is a Fabio logo" />
      </motion.div>
    </Main>
  );
}

export default Loading;
