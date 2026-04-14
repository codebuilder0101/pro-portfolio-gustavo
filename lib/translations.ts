export type Locale = "pt" | "en" | "es" | "fr";

export const localeLabels: Record<Locale, { code: string; name: string; flag: string }> = {
  pt: { code: "PT", name: "Português", flag: "🇧🇷" },
  en: { code: "EN", name: "English", flag: "🇺🇸" },
  es: { code: "ES", name: "Español", flag: "🇪🇸" },
  fr: { code: "FR", name: "Français", flag: "🇫🇷" },
};

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
      companies: "Trajetória",
      details: "Detalhes",
      focusAreas: "Áreas e competências",
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
      companies: "Career",
      details: "Details",
      focusAreas: "Focus areas",
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
  es: {
    nav: {
      about: "Sobre mí",
      work: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      name: "Gustavo Máximo",
      title:
        "Ejecutivo | Especialista en Liderazgo Situacional | Docente | Mentor | Creador del Método C.O.M.A.V.",
    },
    about: {
      heading: "Sobre mí",
      paragraphs: [
        "Trabajo en la intersección entre la gestión estratégica, el desarrollo de personas y el liderazgo, con una trayectoria consolidada en entornos organizacionales de alta complejidad.",
        "A lo largo de mi carrera ejecutiva, he contribuido a la mejora de procesos, la gestión de activos, la confiabilidad operativa y la conducción de equipos multidisciplinarios, siempre orientado a resultados sostenibles y a la evolución continua de las organizaciones y las personas.",
        "Paralelamente a mi labor corporativa, me dedico a la docencia en programas de posgrado, maestría y doctorado, contribuyendo a la formación de profesionales en liderazgo, gestión, estrategia y desarrollo humano, integrando práctica de mercado, fundamento científico y visión sistémica.",
        "Mi línea de actuación valora el liderazgo situacional, la adaptabilidad profesional y la construcción de entornos organizacionales saludables, donde los resultados consistentes se logran mediante el equilibrio entre estrategia, personas y procesos.",
        "A partir de esta experiencia, desarrollé el Método C.O.M.A.V., un enfoque estructurado orientado a fortalecer la conciencia estratégica, la capacidad de adaptación y la conducción eficaz de personas y desafíos en contextos cada vez más dinámicos.",
        "Creo que prosperar en escenarios complejos no depende solo del conocimiento técnico, sino de la habilidad de comprender el tiempo, interpretar el contexto y actuar con método, equilibrio y visión sistémica.",
        "En el mundo actual, no gana el más fuerte ni el más experimentado. Gana quien aprende a adaptarse con conciencia y transformar los desafíos en resultados.",
      ],
    },
    work: {
      heading: "Experiencia profesional",
      companies: "Trayectoria",
      details: "Detalles",
      focusAreas: "Áreas y competencias",
    },
    contact: {
      heading: "Hablemos",
      subtitle:
        "¿Tienes un proyecto en mente o quieres colaborar? Me encantaría saber de ti.",
      cardTitle: "Enviar mensaje",
      cardIntro: "Completa el formulario y te responderé lo antes posible.",
      name: "Nombre",
      email: "Correo",
      phone: "Teléfono",
      phoneOptional: "(opcional)",
      message: "Mensaje",
      placeholders: {
        name: "Tu nombre",
        email: "tu@correo.com",
        phone: "+34 600 000 000",
        message: "Cuéntame sobre tu proyecto o solo saluda…",
      },
      send: "Enviar mensaje",
      sending: "Enviando…",
      success: "¡Mensaje enviado con éxito! Te responderé pronto.",
      error: "No fue posible enviar. Inténtalo de nuevo.",
      labels: {
        email: "Correo",
        phone: "Teléfono",
      },
    },
    footer: {
      designedBy: "Desarrollado por",
    },
    language: {
      switchTo: "Cambiar idioma",
    },
    common: {
      close: "Cerrar",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      work: "Expérience",
      contact: "Contact",
    },
    hero: {
      name: "Gustavo Máximo",
      title:
        "Dirigeant | Spécialiste en leadership situationnel | Enseignant | Mentor | Créateur de la méthode C.O.M.A.V.",
    },
    about: {
      heading: "À propos de moi",
      paragraphs: [
        "Je travaille à l'intersection de la gestion stratégique, du développement des personnes et du leadership, avec un parcours solide dans des environnements organisationnels très complexes.",
        "Tout au long de ma carrière de dirigeant, j'ai contribué à l'amélioration des processus, à la gestion des actifs, à la fiabilité opérationnelle et à la conduite d'équipes pluridisciplinaires, toujours orienté vers des résultats durables et l'évolution continue des organisations et des personnes.",
        "Parallèlement à mon activité en entreprise, j'enseigne dans des programmes de troisième cycle, de master et de doctorat, contribuant à la formation de professionnels en leadership, gestion, stratégie et développement humain, en intégrant pratique de terrain, fondement scientifique et vision systémique.",
        "Ma démarche valorise le leadership situationnel, l'adaptabilité professionnelle et la construction d'environnements organisationnels sains, où des résultats constants naissent de l'équilibre entre stratégie, personnes et processus.",
        "À partir de cette expérience, j'ai développé la méthode C.O.M.A.V., une approche structurée visant à renforcer la conscience stratégique, la capacité d'adaptation et la conduite efficace des personnes et des défis dans des contextes toujours plus dynamiques.",
        "Je crois que prospérer dans des contextes complexes ne dépend pas seulement du savoir technique, mais de la capacité à comprendre le temps, lire le contexte et agir avec méthode, équilibre et vision systémique.",
        "Dans le monde actuel, ce n'est ni le plus fort ni le plus expérimenté qui gagne. C'est celui qui apprend à s'adapter avec conscience et à transformer les défis en résultats.",
      ],
    },
    work: {
      heading: "Expérience professionnelle",
      companies: "Parcours",
      details: "Détails",
      focusAreas: "Domaines et compétences",
    },
    contact: {
      heading: "Me contacter",
      subtitle:
        "Un projet en tête ou envie de collaborer ? Je serai ravi de vous lire.",
      cardTitle: "Envoyer un message",
      cardIntro: "Remplissez le formulaire ci-dessous et je reviendrai vers vous au plus vite.",
      name: "Nom",
      email: "E-mail",
      phone: "Téléphone",
      phoneOptional: "(facultatif)",
      message: "Message",
      placeholders: {
        name: "Votre nom",
        email: "vous@exemple.com",
        phone: "+33 6 00 00 00 00",
        message: "Parlez-moi de votre projet ou dites simplement bonjour…",
      },
      send: "Envoyer le message",
      sending: "Envoi…",
      success: "Message envoyé avec succès ! Je reviens vers vous bientôt.",
      error: "Envoi impossible. Veuillez réessayer.",
      labels: {
        email: "E-mail",
        phone: "Téléphone",
      },
    },
    footer: {
      designedBy: "Conçu par",
    },
    language: {
      switchTo: "Changer de langue",
    },
    common: {
      close: "Fermer",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
