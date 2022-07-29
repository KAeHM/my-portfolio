import brasilPng from "../utils/brasil.png";
import euaPng from "../utils/eua.png";
import charJS from "../utils/charJS.png";
import charNode from "../utils/charNode.png";
import charHtml from "../utils/charHtml.png";
import charReact from "../utils/charReact.png";

const languages = [
  {
    language: "Portuguese",
    icon: brasilPng,
    header: {
      text1: "Bem-vindo(a) ao meu portfólio, sou um desenvolvedor web.",
      text2:
        "Um portfólio feito por mim, para saber sobre minhas habilidades, tecnologias e projetos.",
      button1: "Sobre mim",
      button2: "Tecnologias",
      button3: "Projetos",
    },
    about: {
      text1: "Olá, meu nome é Samuel",
      text2: `Desde pequeno eu sempre gostei de tecnologia, eu tive meu primeiro
      contato com 8 anos, eu configurava plugins de um servidor de
      minecraft. Um dos meu objetivos é me tornar um programador excelente,
      que não sabe somente o necessario, um que consegue entender linguagens
      de baixo nível, gosto de entender tudo o que acontece por de baixo dos
      panos. Alguns dos meus hobbies são: Jogar um game, tocar piano e,
      claro, criar, pode ser qualquer coisa, uma historia, um programa,
      talvez a coisa que eu mais goste é de criar.`,
    },
    techs: {
      text1: "Tecnologias",
      0: {
        img: charJS,
        description: `JavaScript é a linguagem que mais domino atualmente, 
        considero ter uma boa lógica para resolver problemas mais complexos. Como eu estou lidando mais com o front,
        não senti em nenhum momento em que minha lógica foi desafiada. Eu estudo essa linguagem à aproximadamente 8 meses.
        Desenvolvi a lógica de programação rapidamente por causa da minha experiência com Python`,
      },
      1: {
        img: charHtml,
        description: `Como estudante de JavaScript, não poderia ficar sem elas, e com essas, 
        fiquei ciente do que um boa página deve ter. Pratiquei bastante as semanticas de HTML, 
        para utilizar as tags de acordo com a acessibilidade do usuário.No CSS treinei bastante responsividade, 
        todos os projetos que eu fiz depois de aprender o conceito mobile First, foram feitos para celular e 
        desktop. Também tenho um pouco de conhecimento em UI e UX, mas somente o básico.`,
      },
      2: {
        img: charReact,
        description: `React é meu amorzinho atualmente, gosto muito de codar. Já fiz alguns projetos em DOM,
        mas depois que vim para o React, não quero mais sair. Aprendi diversas libs durante minha jornada, as principais foram:
        Redux, Context, Framer-Motion, Chacka UI, Material UI, Styled-Components, Axios, e diversas outras 
        que demorariam um tempo para citar.`,
      },
      3: {
        img: charNode,
        description: `Agora que eu me formei no front, estou indo para o Full-Stack. Comecei no node a uma semana atrás, a caminho
        do Full-Stack, estou gostando bastante e já construi uma API de um CRUD.`,
      },
    },
  },
  {
    language: "English",
    icon: euaPng,
    header: {
      text1: "Welcome to my portfolio, I am a web developer.",
      text2:
        "A portfolio made by me, here you will find more about my abilities, tecnologies and projects.",
      button1: "About me",
      button2: "Technology",
      button3: "Projects",
    },
    about: {
      text1: "Hello, my name is Samuel",
      text2: `Since I was a kid, I've always liked technology. 
      I had my first contact with it when I was 8 years old, configuring plugins 
      for a minecraft server. One of my goals is to become an excellent programmer, 
      who knows much more besides the necessary, who understands low-level languages. I like to know everything 
      that happens behind the scenes. Some of my hobbies are playing videogames, writing, playing the piano and, 
      of course, creating new stuff. It can be anything from a simple story to a complex program. I would say this 
      is my favorite thing to do: to create.`,
    },
    techs: {
      text1: "Tecnologias",
      0: {
        img: charJS,
        description: `JavaScript é a linguagem que mais domino atualmente, 
        considero ter uma boa lógica para resolver problemas mais complexos. Como eu estou lidando mais com o front,
        não senti em nenhum momento em que minha lógica foi desafiada. Eu estudo essa linguagem à aproximadamente 8 meses.
        Desenvolvi a lógica de programação rapidamente por causa da minha experiência com Python`,
      },
      1: {
        img: charHtml,
        description: `Como estudante de JavaScript, não poderia ficar sem elas, e com essas, 
        fiquei ciente do que um boa página deve ter. Pratiquei bastante as semanticas de HTML, 
        para utilizar as tags de acordo com a acessibilidade do usuário.No CSS treinei bastante responsividade, 
        todos os projetos que eu fiz depois de aprender o conceito mobile First, foram feitos para celular e 
        desktop. Também tenho um pouco de conhecimento em UI e UX, mas somente o básico.`,
      },
      2: {
        img: charReact,
        description: `React é meu amorzinho atualmente, gosto muito de codar. Já fiz alguns projetos em DOM,
        mas depois que vim para o React, não quero mais sair. Aprendi diversas libs durante minha jornada, as principais foram:
        Redux, Context, Framer-Motion, Chacka UI, Material UI, Styled-Components, Axios, e diversas outras 
        que demorariam um tempo para citar.`,
      },
      3: {
        img: charNode,
        description: `Agora que eu me formei no front, estou indo para o Full-Stack. Comecei no node a uma semana atrás, a caminho
        do Full-Stack, estou gostando bastante e já construi uma API de um CRUD.`,
      },
    },
  },
];

export default languages;
