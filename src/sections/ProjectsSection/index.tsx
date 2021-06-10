import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ProjectModal } from '../../components/ProjectModal';
import { projects } from '../../data/projects';
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
        {projects.map(project => {
          return (
            <ProjectItem key={project.id}>
              <img src={project.imagePath} alt={project.name} />
              <span />

              <div>
                <h3>{project.name.toUpperCase()}</h3>
                <p>{project.description}</p>
                <button
                  type="button"
                  onClick={() => handleOpenModal(project.id)}
                >
                  +
                </button>
              </div>
            </ProjectItem>
          );
        })}
      </div>

      <ProjectModal
        isOpen={projectModalIsOpen}
        onRequestClose={handleCloseModal}
        projectId={projectId}
      />
    </Container>
  );
};
