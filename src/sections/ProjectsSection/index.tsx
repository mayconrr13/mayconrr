import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ProjectModal } from '../../components/ProjectModal';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Container, ProjectItem } from './styles';

export const ProjectsSection = (): JSX.Element => {
  const [projectModalIsOpen, setProjectModalIsOpen] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<number>(0);

  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('projects');
    }
  }, [inView, setActiveSection]);

  const handleOpenModal = useCallback((id: number) => {
    setProjectModalIsOpen(true);
    setProjectId(id);
  }, []);

  const handleCloseModal = useCallback(() => {
    setProjectModalIsOpen(false);
  }, []);

  return (
    <Container id="projects" ref={ref}>
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
            <button type="button" onClick={() => handleOpenModal(1)}>
              +
            </button>
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
            <button type="button" onClick={() => handleOpenModal(2)}>
              +
            </button>
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
            <button type="button" onClick={() => handleOpenModal(3)}>
              +
            </button>
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
            <button type="button" onClick={() => handleOpenModal(4)}>
              +
            </button>
          </div>
        </ProjectItem>
      </div>

      <ProjectModal
        isOpen={projectModalIsOpen}
        onRequestClose={handleCloseModal}
        projectId={projectId}
      />
    </Container>
  );
};
