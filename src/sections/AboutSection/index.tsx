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
            Sou Maycon, mestre em engenharia de estruturas pela EESC-USP e
            apaixonado pelo mundo da tecnologia. No meu tempo livre gosto de
            assistir um bom filme, escutar música, ler livros, jogar com amigos
            e, também, aproveitar para me atualizar e desafiar na execução de
            novos projetos.
          </p>
          <p>
            No meu tempo de mercado, trabalhei principalmente no front-end com a
            desenvolvimento de aplicações intuitivas e sempre procurando
            proporcionar a melhor usabilidade manutenabilidade.
            <br />
            Trabalhei como desenvolvedor front end com foco na criação de
            e-commerces com uso da plataforma VTEX aliada ao ReactJS no
            desenvolvimento de componentes customizados com foco nas
            necessidades do cliente.
            <br />
            Além disso, trabalhei por um tempo como engenheiro de software na
            área de DevOps para startup dos Estados Unidos, onde pude aprender e
            colocar em prática varios conhecimento da área de operações. Durante
            esse tempo, trabalhei na criação de DAGs como uso do Apache Airflow,
            criação de pipelines eficientes para o deploy de projetos utilizando
            o GitLab CI e também na manutenção e criação de ambiente
            containerizados com o Docker, bem como na manutenção e suporte aos
            clusters utilizando Kubernetes e AWS.
          </p>
          <p>
            Hoje atuo na Leroy Merlin Brazil como desenvolvedor front end com
            foco na manutenção da estrutura já existente (projetos legado) e na
            criação de novos micro front-ends perfomáticos para o projeto. As
            principais tecnologias que utilizo no meu dia a dia são: ReactJS,
            TypeScript, Proptypes, Jest e TestingLibrary.
          </p>

          <a href="/files/CV_Maycon_Reis_Rosario.pdf" download>
            DOWNLOAD CV
          </a>
        </AboutText>
      </div>
    </Container>
  );
};
