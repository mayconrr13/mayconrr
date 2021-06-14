import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useActiveSection } from '../../hooks/useActiveSection';
import { exitRight, fadeLeft } from '../../utils/animations';
import { Container, Content } from './styles';

export const ContactSection = (): JSX.Element => {
  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('contact');
    }
  }, [inView, setActiveSection]);

  return (
    <Container id="contact" ref={ref}>
      <ParallaxBanner
        layers={[
          {
            image: '/contact-bg.png',
            amount: 0.35,
          },
        ]}
        style={{
          position: 'absolute',
          height: '100%',
          bottom: '0',
          zIndex: '-10',
        }}
      />

      <span />

      <Content>
        <motion.section
          animate={inView ? fadeLeft : exitRight}
          transition={{ delay: 0.2 }}
        >
          <h2>CONTACT</h2>

          <strong>E-MAIL</strong>
          <a href="mailto:mayconrr13@gmail.com">mayconrr13@gmail.com</a>

          <strong>WHATSAPP</strong>
          <a href="https://wa.me/15562999631103">(62) 9 9963-1103</a>

          <strong>SOCIAL MEDIA</strong>
          <div>
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
          </div>
        </motion.section>
      </Content>
    </Container>
  );
};
