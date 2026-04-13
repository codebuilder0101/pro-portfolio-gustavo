// data/workExperience.ts
import { FaPython, FaAws, FaReact, FaServer } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiDocker, SiVuedotjs, SiDjango, SiMongodb } from "react-icons/si";
import React from "react";
import type { LocalizedString } from "@/lib/locale-copy";
import { both } from "@/lib/locale-copy";

export interface Skill {
  name: LocalizedString;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: LocalizedString;
  position: LocalizedString;
  duration: LocalizedString;
  location?: LocalizedString;
  year: number;
  description: LocalizedString[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: both("HatchWorks AI"),
    position: {
      pt: "Engenheiro full stack sênior de IA",
      en: "Senior AI Fullstack Engineer",
    },
    duration: {
      pt: "nov. de 2023 – atual",
      en: "Nov 2023 – Present",
    },
    location: {
      pt: "Atlanta, GA (EUA)",
      en: "Atlanta, GA",
    },
    year: 2023,
    description: [
      {
        pt: "Arquitetura e desenvolvimento de plataformas SaaS com IA usando TypeScript, React, Node.js e Python, com serviços backend escaláveis e alto desempenho para mais de 10 mil usuários simultâneos.",
        en: "Architected and developed AI-powered SaaS platforms using TypeScript, React, Node.js, and Python, enabling 10,000+ concurrent users with scalable, high-performance backend services.",
      },
      {
        pt: "Concepção e implantação de pipelines de IA/ML para análise preditiva, sistemas de recomendação e automação, elevando engajamento e eficiência operacional.",
        en: "Designed and deployed AI/ML pipelines for predictive analytics, recommendation systems, and automation workflows, improving user engagement and operational efficiency.",
      },
      {
        pt: "APIs REST que integram modelos de IA/ML a fluxos de produção, com predições de baixa latência (menos de 200 ms) e alta confiabilidade.",
        en: "Built RESTful APIs that integrate AI/ML models into production workflows, ensuring low-latency predictions (<200ms) and high reliability.",
      },
      {
        pt: "Uso intensivo de PostgreSQL e bancos NoSQL para otimizar ingestão de dados, engenharia de features e pipelines de treino, melhorando o desempenho de acesso aos dados em cerca de 25–30%.",
        en: "Worked extensively with PostgreSQL and NoSQL databases to optimize data ingestion, feature engineering, and model training pipelines, improving AI data access performance by 25–30%.",
      },
      {
        pt: "Recursos de IA generativa (texto, código e conteúdo) e módulos de computação cognitiva para automação avançada e apoio à decisão.",
        en: "Implemented generative AI features (text, code, and content generation) and cognitive computing modules, enabling advanced automation and decision-support capabilities.",
      },
      {
        pt: "Implantação de serviços de IA conteinerizados na AWS com CI/CD, ambientes reproduzíveis, versionamento de modelos e atualizações estáveis em produção.",
        en: "Deployed containerized AI services on AWS with CI/CD pipelines, ensuring reproducible environments, model versioning, and smooth production updates.",
      },
    ],
    skills: [
      { name: both("React"), icon: FaReact },
      { name: both("Vue.js"), icon: SiVuedotjs },
      { name: both("TypeScript"), icon: SiTypescript },
      { name: both("Node.js"), icon: FaServer },
      { name: both("Python"), icon: FaPython },
      { name: both("PostgreSQL"), icon: SiPostgresql },
      { name: both("MongoDB"), icon: SiMongodb },
      { name: both("AWS"), icon: FaAws },
      { name: both("Docker"), icon: SiDocker },
    ],
    logo: "https://hatchworks.com/",
  },
  {
    company: both("AppsChopper"),
    position: {
      pt: "Engenheiro full stack de IA",
      en: "AI Fullstack Engineer",
    },
    duration: {
      pt: "abr. de 2021 – out. de 2023",
      en: "Apr 2021 – Oct 2023",
    },
    location: {
      pt: "Nova York, NY (EUA)",
      en: "New York, NY",
    },
    year: 2021,
    description: [
      {
        pt: "Desenvolvimento de aplicações web e mobile com IA, integrando chatbots e módulos de computação cognitiva para automatizar fluxos e aumentar o engajamento.",
        en: "Developed AI-enhanced web and mobile applications, integrating chatbots and cognitive computing modules to automate workflows and improve user engagement.",
      },
      {
        pt: "Arquitetura de soluções full stack modulares (MVVM, repositórios), maior reutilização de código e redução de prazos de entrega em cerca de 20%.",
        en: "Architected modular and maintainable fullstack solutions using MVVM and repository patterns, increasing code reuse and reducing feature delivery timelines by 20%.",
      },
      {
        pt: "Integração de interfaces a mais de 15 APIs backend, com tratamento robusto de erros, transferência eficiente de dados e respostas em tempo real orientadas por IA.",
        en: "Engineered seamless connections between frontend interfaces and 15+ backend APIs, ensuring robust error handling, efficient data transfer, and real-time AI-driven responses.",
      },
      {
        pt: "Camadas de dados escaláveis com SQL e NoSQL, cache e estratégias offline-first, reduzindo carga de rede em cerca de 30% com serviços de IA responsivos.",
        en: "Built scalable data layers with SQL and NoSQL, implementing caching and offline-first strategies to reduce network load by 30% while maintaining responsive AI services.",
      },
      {
        pt: "Diagnóstico e otimização de gargalos em fluxos de IA, vazamentos de memória e concorrência, reduzindo falhas em até 40%.",
        en: "Diagnosed and optimized performance bottlenecks in AI workflows, resolving memory leaks and concurrency issues to reduce crash rates by up to 40%.",
      },
      {
        pt: "Observabilidade e monitoramento de componentes de IA: logs, versionamento e métricas em tempo de execução, melhorando confiabilidade e manutenção.",
        en: "Introduced observability and monitoring for AI components, including logging, versioning, and runtime metrics, improving system reliability and maintainability.",
      },
    ],
    skills: [
      { name: both("React"), icon: FaReact },
      { name: both("Vue.js"), icon: SiVuedotjs },
      { name: both("TypeScript"), icon: SiTypescript },
      { name: both("Node.js"), icon: FaServer },
      { name: both("Django"), icon: SiDjango },
      { name: both("Python"), icon: FaPython },
      { name: both("PostgreSQL"), icon: SiPostgresql },
      { name: both("MongoDB"), icon: SiMongodb },
    ],
    logo: "https://www.appschopper.com/",
  },
  {
    company: both("Evincedev"),
    position: {
      pt: "Engenheiro full stack",
      en: "Fullstack Engineer",
    },
    duration: {
      pt: "abr. de 2019 – mar. de 2021",
      en: "Apr 2019 – Mar 2021",
    },
    location: {
      pt: "Nova York, NY (EUA)",
      en: "New York, NY",
    },
    year: 2019,
    description: [
      {
        pt: "Desenvolvimento e manutenção de aplicações web em produção para mais de 8 mil usuários ativos mensais com React e Next.js (SSR e SSG), reduzindo o tempo de carregamento inicial em cerca de 35%.",
        en: "Developed and maintained production web applications serving 8,000+ monthly active users using React and Next.js, implementing server-side rendering and static generation to improve initial load times by 35%.",
      },
      {
        pt: "Serviços backend escaláveis e APIs REST com Node.js e Python, alto volume de requisições e tempo médio de resposta cerca de 30% menor.",
        en: "Built scalable backend services and REST APIs with Node.js and Python, handling high-volume requests while reducing average API response time by 30%.",
      },
      {
        pt: "Integração eficiente entre front e back-end, eliminando processamento redundante e melhorando o desempenho ponta a ponta em cerca de 25%.",
        en: "Integrated frontend and backend systems efficiently, eliminating redundant data processing and improving end-to-end application performance by 25%.",
      },
      {
        pt: "Refatoração e design modular para reduzir débito técnico e acelerar entregas em cerca de 20%.",
        en: "Optimized application architecture and code quality through refactoring and modular design, reducing technical debt and accelerating feature delivery by 20%.",
      },
      {
        pt: "Colaboração com equipes multidisciplinares para soluções white-label, cumprindo prazos e mantendo alta confiabilidade em várias plataformas web.",
        en: "Collaborated with cross-functional teams to deliver client-branded solutions, consistently meeting project deadlines and maintaining high reliability across multiple web platforms.",
      },
      {
        pt: "Melhorias em tratamento de erros e logging em produção, reduzindo incidentes e tickets de suporte em cerca de 40%.",
        en: "Supported deployment and production stability by improving error handling and logging, reducing runtime issues and support tickets by 40%.",
      },
    ],
    skills: [
      { name: both("React"), icon: FaReact },
      { name: both("Vue.js"), icon: SiVuedotjs },
      { name: both("TypeScript"), icon: SiTypescript },
      { name: both("Node.js"), icon: FaServer },
      { name: both("Django"), icon: SiDjango },
      { name: both("Python"), icon: FaPython },
      { name: both("PostgreSQL"), icon: SiPostgresql },
      { name: both("MongoDB"), icon: SiMongodb },
    ],
    logo: "https://evincedev.com/",
  },
  {
    company: both("Anthology"),
    position: {
      pt: "Desenvolvedor full stack",
      en: "Fullstack Developer",
    },
    duration: {
      pt: "set. de 2016 – mar. de 2019",
      en: "Sep 2016 – Mar 2019",
    },
    location: {
      pt: "Nova York, NY (EUA)",
      en: "New York, NY",
    },
    year: 2016,
    description: [
      {
        pt: "Soluções web ponta a ponta para clientes de fintech, IA e enterprise com React e Angular no front-end e Node.js e Python no backend.",
        en: "Engineered end-to-end web solutions at Innovify, creating scalable applications for fintech, AI, and enterprise clients using React and Angular on the front-end and Node.js and Python on the backend.",
      },
      {
        pt: "Fluxos de negócio complexos e integração de serviços de terceiros via APIs REST, melhorando eficiência e reduzindo tempo de processamento em cerca de 30%.",
        en: "Implemented complex business workflows and integrated multiple third-party services through RESTful APIs, improving system efficiency and reducing processing time by 30%.",
      },
      {
        pt: "Dashboards dinâmicos e interfaces interativas, design responsivo e experiência consistente em web e mobile.",
        en: "Developed dynamic, data-driven dashboards and interactive UI components, ensuring responsive design and seamless user experience across web and mobile platforms.",
      },
      {
        pt: "Otimização de estruturas de banco SQL e NoSQL, consultas mais rápidas e dados em tempo real para aplicações de alto volume.",
        en: "Optimized database structures in SQL and NoSQL systems, improving query performance and enabling real-time data retrieval for high-volume applications.",
      },
      {
        pt: "Ciclos ágeis, revisões de código e implantação via CI/CD na AWS e Azure.",
        en: "Participated in Agile development cycles, collaborating with cross-functional teams, conducting code reviews, and deploying projects through CI/CD pipelines on AWS and Azure.",
      },
      {
        pt: "Mais de 10 aplicações em produção, incluindo ferramentas de análise com IA e soluções fintech, com impacto mensurável nas operações dos clientes.",
        en: "Delivered 10+ production-ready applications, including AI-powered analytics tools and fintech solutions, contributing to measurable improvements in client operations and user engagement.",
      },
    ],
    skills: [
      { name: both("React"), icon: FaReact },
      { name: both("Vue.js"), icon: SiVuedotjs },
      { name: both("TypeScript"), icon: SiTypescript },
      { name: both("Node.js"), icon: FaServer },
      { name: both("Django"), icon: SiDjango },
      { name: both("Python"), icon: FaPython },
      { name: both("PostgreSQL"), icon: SiPostgresql },
      { name: both("MongoDB"), icon: SiMongodb },
    ],
    logo: "https://www.anthology.com/",
  },
];
