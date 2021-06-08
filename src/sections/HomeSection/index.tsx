import { Container } from './styles';

export const HomeSection = (): JSX.Element => {
  return (
    <Container>
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
    </Container>
  );
};
