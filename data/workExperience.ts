// data/workExperience.ts
import React from "react";
import {
  FaIndustry,
  FaCogs,
  FaUsers,
  FaChartLine,
  FaGraduationCap,
  FaBook,
  FaHardHat,
  FaWrench,
  FaClipboardList,
  FaShieldAlt,
  FaProjectDiagram,
  FaBalanceScale,
} from "react-icons/fa";
import type { LocalizedString } from "@/lib/locale-copy";
import { both } from "@/lib/locale-copy";

export interface Skill {
  name: LocalizedString;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  id: string;
  company: LocalizedString;
  position: LocalizedString;
  duration: LocalizedString;
  location?: LocalizedString;
  year: number;
  description: LocalizedString[];
  skills: Skill[];
  logo: string;
}

const S = (pt: string, en: string): LocalizedString => ({ pt, en });

export const workExperiences: WorkExperience[] = [
  {
    id: "vale-eng-manut-ferrov-2026",
    company: both("Vale"),
    position: S(
      "Coordenador de Engenharia de Manutenção Ferroviária",
      "Coordinator, Railway Maintenance Engineering"
    ),
    duration: S("jan. de 2026 – atual", "Jan 2026 – Present"),
    location: S("Grande São Luís · Presencial", "Greater São Luís Area · On-site"),
    year: 2026,
    logo: "https://www.vale.com/",
    description: [
      S(
        "Minha missão é garantir saúde e segurança das pessoas na busca por disponibilidade, confiabilidade e eficiência operacional dos ativos ferroviários, assegurando que estejam preparados para as demandas de manutenção da infraestrutura.",
        "My mission is to protect people’s health and safety while pursuing availability, reliability, and operational efficiency of railway assets, ensuring they are ready to meet infrastructure maintenance demands."
      ),
      S(
        "Experiência na definição e execução de estratégias de manutenção (preventiva, corretiva e preditiva), projetos de retrofit e gestão do ciclo de vida dos ativos, conectadas à análise e prevenção de falhas, monitoramento de indicadores de confiabilidade e disponibilidade, e liderança de iniciativas que elevam performance e reduzem custo de manutenção.",
        "Experience defining and executing maintenance strategies (preventive, corrective, and predictive), retrofit projects, and asset lifecycle management—linked to failure analysis and prevention, reliability and availability indicators, and initiatives that improve performance and reduce maintenance cost."
      ),
      S(
        "Assistência técnica a manutenção mecanizada, operação e fornecedores; gestão de investimentos e orçamento de custeio; interface constante com fornecedores, prestadores e equipes operacionais. Atuação em máquinas de via e áreas correlatas (equipamentos móveis e industriais). Liderança situacional, orientada a resultados e visão sistêmica; negociação, comunicação com operação e gestão de conflitos entre áreas; integração entre fóruns estratégicos e operacionais.",
        "Technical support to mechanized maintenance, operations, and suppliers; investment and opex budget management; ongoing interfaces with vendors, service providers, and operations teams. Scope includes track machines and related mobile/industrial equipment. Situational, results-oriented leadership with a systemic view; negotiation, operations communication, and cross-area conflict management; bridging strategic and operational forums."
      ),
      S(
        "Desafios atuais incluem obsolescência de componentes críticos, backlog elevado de ordens de manutenção e fortalecimento da governança dos planos de manutenção. Condução de projetos como manutenção preditiva com termografia, reprojeto de sistemas de medição embarcados, operacionalização de ultrassom SPERRY e substituição de motores SCANIA DN11 por CAT, mitigando riscos e assegurando continuidade operacional.",
        "Current challenges include critical-component obsolescence, elevated maintenance order backlog, and strengthening maintenance-plan governance. Leading initiatives such as predictive maintenance with thermography, redesign of on-board measurement systems, deployment of SPERRY ultrasound, and SCANIA DN11 to CAT engine replacements—mitigating risk and securing operational continuity."
      ),
    ],
    skills: [
      { name: both("PCM / confiabilidade"), icon: FaClipboardList },
      { name: both("Ativos ferroviários"), icon: FaIndustry },
      { name: S("Liderança situacional", "Situational leadership"), icon: FaUsers },
      { name: S("Gestão de investimentos", "Investment management"), icon: FaChartLine },
    ],
  },
  {
    id: "uninassau-docente",
    company: both("UNINASSAU"),
    position: S("Docente", "Lecturer"),
    duration: S("nov. de 2023 – atual", "Nov 2023 – Present"),
    location: S("São Luís, MA · Remoto", "São Luís, MA · Remote"),
    year: 2023,
    logo: "https://www.uninassau.edu.br/",
    description: [
      S(
        "Disciplina: Planejamento, Programação e Controle da Manutenção.",
        "Course: Maintenance planning, scheduling, and control."
      ),
    ],
    skills: [
      { name: both("PCM"), icon: FaClipboardList },
      { name: S("Ensino superior", "Higher education"), icon: FaGraduationCap },
    ],
  },
  {
    id: "faene-docente",
    company: both("FAENE – Faculdade de Negócios"),
    position: S("Docente", "Lecturer"),
    duration: S("jan. de 2021 – atual", "Jan 2021 – Present"),
    location: S("Parauapebas, PA · Presencial", "Parauapebas, PA · On-site"),
    year: 2021,
    logo: "https://www.faene.edu.br/",
    description: [
      S(
        "Administração de Operações e Serviços; Controle Estatístico da Qualidade; Engenharia do Produto; Estratégia da Manufatura; Estatística Aplicada; Ferramentas para Planejamento, Melhoria e Controle de Qualidade; Gestão da Manutenção; Gestão de Projetos; Gestão de Remuneração e Benefícios; Logística e Cadeia de Suprimentos; Planejamento Tático da Produção; Sistema de Gestão da Qualidade; Gestão de Processos e Indicadores; Manutenção Centrada na Confiabilidade.",
        "Operations and services administration; statistical quality control; product engineering; manufacturing strategy; applied statistics; tools for quality planning, improvement, and control; maintenance management; project management; compensation and benefits; logistics and supply chain; tactical production planning; quality management systems; process and performance management; reliability-centered maintenance."
      ),
    ],
    skills: [
      { name: both("Gestão da manutenção"), icon: FaCogs },
      { name: both("Qualidade"), icon: FaChartLine },
      { name: S("Métodos quantitativos", "Quantitative methods"), icon: FaBook },
    ],
  },
  {
    id: "vale-coord-mina-usina-2024",
    company: both("Vale"),
    position: S(
      "Coordenador de Controle Operacional de Mina, Usina e Hidrogeologia",
      "Coordinator, Operational Control — Mine, Plant & Hydrogeology"
    ),
    duration: S("mar. de 2024 – dez. de 2025", "Mar 2024 – Dec 2025"),
    location: S("Parauapebas, PA · Presencial", "Parauapebas, PA · On-site"),
    year: 2024,
    logo: "https://www.vale.com/",
    description: [
      S(
        "Um dos maiores desafios na Vale: assumir posição gerencial no Manganês cerca de 18 meses após a transição Ferrovia (São Luís/MA) para Carajás/PA, em linha com a meritocracia da empresa.",
        "One of my greatest challenges at Vale: taking a managerial role in Manganese about 18 months after transitioning from the Railway (São Luís/MA) to Carajás/PA—aligned with the company’s meritocratic culture."
      ),
      S(
        "Gestão de três grandes processos — Mina, Usina e Hidrogeologia — com manutenção mecânica, elétrica e operação, e equipe de cerca de 250 pessoas (Vale e terceiros). Adoção plena do VPS para valorizar pessoas, sustentar processos tecnicamente e priorizar segurança. Plano tático com donos claros e estratégia de cumprimento; papéis e responsabilidades cocriados para senso de dono.",
        "Led three major processes—Mine, Plant, and Hydrogeology—including mechanical and electrical maintenance and operations, with a team of about 250 (Vale and contractors). Full VPS adoption so people felt valued, processes were technically sound, and safety came first. Tactical plan with clear owners and delivery strategy; roles and responsibilities co-created to build ownership."
      ),
      S(
        "Líderes posicionados em Operação e Manutenção de Mina e Usina e em PCM, cada um com equipe para entregas. Participação na EXPOSIBRAM 2024 e visita a Brumadinho/MG para reflexão sobre qualidade das entregas. Em nove meses, resultados muito positivos.",
        "Leaders placed in Mine and Plant operations and maintenance and in PCM, each with a team contributing to deliveries. Participation in EXPOSIBRAM 2024 and a visit to Brumadinho/MG to reflect on delivery quality. Strong results achieved within nine months."
      ),
    ],
    skills: [
      { name: S("Gestão multidisciplinar", "Multidisciplinary management"), icon: FaUsers },
      { name: both("VPS"), icon: FaProjectDiagram },
      { name: S("PCM / operação", "PCM / operations"), icon: FaClipboardList },
    ],
  },
  {
    id: "vale-pcm-mina-usinas",
    company: both("Vale"),
    position: S("Coordenador PCM Mina Usinas", "Coordinator, PCM — Mine & Plants"),
    duration: S("out. de 2022 – mar. de 2024", "Oct 2022 – Mar 2024"),
    location: S("Parauapebas, PA", "Parauapebas, PA"),
    year: 2022,
    logo: "https://www.vale.com/",
    description: [
      S(
        "Desenvolvimento de pessoas orientado a resultado, com apoio da liderança para plano de carreira. Conexão com Manganês e Carajás para compreender o negócio de Mina, Usina e Hidrogeologia e repassar conhecimento a liderados diretos e indiretos.",
        "People development focused on results, supported by leadership for career planning. Cross-connection with Manganese and Carajás to understand the mine, plant, and hydrogeology business and pass learning to direct and indirect reports."
      ),
      S(
        "Postura leve e conectada com pares que haviam sido liderados na interinidade, pensando na gerência como um todo. Com RH, ação sobre histórico salarial: 78% de 94 pessoas sem reconhecimento há mais de 5 anos; redução para 12% (limitado por questões sistêmicas de competência e formação). Depoimento de lideradas ao sair para o Manganês sobre saúde mental no trabalho.",
        "A light, connected stance with peers who had been my reports during interim management, thinking of the whole management team. With HR, action on salary-band history: 78% of 94 people without recognition for 5+ years; reduced to 12% (limited by systemic competence and education issues). Feedback from reports when moving to Manganese highlighted mental health at work."
      ),
      S(
        "Destaque na interinidade: discurso da Gerente Geral da mina e da gerente reforçando cuidado com pessoas e ambiente de trabalho para resultado sustentável, como referência de liderança.",
        "Highlight during interim: speeches by the mine General Manager and my manager to other site leaders underscoring caring for people and the work environment for sustainable results."
      ),
    ],
    skills: [
      { name: S("Desenvolvimento de pessoas", "People development"), icon: FaUsers },
      { name: both("PCM"), icon: FaClipboardList },
      { name: S("Remuneração & RH", "Compensation & HR"), icon: FaBalanceScale },
    ],
  },
  {
    id: "vale-supervisor-ativos-rodantes",
    company: both("Vale"),
    position: S("Supervisor de Ativos Rodantes", "Supervisor, Rolling Stock Assets"),
    duration: S("ago. de 2019 – out. de 2022", "Aug 2019 – Oct 2022"),
    location: S("São Luís, MA", "São Luís, MA"),
    year: 2019,
    logo: "https://www.vale.com/",
    description: [
      S(
        "Manutenção de ativos rodantes na ferrovia (truques e trações de vagões); liderança e gestão de pessoas; conhecimento em vagões, locomotivas, máquinas de via e via permanente; análise de cenários de operação e manutenção para antecipar riscos; coordenação de atendimento a eventos fora das oficinas para minimizar perdas produtivas, inclusive com interfaces externas.",
        "Maintenance of railway rolling stock (bogies and wagon traction); people leadership and management; knowledge of wagons, locomotives, track machines, and permanent way; analysis of operations and maintenance scenarios to anticipate risks; coordination of field maintenance events to minimize productive losses, including external interfaces."
      ),
      S(
        "Planos de ação para correção de desvios, perdas e gargalos (PDCA); cumprimento da programação de curto/médio prazo do PCM; programação e controle de curto prazo; qualificação de componentes; gestão de serviços externos de recuperação. Resultados: 2º lugar em CCQ em 2020 e 1º em 2021; 1º lugar em Kaizens em 2019, 2020 e 2021.",
        "Action plans to correct deviations, losses, and bottlenecks (PDCA); adherence to PCM short/medium-term schedules; short-term programming and control; component qualification; management of external recovery services. Results: 2nd in CCQ in 2020 and 1st in 2021; 1st in Kaizens in 2019, 2020, and 2021."
      ),
    ],
    skills: [
      { name: both("Ativos rodantes"), icon: FaIndustry },
      { name: both("PDCA / Kaizen"), icon: FaProjectDiagram },
      { name: S("PCM / campo", "PCM / field"), icon: FaClipboardList },
    ],
  },
  {
    id: "vale-contratos-coord-2021",
    company: both("Vale"),
    position: S(
      "Coordenações temporárias — PCM, confiabilidade e manutenção industrial",
      "Temporary coordination roles — PCM, reliability & industrial maintenance"
    ),
    duration: S("jun. de 2021 – jan. de 2022", "Jun 2021 – Jan 2022"),
    location: S("São Luís, MA", "São Luís, MA"),
    year: 2021,
    logo: "https://www.vale.com/",
    description: [
      S(
        "Jan/2022 — Coordenação de PCM de manutenção de vagões: foco em disponibilidade física (DF), retenção, planos de manutenção, IAMO e formação de lotes. Novo padrão de planejamento, programação e logística com oficinas e QLPs; meta de 10 lotes/mês alcançada (antes máximo 9), chegando a formar lote a cada 2 dias no melhor ritmo.",
        "Jan 2022 — PCM coordination for wagon maintenance: physical availability (DF), retention, maintenance plans, IAMO, and rake formation. New planning, scheduling, and logistics pattern with shops and net staffing; 10 rakes/month target achieved (previously max 9), at best pace forming a rake every two days."
      ),
      S(
        "Set/2021 — PCM vagões: além dos resultados anteriores, 100% nos planos de manutenção no mês, retenção dentro do padrão (~500 vagões), melhora na DF, IAMO e capacitação para sustentar a referência; recorde de 10 Kaizens registrados no PCM no mês.",
        "Sep 2021 — Wagon PCM: in addition to prior outcomes, 100% maintenance plan compliance for the month, retention within standard (~500 wagons), improved DF, IAMO, and training to sustain the benchmark; record of 10 Kaizens registered in PCM in the month."
      ),
      S(
        "Ago/2021 — Confiabilidade de vagões: foco em MKBF, saúde da frota e segurança operacional na EFC; programa 5S na oficina de carga geral e expansão; aceleração do MICT de soldagem; proximidade com execução e PCM; recorde de Kaizen vs. 2020/2021; DBU para qualidade dos processos; codificação de graxas na oficina de freios.",
        "Aug 2021 — Wagon reliability: focus on MKBF, fleet health, and operational safety on the Carajás Railway; 5S in the general freight shop and rollout; acceleration of the welding MICT; closer work with execution and PCM; Kaizen records vs. 2020/2021; DBU for process quality; grease codification in the brake shop."
      ),
      S(
        "Jun/2021 — PCM manutenção industrial: disponibilidade física dos ativos industriais, AMC e AMS; plano tático do PCM e desdobramento estratégico gerencial; entrega de especificação técnica para contratação de suporte à corretiva programada; ações de engajamento e recorde de Kaizens 2020–2021.",
        "Jun 2021 — Industrial maintenance PCM: physical asset availability, AMC and AMS; tactical PCM plan and managerial strategic deployment; technical specification for contracting scheduled corrective support; engagement actions and Kaizen records for 2020–2021."
      ),
    ],
    skills: [
      { name: both("PCM"), icon: FaClipboardList },
      { name: S("Confiabilidade", "Reliability"), icon: FaShieldAlt },
      { name: both("5S / Kaizen"), icon: FaProjectDiagram },
    ],
  },
  {
    id: "vale-analista-2016",
    company: both("Vale"),
    position: S("Analista", "Analyst"),
    duration: S("mai. de 2016 – ago. de 2019", "May 2016 – Aug 2019"),
    location: S("São Luís, MA", "São Luís, MA"),
    year: 2016,
    logo: "https://www.vale.com/",
    description: [
      S(
        "Consultor e auditor de implantação de gestão e melhorias contínuas; acompanhamento e implantação de projetos; gestão e auditoria do controle de produção (FMDS, VPS, FAD, FMI); indicadores da diretoria; projetos e melhorias do processo produtivo; redução de desperdícios; viabilidade de projetos; formação em cultura lean (Kanban, Kaizen, Design Thinking, JIT, 5S, TWI, Lean, PCP, nivelamento).",
        "Consultant and auditor for management deployment and continuous improvement; project follow-up and deployment; production control management and audit (FMDS, VPS, FAD, FMI); directorate indicators; process improvement projects; waste reduction; project feasibility; lean culture training (Kanban, Kaizen, design thinking, JIT, 5S, TWI, lean, production planning and control, leveling)."
      ),
      S(
        "A partir de jan/2017 — coordenação de projeto de melhoria produtiva na via permanente; fiscalização de contratos; implantação VPS/TPS na gerência de manutenção de máquinas de via; logística, PCM e PCP para execução de manutenção.",
        "From Jan 2017 — coordination of a productive process improvement project in permanent way; contract oversight; VPS/TPS deployment in track machine maintenance management; logistics, PCM, and PPC for maintenance execution."
      ),
    ],
    skills: [
      { name: both("Lean / VPS"), icon: FaProjectDiagram },
      { name: S("Auditoria & gestão", "Audit & management"), icon: FaClipboardList },
      { name: both("Via permanente"), icon: FaIndustry },
    ],
  },
  {
    id: "pitagoras-docente",
    company: both("Faculdade Pitágoras"),
    position: S("Docente", "Lecturer"),
    duration: S("ago. de 2018 – jan. de 2021", "Aug 2018 – Jan 2021"),
    location: S("São Luís, MA", "São Luís, MA"),
    year: 2018,
    logo: "https://www.pitagoras.com.br/",
    description: [
      S(
        "Pesquisa Operacional (matemática e simulação), Planejamento Estratégico, Gestão de Projetos, Controle Estatístico da Qualidade, Planejamento Tático da Produção; orientação de TCC e artigos científicos.",
        "Operations research (mathematical and simulation), strategic planning, project management, statistical quality control, tactical production planning; supervision of capstone projects and scientific articles."
      ),
    ],
    skills: [
      { name: both("Pesquisa operacional"), icon: FaBook },
      { name: S("Orientação acadêmica", "Academic advising"), icon: FaGraduationCap },
    ],
  },
  {
    id: "favale-docente",
    company: both("FAVALE – Faculdade Vale do Aço"),
    position: S("Docente", "Lecturer"),
    duration: S("ago. de 2018 – dez. de 2018", "Aug 2018 – Dec 2018"),
    location: S("Maranhão, Brasil", "Maranhão, Brazil"),
    year: 2018,
    logo: "https://www.favale.br/",
    description: [
      S(
        "Disciplinas: Pesquisa Operacional e Sistema de Gestão da Qualidade.",
        "Courses: Operations research and quality management systems."
      ),
    ],
    skills: [
      { name: both("SGQ"), icon: FaChartLine },
      { name: both("Pesquisa operacional"), icon: FaBook },
    ],
  },
  {
    id: "ifma-pronatec",
    company: both("IFMA – Campus São Luís Maracanã"),
    position: S("Docente – PRONATEC", "Lecturer — PRONATEC"),
    duration: S("mar. de 2017 – abr. de 2017", "Mar 2017 – Apr 2017"),
    location: S("São Luís, MA", "São Luís, MA"),
    year: 2017,
    logo: "https://www.ifma.edu.br/",
    description: [
      S(
        "Disciplinas: Operações de Centro de Controle Operacional de Ferrovia; Operações de Pátios e Terminais Ferroviários — formação de profissionais do ramo ferroviário.",
        "Courses: Railway operational control center operations; yard and terminal railway operations—training professionals for the railway sector."
      ),
    ],
    skills: [
      { name: both("Ferrovia"), icon: FaHardHat },
      { name: S("Educação profissional", "Vocational education"), icon: FaGraduationCap },
    ],
  },
  {
    id: "vale-inspetor-2012",
    company: both("Vale"),
    position: S("Inspetor Orientador Operacional", "Operational Lead Inspector"),
    duration: S("ago. de 2012 – mai. de 2016", "Aug 2012 – May 2016"),
    location: S("São Luís, MA", "São Luís, MA"),
    year: 2012,
    logo: "https://www.vale.com/",
    description: [
      S(
        "Logística da manutenção de vagões e controle do atendimento a vagões retidos; melhorias com segurança operacional e satisfação da equipe. Fundador da supervisão de Centro de Controle; treinamento do grupo em diagnóstico mecânico antes de manobras (base para GDT/GDU e carga geral), reduzindo corretivas e remanobras.",
        "Wagon maintenance logistics and control of service to detained wagons; improvements with operational safety and team satisfaction. Founder of the Control Center supervision; team training in mechanical diagnosis before maneuvers (foundation for GDT/GDU and general freight), reducing corrective work and re-shunting."
      ),
      S(
        "Padronização da solda em vagões de minério com Kaizen, 5S e medição de tempos para produtividade e VPS. Gestão do complemento de borda dos vagões da EFC com contratação e fiscalização (MAXXUM), atingindo 100% dos vagões em capacidade máxima; participação na criação da supervisão de recuperação de vagões com produção puxada e VPS.",
        "Standardization of ore wagon welding with Kaizen, 5S, and time measurement for productivity and VPS. Management of ore wagon side-sill extension on the Carajás Railway with contracting and oversight (MAXXUM), reaching 100% of wagons at maximum capacity; participation creating the wagon recovery supervision with pull production and VPS."
      ),
      S(
        "Desafio de automação adequada ao processo ferroviário, ainda incipiente no setor.",
        "Challenge of automation suited to the wagon process, still emerging in the sector."
      ),
    ],
    skills: [
      { name: S("Centro de controle", "Control center"), icon: FaClipboardList },
      { name: both("Lean / VPS"), icon: FaProjectDiagram },
      { name: both("Logística ferroviária"), icon: FaIndustry },
    ],
  },
  {
    id: "vale-operacional-2008-2012",
    company: both("Vale"),
    position: S(
      "Trainee · Mecânico · Técnico mecânico",
      "Trainee · Mechanic · Mechanical technician"
    ),
    duration: S("ago. de 2008 – ago. de 2012", "Aug 2008 – Aug 2012"),
    location: S("São Luís, MA", "São Luís, MA"),
    year: 2008,
    logo: "https://www.vale.com/",
    description: [
      S(
        "Trainee (ago/2008–ago/2009): aquisição de conhecimento em manutenção de vagões; coordenação de equipes para instalação de transpônder e de dreno/acomodação de minério; supervisão de equipe de pátio por 30 dias (substituição de supervisor em férias).",
        "Trainee (Aug 2008–Aug 2009): learning wagon maintenance; leading teams for transponder installation and drain/ore accommodation work; 30-day yard team supervision (covering a supervisor on leave)."
      ),
      S(
        "Mecânico (ago/2009–jul/2011): manutenção de vagões, freios, inspeção, programação de manobras e análise de falhas; passagem ao staff da supervisão em 2009; multiplicador com treinamento de novos colaboradores em melhoria contínua.",
        "Mechanic (Aug 2009–Jul 2011): wagon maintenance, brakes, inspection, shunting programming, and failure analysis; move to supervision staff in 2009; multiplier training new hires in continuous improvement."
      ),
      S(
        "Técnico mecânico (jul/2011–ago/2012): mesma linha técnica com ênfase em VPS na linha de vagões de minério, ferramentas de qualidade e produção, multiplicador para a Vale.",
        "Mechanical technician (Jul 2011–Aug 2012): same technical line with emphasis on VPS on the ore wagon line, quality and production tools, Vale multiplier."
      ),
    ],
    skills: [
      { name: both("Manutenção de vagões"), icon: FaWrench },
      { name: both("VPS"), icon: FaProjectDiagram },
      { name: S("Treinamento em campo", "Field training"), icon: FaUsers },
    ],
  },
  {
    id: "detran-inspetor",
    company: both("Detran – MA"),
    position: S("Inspetor técnico veicular", "Vehicle technical inspector"),
    duration: S("jan. de 2008 – jun. de 2008", "Jan 2008 – Jun 2008"),
    location: S("São Luís, MA", "São Luís, MA"),
    year: 2008,
    logo: "https://www.detran.ma.gov.br/",
    description: [
      S(
        "Responsável técnico pela inspeção de veículos quanto a alterações de características em veículos de grande e pequeno porte, conforme normas e legislação.",
        "Technical lead for vehicle inspections related to characteristic changes on light and heavy vehicles per standards and regulations."
      ),
    ],
    skills: [
      { name: S("Regulamentação", "Regulations"), icon: FaShieldAlt },
      { name: S("Inspeção veicular", "Vehicle inspection"), icon: FaClipboardList },
    ],
  },
  {
    id: "alumar-trainee",
    company: both("Consórcio de Alumínio do Maranhão – Alumar"),
    position: S("Trainee", "Trainee"),
    duration: S("jan. de 2007 – dez. de 2007", "Jan 2007 – Dec 2007"),
    location: S("São Luís, MA", "São Luís, MA"),
    year: 2007,
    logo: "https://www.alumar.org.br/",
    description: [
      S(
        "Responsável por manutenções preventivas das máquinas do setor 254 da redução.",
        "Responsible for preventive maintenance of machines in reduction sector 254."
      ),
    ],
    skills: [
      { name: S("Manutenção preventiva", "Preventive maintenance"), icon: FaCogs },
      { name: both("Indústria"), icon: FaIndustry },
    ],
  },
];
