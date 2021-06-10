import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Container } from './styles';

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

  const fadeLeft = {
    opacity: [0, 1],
    x: [30, 0],
  };

  const exitRight = {
    opacity: [1, 0],
    x: [0, 30],
  };

  return (
    <Container id="contact" ref={ref}>
      <img src="/contact-bg.jpg" alt="Coding" />

      <div>
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
            <a href="https://github.com/mayconrr13">
              <img src="/icons/github.svg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/mayconreisrosario/">
              <img src="/icons/linkedin.svg" alt="Linkedin" />
            </a>
            <a href="https://www.instagram.com/_mayconrr/">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </motion.section>
      </div>
    </Container>
  );
};
