import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Container, AboutText } from './styles';

export const AboutSection = (): JSX.Element => {
  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('about');
    }
  }, [inView, setActiveSection]);

  return (
    <Container id="about" ref={ref}>
      <h2>ABOUT</h2>

      <div>
        <div />

        <AboutText>
          <h3>Hey! What&apos;s up?</h3>

          <p>
            I&apos;m a front end developer passionate about technology. Since
            august of 2020, I start to learn how to coding with JavaScript and
            after that I discovered the web development world and came studing
            about that since then.
          </p>
          <p>
            {' '}
            At the beggining of 2021, I dicided to focus at front end,
            increasing my abilities with HTML, CSS, JS and ReactJS. In March of
            the same year I dicided to take a big step in my studies and my
            future carrear by joining Rocketseat&apos;s bootcamp IGNITE, on
            ReactJS trail.
          </p>
          <p>
            Since then, I&apos;m focusing on absorve all the knowedge that I can
            and develop small projects to create my own portifolio and, one day,
            finally get my first job.
          </p>

          <a href="/files/CV_Maycon_Reis_Rosario.pdf" download>
            DOWNLOAD CV
          </a>
        </AboutText>
      </div>
    </Container>
  );
};
