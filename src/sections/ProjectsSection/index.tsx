import { Container, ProjectItem } from './styles';

export const ProjectsSection = (): JSX.Element => {
  return (
    <Container id="projects">
      <h2>PROJECTS</h2>

      <div>
        <ProjectItem>
          <img src="/project.jpg" alt="Name" />
          <span />

          <div>
            <h3>PROJECT NAME</h3>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum
            </p>
            <button type="button">+</button>
          </div>
        </ProjectItem>
        <ProjectItem>
          <img src="/project.jpg" alt="Name" />
          <span />

          <div>
            <h3>PROJECT NAME</h3>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum
            </p>
            <button type="button">+</button>
          </div>
        </ProjectItem>
        <ProjectItem>
          <img src="/project.jpg" alt="Name" />
          <span />

          <div>
            <h3>PROJECT NAME</h3>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum
            </p>
            <button type="button">+</button>
          </div>
        </ProjectItem>
        <ProjectItem>
          <img src="/project.jpg" alt="Name" />
          <span />

          <div>
            <h3>PROJECT NAME</h3>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum
            </p>
            <button type="button">+</button>
          </div>
        </ProjectItem>
      </div>
    </Container>
  );
};
