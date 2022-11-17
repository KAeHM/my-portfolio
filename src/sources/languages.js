import brasilPng from "../utils/brasil.png";
import euaPng from "../utils/eua.png";
import char2 from "../utils/char2.png";
import charNode from "../utils/charNode.png";
import charGif from "../utils/char.gif";
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
      tab1: "Front End",
      tab2: "Back End",
      tab3: "Auxiliares",
      tab4: "Prática",
      0: {
        img: charReact,
        description: `O front-end é minha parte criativa, é aqui onde eu deixo minha mente trabalhar em lados artisticos
        e deixar minha criatividade trabalhar, eu gosto bastante de mostrar minhas ideias e deixar tudo organizado e agradável. Eu considero ter
        conhecimento solido em desenvolvimento front-end e minha ferramenta principal de desenvolvimento é o React(TypeScript).`,
      },
      1: {
        img: charNode,
        description: `Se o front-end é minha parte criativa, o back é minha parte lógica, alguns até me chamam de robo. Para mim não há satisfação
        melhor do que resolver um problema logicamente e perceber que eu fui capaz. Eu acredito ter uma boa logica para resolver a maioria dos problemas 
        além de conhecer ferramentas para isso, minha ferramenta principal de desenvolvimento é o NodeJS(TypeScript) e Django(Python).`,
      },
      2: {
        img: char2,
        description: `Para o trabalho em equipe e para desenvolvimento de projetos eu adquiri conhecimentos com algumas ferramentas tanto criativas como
        organizacionais e produtivas. Para a parte criativa eu tenho experiencia com photoshop, figma, também tenho experiencias com criação de diagrama 
        de relacionamento. Para a parte em equipe, tenho bastante experiencia com git, trello e notion.`,
      },
      3: {
        img: charGif,
        description: `Minha maior experiência é na Kenzie Academy, é um ambiente de ensino que prepara o profissional para o mercado de trabalho, lá eu aprendi
        a trabalhar em equipe com algumas metodologias, como o SCRUM, onde fui Tech Leader duas vezes, Scrum Master uma vez, e Product Owner uma vez. Também, aprendi
        a rotina de um profissional, como prazos para entrega, check-in e check-out. Tenho experiência como Mentor dentro da Kenzie, onde eu fazia reuniões diárias
        com os devs, corrigia e revisava códigos e entregas.`,
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
      text1: "Technologies",
      tab1: "Front End",
      tab2: "Back End",
      tab3: "Tools",
      tab4: "Pratice",
      0: {
        img: charReact,
        description: `Front end is my creative part, this is where I let my mind work on artistic sides
        and let my creativity work, I really like to show my ideas and leave everything organized and pleasant. I consider having
        solid knowledge in front-end development and my main development tool is React(TypeScript).`,
      },
      1: {
        img: charNode,
        description: `If the front end is my creative part, the back end is my logical part, some even call me a robot. For me there is no satisfaction
        better than solving a problem logically and realizing that I was able to do it. I believe I have good logic to solve most problems
        in addition to knowing tools for this, my main development tool is NodeJS(TypeScript) and Django(Python).`,
      },
      2: {
        img: char2,
        description: `For teamwork and project development I acquired knowledge with some tools both creative and
        organizational and productive. For the creative part I have experience with photoshop, figma, I also have experiences with diagram creation
        of relationship. For the team part, I have a lot of experience with git, trello and notion.`,
      },
      3: {
        img: charGif,
        description: `My greatest experience is at Kenzie Academy, it is a teaching environment that prepares professionals for the job market, there I learned
        to work as a team with some methodologies, such as SCRUM, where I was Tech Leader twice, Scrum Master once, and Product Owner once. Also, I learned
        the routine of a professional, such as deadlines for delivery, check-in and check-out. I have experience as a Mentor within Kenzie, where I held daily meetings
        with the devs, correcting and reviewing code and deliveries.`,
      },
    },
  },
];

export default languages;
