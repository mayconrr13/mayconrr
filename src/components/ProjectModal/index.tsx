import Modal from 'react-modal';
import { projects } from '../../data/projects';
import { Container, ImageSection, ProjectDetails } from './style';

interface ProjectModalProps {
  isOpen: boolean;
  projectId: number;
  onRequestClose: () => void;
}

export const ProjectModal = ({
  isOpen,
  projectId,
  onRequestClose,
}: ProjectModalProps): JSX.Element => {
  const selectedProject = projects[projectId];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <ImageSection>
          <div>
            <img src={selectedProject.imagePath} alt={selectedProject.name} />
          </div>

          {/* <div>
          <span />
          <span />
          <span />
        </div> */}
        </ImageSection>

        <ProjectDetails>
          <strong>{selectedProject.name.toUpperCase()}</strong>
          <section>
            {selectedProject.techs.map(tech => {
              return <span key={tech.id}>{tech.name.toUpperCase()}</span>;
            })}
          </section>
          <p>{selectedProject.details}</p>

          <div>
            <a href={selectedProject.repository}>
              <img src="/icons/github.svg" alt="GitHub" />
              <span>CODE</span>
            </a>
            {selectedProject.liveLink !== '' && (
              <a href={selectedProject.liveLink}>
                <img src="/icons/link.svg" alt="Link" />
                <span>DEMO</span>
              </a>
            )}
          </div>
        </ProjectDetails>

        {/* close modal button */}
        <button type="button" onClick={onRequestClose}>
          <img src="/icons/x.svg" alt="Fechar" />
        </button>
      </Container>
    </Modal>
  );
};
