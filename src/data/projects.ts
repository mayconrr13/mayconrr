export const projects = [
  {
    id: 0,
    name: 'Web Portifólio',
    imagePath: '/projects/web-portifolio.jpg',
    description:
      'Site criado para apresentação pessoal e de projetos desenvolvidos.',
    details:
      'O WEB PORTIFÓLIO compreende o meu portifólio digital, onde falo um pouco sobre mim, minha trajetória, tecnologias utilizadas no dia a dia e projetos pessoais desenvolvidos. Para isso, o projeto foi criado do completo zero através da definição da interface com o Figma e construído com a premissa de Mobile First. O portifólio foi desenvolvido com o NextJS e Styled Components em conjunto com Typescript.',
    techs: [
      { id: 0, name: 'NextJS' },
      { id: 1, name: 'Styled Components' },
      { id: 2, name: 'Typescript' },
      { id: 3, name: 'Framer Motion' },
      { id: 4, name: 'Figma' },
    ],
    repository: 'https://github.com/mayconrr13/web-portifolio',
    liveLink: 'https://mayconrr.vercel.app/',
  },
  {
    id: 1,
    name: 'Corona Tracker',
    imagePath: '/projects/corona-tracker.jpg',
    description:
      'Aplicação que permite o usuário consultar o situação da pandemia do COVID-19 no mundo e em países específicos.',
    details:
      'Corona Tracker é uma aplicação que possibilita o usuário verificar a situação da pandemia do Corona Vírus no mundo. Todos os dados utilizados são dinâmicos e obtidos de uma api externa. A aplicação é divida em três partes principais que permite o usuário verificar os dados gerais de um país em pesquisado e do mundo, além de apresentar um ranking dos países com a maior quantidade de mortes até o momento.',
    techs: [
      { id: 0, name: 'NextJS' },
      { id: 1, name: 'SSG' },
      { id: 2, name: 'Styled Components' },
      { id: 3, name: 'Typescript' },
      { id: 4, name: 'Appex Charts' },
      { id: 5, name: 'Figma' },
    ],
    repository: 'https://github.com/mayconrr13/corona-tracker',
    liveLink: '',
  },
  {
    id: 2,
    name: 'ig.news',
    imagePath: '/projects/ig-news.jpg',
    description: 'Blog de tecnologia focado em ReactJS com conteúdo assinado',
    details:
      'Ig.news é o desafio final desenvolvido para o bootcamp Ignite da Rocketseat da trilha de ReactJS. Esse desafio contempla o uso de diversas tecnologias, dentre elas o uso da renderização pelo lado do servidor para o carregamento das postagens que são obtidas da api do Prismic CMS. Além disso, a aplicação conta com login social, serviço de assinatura com o Stripe e o uso do FaunaDB por meio de serverless functions para a persistência dos dados dos usuários. Por fim, foram desenvolvidos testes unitários para a aplicação com o uso do JEST em conjunto com React Testing Library.',
    techs: [
      { id: 0, name: 'NextJS' },
      { id: 1, name: 'SSR' },
      { id: 2, name: 'Sass' },
      { id: 3, name: 'Typescript' },
      { id: 4, name: 'Prismic CMS' },
      { id: 5, name: 'FaunaDB' },
      { id: 6, name: 'Stripe' },
      { id: 7, name: 'Next-Auth' },
      { id: 8, name: 'JEST' },
      { id: 10, name: 'React Testing Library' },
    ],
    repository: 'https://github.com/mayconrr13/ignews2.0',
    liveLink: 'https://final-ig-news.vercel.app/',
  },
  {
    id: 3,
    name: 'To Do Next',
    imagePath: '/projects/todonext.png',
    description: 'Aplicação de lista de tarefas',
    details:
      'To Do Next é uma versão ampliada do primeiro desafio do bootcamp Ignite. Sendo assim, a nova aplicação permite que o usuário crie, edite e remova tarefas quando desejar. Além disso, foi adicionado um filtro que permite exibir somente as tarefas ativas ou já finalizadas além da possibilidade da remoção completa de todas tarefas finalizadas. Por fim, foi adicionada uma barra de progresso que permite o usuário verificar a proporção de tarefas a serem finalizadas. Todo esse processo fica salva nos Cookies do navegador, permitindo que os dados dos usuário fiquem armazenados sempre que o mesmo retornar para a página.',
    techs: [
      { id: 0, name: 'NextJS' },
      { id: 1, name: 'Styled Components' },
      { id: 2, name: 'Typescript' },
      { id: 3, name: 'Cookies' },
    ],
    repository: 'https://github.com/mayconrr13/todonext',
    liveLink: '',
  },
  {
    id: 4,
    name: 'Proffy 2.0',
    imagePath: '/projects/proffy.jpg',
    description:
      'Aplicação que permite conectar alunos a professores cadastrados na plataforma.',
    details:
      'Está aplicação é a versão 2.0 do que foi desenvolvido na segunda edição da Next Level Week em agosto de 2020. Nesta nova versão foi adicionada a funcionalidade de cadastro e login para os professores que desejam disponilisar seus horários. A aplicação foi desenvolvida novamente do zero com foco principal no Front-end. A parte do back-end foi criada com o Firebase com o uso dos serviços de Autenticação, Banco de dados e Storage para persistência dos dados de todos os professores cadastrados. O Próximo passo consiste a criação de testes unitários para a aplicação.',
    techs: [
      { id: 0, name: 'NextJS' },
      { id: 1, name: 'Styled Components' },
      { id: 2, name: 'Typescript' },
      { id: 3, name: 'React Hook Form' },
      { id: 4, name: 'Firebase' },
      // { id: 5, name: 'JEST' },
      // { id: 6, name: 'React Testing Library' },
    ],
    repository: 'https://github.com/mayconrr13/proffy-2.0',
    liveLink: '',
  },
];
