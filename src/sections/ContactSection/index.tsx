import { Container } from './styles';

export const ContactSection = (): JSX.Element => {
  return (
    <Container id="contact">
      <img src="/contact-bg.jpg" alt="Coding" />

      <div>
        <section>
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
        </section>
      </div>
    </Container>
  );
};
