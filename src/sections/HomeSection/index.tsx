import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ParallaxBanner } from 'react-scroll-parallax';
import { ScrollSign } from '../../components/ScrollSign';
import { useActiveSection } from '../../hooks/useActiveSection';
import { fadeDown, fadeUp } from '../../utils/animations';
import { Container } from './styles';

export const HomeSection = (): JSX.Element => {
  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('home');
    }
  }, [inView, setActiveSection]);

  return (
    <Container id="home" ref={ref}>
      <ParallaxBanner
        layers={[
          {
            image: '/home-bg.jpg',
            amount: 0.5,
          },
        ]}
        style={{
          position: 'absolute',
          height: '100vh',
        }}
      >
        <img src="/home-bg.jpg" alt="Home" />
      </ParallaxBanner>

      <motion.p animate={fadeDown} transition={{ delay: 0.2 }}>
        Olá pessoal! Eu sou
      </motion.p>

      <motion.h1 animate={fadeUp} transition={{ delay: 1 }}>
        MAYCON
      </motion.h1>

      <motion.span animate={fadeUp} transition={{ delay: 1.2 }}>
        DESENVOLVEDOR FRONT-END
      </motion.span>

      <motion.div animate={fadeUp} transition={{ delay: 1.5 }}>
        <a
          href="https://github.com/mayconrr13"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/github.svg" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/mayconreisrosario/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/linkedin.svg" alt="Linkedin" />
        </a>
        <a
          href="https://www.instagram.com/_mayconrr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>
      </motion.div>

      <ScrollSign />
    </Container>
  );
};
