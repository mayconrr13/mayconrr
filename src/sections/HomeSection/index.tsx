import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ScrollSign } from '../../components/ScrollSign';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Container } from './styles';

export const HomeSection = (): JSX.Element => {
  const { handleActiveSection } = useActiveSection();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      handleActiveSection('home');
    }
  }, [inView, handleActiveSection]);

  return (
    <Container id="home" ref={ref}>
      <img src="/home-bg.jpg" alt="Home" />

      <p>Hi there! I&apos;m</p>
      <h1>MAYCON</h1>
      <span>FRONT-END DEVELOPER</span>

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

      <ScrollSign />
    </Container>
  );
};
