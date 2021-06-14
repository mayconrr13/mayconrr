import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Container, AboutText } from './styles';

export const AboutSection = (): JSX.Element => {
  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('about');
    }
  }, [inView, setActiveSection]);

  return (
    <Container id="about" ref={ref}>
      <h2>SOBRE</h2>

      <div>
        <div />

        <AboutText>
          <h3>Olá!</h3>

          <p>
            Sou Maycon, mestrando em engenharia de estruturas pela EESC-USP e
            apaixonado pelo mundo da tecnologia. No meu tempo livre gosto de
            assistir um bom filme e, também, aproveitar para me atualizar e
            desafiar na execução de novos projetos.
          </p>
          <p>
            Atualmente estou focado no desenvolmento web voltado para o
            front-end com o uso de ReactJS e Typescript. Após a participação em
            bootcamp, compreendi e apliquei em projetos pessoais o conjunto de
            boas práticas que envolvem o front-end com o uso do NextJS em
            conjunto com alternativas de backend como o Firebase e o FaunaDB na
            criação de aplicações modenas, perfomáticas e com escopo mais
            definido.
          </p>

          <a href="/files/CV_Maycon_Reis_Rosario.pdf" download>
            DOWNLOAD CV
          </a>
        </AboutText>
      </div>
    </Container>
  );
};
