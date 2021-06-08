import { Container, AboutText } from './styles';

export const AboutSection = (): JSX.Element => {
  return (
    <Container id="#about">
      <h2>ABOUT</h2>

      <div>
        <div />

        <AboutText>
          <h3>Hey! What&apos;s up?</h3>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, When an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>

          <button type="button">DOWNLOAD CV</button>
        </AboutText>
      </div>
    </Container>
  );
};
