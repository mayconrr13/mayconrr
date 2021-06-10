import { Container } from './styles';

export const SideButtons = (): JSX.Element => {
  return (
    <Container style={{ display: 'none' }}>
      <button type="button">
        <img src="/icons/sun.svg" alt="Light" />
      </button>

      <span />

      <div>
        <a href="https://www.linkedin.com/in/mayconreisrosario/">
          <img src="/icons/linkedin.svg" alt="Linkedin" />
        </a>
        <a href="https://github.com/mayconrr13">
          <img src="/icons/github.svg" alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/_mayconrr/">
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>
      </div>
    </Container>
  );
};
