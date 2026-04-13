export type Locale = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      work: "Experiência",
      contact: "Contato",
    },
    hero: {
      name: "Gustavo Máximo",
      title:
        "Executivo | Especialista em Liderança Situacional | Docente | Mentor | Criador do Método C.O.M.A.V.",
    },
    about: {
      heading: "Sobre mim",
      paragraphs: [
        "Atuo na interseção entre gestão estratégica, desenvolvimento de pessoas e liderança, com trajetória consolidada em ambientes organizacionais de alta complexidade.",
        "Ao longo da minha carreira executiva, contribuí para a melhoria de processos, gestão de ativos, confiabilidade operacional e condução de equipes multidisciplinares, sempre orientado à geração de resultados sustentáveis e à evolução contínua das organizações e das pessoas.",
        "Paralelamente à atuação corporativa, dedico-me à docência em programas de pós-graduação, mestrado e doutorado, contribuindo para a formação de profissionais nas áreas de liderança, gestão, estratégia e desenvolvimento humano, integrando prática de mercado, fundamentação científica e visão sistêmica.",
        "Minha linha de atuação valoriza a liderança situacional, a adaptabilidade profissional e a construção de ambientes organizacionais saudáveis, nos quais resultados consistentes são alcançados pelo equilíbrio entre estratégia, pessoas e processos.",
        "A partir dessa experiência, desenvolvi o Método C.O.M.A.V., uma abordagem estruturada voltada ao fortalecimento da consciência estratégica, da capacidade de adaptação e da condução eficaz de pessoas e desafios em contextos cada vez mais dinâmicos.",
        "Acredito que prosperar em cenários complexos não depende apenas de conhecimento técnico, mas da habilidade de compreender o tempo, interpretar o contexto e agir com método, equilíbrio e visão sistêmica.",
        "No mundo atual, não vence o mais forte nem o mais experiente. Vence quem aprende a se adaptar com consciência e transformar desafios em resultados.",
      ],
    },
    work: {
      heading: "Experiência profissional",
      companies: "Empresas",
      details: "Detalhes",
      technologies: "Tecnologias",
    },
    contact: {
      heading: "Fale comigo",
      subtitle:
        "Tem um projeto em mente ou quer colaborar? Ficarei feliz em ouvir você.",
      cardTitle: "Enviar mensagem",
      cardIntro: "Preencha o formulário abaixo e retorno o mais breve possível.",
      name: "Nome",
      email: "E-mail",
      phone: "Telefone",
      phoneOptional: "(opcional)",
      message: "Mensagem",
      placeholders: {
        name: "Seu nome",
        email: "seu@email.com",
        phone: "+55 (98) 99999-9999",
        message: "Conte sobre seu projeto ou apenas diga olá…",
      },
      send: "Enviar mensagem",
      sending: "Enviando…",
      success: "Mensagem enviada com sucesso! Retornarei em breve.",
      error: "Não foi possível enviar. Tente novamente.",
      labels: {
        email: "E-mail",
        phone: "Telefone",
      },
    },
    footer: {
      designedBy: "Desenvolvido por",
    },
    language: {
      switchTo: "Alternar idioma",
    },
    common: {
      close: "Fechar",
    },
  },
  en: {
    nav: {
      about: "About",
      work: "Work",
      contact: "Contact",
    },
    hero: {
      name: "Gustavo Maximo",
      title:
        "Executive | Situational Leadership Specialist | Educator | Mentor | Creator of the C.O.M.A.V. Method",
    },
    about: {
      heading: "About me",
      paragraphs: [
        "I work at the intersection of strategic management, people development, and leadership, with a solid track record in highly complex organizational environments.",
        "Throughout my executive career, I have contributed to process improvement, asset management, operational reliability, and leading multidisciplinary teams, always focused on sustainable results and the continuous evolution of organizations and people.",
        "Alongside my corporate work, I teach in graduate, master's, and doctoral programs, helping train professionals in leadership, management, strategy, and human development—integrating market practice, scientific grounding, and a systemic view.",
        "My work emphasizes situational leadership, professional adaptability, and building healthy organizations where consistent results come from balancing strategy, people, and processes.",
        "From this experience, I developed the C.O.M.A.V. Method, a structured approach to strengthening strategic awareness, adaptability, and effectively leading people and challenges in increasingly dynamic contexts.",
        "I believe thriving in complex settings depends not only on technical skill, but on understanding timing, reading context, and acting with method, balance, and a systemic perspective.",
        "In today's world, winning is not for the strongest or the most experienced. It is for those who learn to adapt with awareness and turn challenges into results.",
      ],
    },
    work: {
      heading: "Work experience",
      companies: "Companies",
      details: "Details",
      technologies: "Technologies",
    },
    contact: {
      heading: "Get in touch",
      subtitle: "Have a project in mind or want to collaborate? I would love to hear from you.",
      cardTitle: "Send a message",
      cardIntro: "Fill out the form below and I will get back to you as soon as possible.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      phoneOptional: "(optional)",
      message: "Message",
      placeholders: {
        name: "Your name",
        email: "you@example.com",
        phone: "+1 (555) 123-4567",
        message: "Tell me about your project or just say hello…",
      },
      send: "Send message",
      sending: "Sending…",
      success: "Message sent successfully! I will get back to you soon.",
      error: "Failed to send message. Please try again.",
      labels: {
        email: "Email",
        phone: "Phone",
      },
    },
    footer: {
      designedBy: "Designed & built by",
    },
    language: {
      switchTo: "Switch language",
    },
    common: {
      close: "Close",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
