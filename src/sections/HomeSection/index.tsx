import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ScrollSign } from '../../components/ScrollSign';
import { useActiveSection } from '../../hooks/useActiveSection';
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

  const fadeUp = {
    opacity: [0, 1],
    y: [30, 0],
  };

  const fadeDown = {
    opacity: [0, 1],
    y: [-30, 0],
  };

  return (
    <Container id="home" ref={ref}>
      <img src="/home-bg.jpg" alt="Home" />

      <motion.p animate={fadeDown} transition={{ delay: 0.2 }}>
        Hi there! I&apos;m
      </motion.p>

      <motion.h1 animate={fadeUp} transition={{ delay: 1 }}>
        MAYCON
      </motion.h1>

      <motion.span animate={fadeUp} transition={{ delay: 1.2 }}>
        FRONT-END DEVELOPER
      </motion.span>

      <motion.div animate={fadeUp} transition={{ delay: 1.5 }}>
        <a href="https://github.com/mayconrr13">
          <img src="/icons/github.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/mayconreisrosario/">
          <img src="/icons/linkedin.svg" alt="Linkedin" />
        </a>
        <a href="https://www.instagram.com/_mayconrr/">
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>
      </motion.div>

      <ScrollSign />
    </Container>
  );
};
