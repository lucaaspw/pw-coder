"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 78 },
  { name: "Next.js", level: 75 },
  { name: "TypeScript", level: 62 },
  { name: "React Native", level: 60 },
  { name: "Angular", level: 58 },
  { name: "Tailwind CSS", level: 85 },
  { name: "SCSS", level: 80 },
  { name: "Node.js", level: 55 },
  { name: "C#", level: 50 },
  { name: "Ruby", level: 35 },
  { name: "SQL Server", level: 50 },
  { name: "MongoDB", level: 35 },
  { name: "PostgreSQL", level: 30 },
  { name: "Prisma", level: 35 },
  { name: "Docker", level: 30 },
  { name: "Azure DevOps", level: 55 },
  { name: "AWS S3", level: 50 },
];

const experiences = [
  {
    year: "2022 - 22024",
    title: "Full Stack Developer",
    company: "SG Rentals",
    description:
      "Desenvolvimento de interfaces para sites B2C e B2B com foco em performance, acessibilidade e experiência do usuário. Criação de protótipos com Adobe XD e Figma, apoiando validações com stakeholders. Participação em integrações importantes: Sistema white label para múltiplos sites B2B. Integração com SendGrid para automação de e-mails (confirmações, notificações). Implementação de landing pages mobile first, filtros de busca avançada e autocompletar inteligente para aeroportos e locadoras. Otimização de CSS e JavaScript, reduzindo tempo de carregamento e aumentando a performance geral Implementação com C#, Razor Pages, MVC, React, Next.js, JavaScript, jQuery, HTML, CSS, Materialize, Azure DevOps, Redis, SQL Server.",
  },
  {
    year: "2022 - 2022",
    title: "Frontend Developer",
    company: "UOL Editech",
    description:
      "Desenvolvimento de plataformas de cursos e avaliações online para instituições bancárias.  Criação de interfaces responsivas (mobile first) com foco em usabilidade e acessibilidade. Consumo e manipulação de dados em XML para gerar questionários personalizados. Aplicação de animações interativas com JavaScript para experiências dinâmicas. Atuação com HTML, CSS, Sass, JavaScript, jQuery, React e Node.js.",
  },
  {
    year: "2019 - 2022",
    title: "Frontend Developer",
    company: "Foster - Agência de Marketing Digital",
    description:
      " Desenvolvimento de sites e portais para instituições de saúde (HCor, Oswaldo Cruz, A.C.Camargo). Criação de temas personalizados em WordPress, com foco em identidade visual e CMS intuitivo. Desenvolvimento de landing pages otimizadas para conversão e desempenho.Construção de plataforma de pagamentos com Angular 6 e Assistente Virtual (VA) para melhorar a navegação.Utilização de HTML, CSS, Bootstrap, JavaScript, Angular, Node.js, priorizando boas práticas e performance.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Coluna da esquerda - Sobre mim */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre mim
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sou um desenvolvedor frontend apaixonado por criar soluções
              digitais inovadoras. Com forte experiência em tecnologias modernas
              como React, Next.js, TypeScript, Angular e React Native, trabalho
              para entregar interfaces de alta qualidade e performance.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Especializado em desenvolvimento web e mobile, com conhecimento em
              backend (Node.js, C#, Ruby), bancos de dados (SQL Server, MongoDB,
              PostgreSQL) e DevOps (Docker, Azure DevOps, AWS). Foco principal
              em criar experiências de usuário excepcionais com código limpo e
              bem estruturado.
            </p>

            {/* Experiência */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Experiência
              </h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-blue-600 pl-4"
                >
                  <div className="text-sm text-blue-600 font-medium">
                    {exp.year}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {exp.title}
                  </div>
                  <div className="text-gray-600">{exp.company}</div>
                  <div className="text-gray-500 text-sm mt-1">
                    {exp.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coluna da direita - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Habilidades Técnicas
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-blue-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projetos Entregues</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-600">Clientes Satisfeitos</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
