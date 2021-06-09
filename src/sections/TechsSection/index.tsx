import { techs } from '../../data/techs';

import { Container, TechItem } from './styles';

export const TechSection = (): JSX.Element => {
  return (
    <Container>
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
