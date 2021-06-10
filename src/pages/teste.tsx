import { ProjectModal } from '../components/ProjectModal';

export default function Teste(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'tomato',
      }}
    >
      <ProjectModal />
    </div>
  );
}
