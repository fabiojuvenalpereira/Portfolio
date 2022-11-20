import React, { useRef } from 'react';
import { SocialIcon } from 'react-social-icons';
import logo from '../../images/logoWhite.png';
import Main from './styles';

function Footer() {
  const ref = useRef();

  const toTop = () => {
    ref.current.scrollTo(0);
  };

  return (
    <Main>
      <button type="button" onClick={toTop}>^</button>
      <img src={logo} alt="this is a fabio logo" />
      <div className="socials">
        <SocialIcon url="https://www.linkedin.com/in/fabiojuvenalpereira/" />
        <SocialIcon url="https://github.com/fabiojuvenalpereira" />
        <SocialIcon url="mailto:fabiojuvenalpereira@gmail.com" />
      </div>
      <div className="signature">
        <p>Designed & created by Fábio Juvenal Pereira</p>
      </div>
    </Main>
  );
}

export default Footer;
