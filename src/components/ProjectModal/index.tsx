import { Container, ImageSection, ProjectDetails } from './style';

export const ProjectModal = (): JSX.Element => {
  return (
    <Container>
      <ImageSection>
        <div>
          <img src="/contact-bg.jpg" alt="Imagem1" />
        </div>

        {/* <div>
          <span />
          <span />
          <span />
        </div> */}
      </ImageSection>

      <ProjectDetails>
        <strong>NOME DO PROJETO</strong>
        <section>
          <span>HTML</span>
          <span>HTML</span>
          <span>HTML</span>
          <span>HTML</span>
          <span>HTML</span>
          <span>HTML</span>
          <span>HTML</span>
          <span>HTML</span>
          <span>HTML</span>
          <span>HTML</span>
        </section>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, When an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{' '}
        </p>

        <div>
          <button type="button">
            <img src="/icons/github.svg" alt="GitHub" />
            <span>CODE</span>
          </button>
          <button type="button">
            <img src="/icons/link.svg" alt="Link" />
            <span>DEMO</span>
          </button>
        </div>
      </ProjectDetails>

      {/* close modal button */}
      <button type="button">x</button>
    </Container>
  );
};
