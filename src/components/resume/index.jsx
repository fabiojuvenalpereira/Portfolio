/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Main from './styles';

function Resume() {
  const [text] = useTypewriter({
    words: ['Desenvolvedor full-stack', 'Que ama Front-end', 'E também Back-end'],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <Main>
      <div className="left-side">
        <div className="text-area">
          <motion.p
            className="text"
          >
            Olá! Meu Nome é
          </motion.p>
          <motion.p
            className="name"
          >
            Fábio.
          </motion.p>
        </div>

        <motion.div
          className="about-button"
        >
          <button type="button">Sobre Mim</button>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 1.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.5 }}
        className="window-tab-area"
      >
        <div className="window-tab-content">
          <div className="buttons">
            <div className="btn button-1" />
            <div className="btn button-2" />
            <div className="btn button-3" />
          </div>
          <div className="content-area">
            <div className="line code-line">
              <p className="line-number">1</p>
              <span>{'<p>'}</span>
            </div>

            <div className="line">
              <p className="line-number">2</p>
              <div>
                <span className="code-text-content">{text}</span>
                <Cursor cursorStyle="_" />
              </div>
            </div>

            <div className="line code-line">
              <p className="line-number">3</p>
              <span>{'</P>'}</span>
            </div>

            <div className="line">
              <p className="line-number">4</p>
            </div>

            <div className="line">
              <p className="line-number">5</p>
              <p>// Desenvolvedor web, que ama tecnologia</p>
            </div>

            <div className="line">
              <p className="line-number">6</p>
              <p>// e tudo o que ela proporciona.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Main>
  );
}

export default Resume;
