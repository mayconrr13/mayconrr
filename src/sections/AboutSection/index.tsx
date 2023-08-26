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
            assistir um bom filme, escutar música, ler livros, jogar com amigos,
            praticar corrida e, também, aproveitar para me atualizar e desafiar
            na execução de novos projetos.
          </p>
          <p>
            No meu tempo de mercado, trabalhei como desenvolvedor front-end com
            foco na criação de e-commerces com uso da plataforma VTEX aliada ao
            ReactJS no desenvolvimento de componentes customizados com foco nas
            necessidades do cliente.
            <br />
            Além disso, trabalhei como engenheiro de software na área de DevOps
            para startup dos Estados Unidos, onde pude aprender e colocar em
            prática varios conhecimento da área de operações. Durante esse
            tempo, trabalhei na criação de DAGs como uso do Apache Airflow,
            criação de pipelines eficientes para o deploy de projetos utilizando
            o GitLab CI e também na manutenção e criação de ambiente
            containerizados com o Docker, bem como na manutenção e suporte aos
            clusters utilizando Kubernetes e AWS.
          </p>
          <p>
            Hoje atuo na Leroy Merlin Brasil como desenvolvedor front-end
            trabalhando em uma soluçcão interna de vendas utilizada por todas as
            lojas do Brasil, o Venda Assistida, que permite o colaborador
            auxiliar o cliente durante a compra. Neste projeto, trabalho
            utilizando tecnologias como ReactJS, TypeScript, Proptypes, Jest,
            TestingLibrary além do uso de jQuery em projetos legados. Dentre as
            minhas responsabilidades, sou responsável pela criaçcão de novos
            recursos onde utilizamos a arquitetura de micro front-ends, sendo as
            principais estratégias utilizadas os WebComponents e o
            compatilhamento de código e dependências com o Module Federation.
          </p>

          <a href="/files/CV_Maycon_Reis_Rosario.pdf" download>
            DOWNLOAD CV
          </a>
        </AboutText>
      </div>
    </Container>
  );
};
