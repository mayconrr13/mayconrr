import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { techs } from '../../data/techs';
import { useActiveSection } from '../../hooks/useActiveSection';

import { Container, TechItem } from './styles';

export const TechSection = (): JSX.Element => {
  const { handleActiveSection } = useActiveSection();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      handleActiveSection('techs');
    }
  }, [inView, handleActiveSection]);

  return (
    <Container id="techs" ref={ref}>
      <h2>TECHS</h2>

      <ul>
        {techs.map(tech => {
          return (
            <TechItem key={tech.id}>
              <img src={tech.imagePath} alt={tech.name} />
              <div>
                {tech.isLearning && <span>---- LEARNING ----</span>}
                <strong>{tech.name}</strong>
              </div>
            </TechItem>
          );
        })}
      </ul>
    </Container>
  );
};
