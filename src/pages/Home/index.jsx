import React, { useRef, useState } from 'react';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from '../../components/header';
import LastProjects from '../../components/last-projects';
import Footer from '../../components/footer';
import Loading from '../../components/loading';

import Main from './styles';

import backimg from '../../images/backParallax.png';
import AboutMe from '../../components/about';
import Resume from '../../components/resume';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const ref = useRef();
  const animationTimmer = 2000;

  setTimeout(() => {
    setLoading(false);
  }, animationTimmer);

  if (loading) return (<Loading />);
  return (
    <Main>
      <Parallax pages={3} ref={ref}>
        <ParallaxLayer
          offset={0.90}
          speed={0.5}
          factor={5}
          className="background-parallax"
        >
          <img src={backimg} alt="teste" />
        </ParallaxLayer>

        <ParallaxLayer offset={0}>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer className="hero-layer" offset={1}>
          <Resume />
        </ParallaxLayer>

        <ParallaxLayer offset={1.3}>
          <LastProjects />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.3}>
          <AboutMe />
        </ParallaxLayer>

        <ParallaxLayer
          className="footer"
          offset={2}
          speed={1.2}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </Main>
  );
}
