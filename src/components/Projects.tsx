"use client";
import { motion } from "framer-motion";
import OptimizedImage from "./OptimizedImage";

const projects = [
  {
    title: "Calculadora React",
    category: "Web App",
    description:
      "Calculadora moderna e responsiva construída com React e TypeScript. Interface elegante com tema escuro/claro e operações matemáticas avançadas.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "/demos/calculator",
    demo: true,
  },
  {
    title: "Todo List Interativa",
    category: "Web App",
    description:
      "Aplicação de tarefas com drag & drop, categorização, filtros e persistência local. Interface intuitiva com animações suaves.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Framer Motion", "LocalStorage"],
    link: "/demos/todo",
    demo: true,
  },
  {
    title: "Weather App",
    category: "Web App",
    description:
      "Aplicativo de previsão do tempo com geolocalização, busca por cidade e dados em tempo real. Interface responsiva e intuitiva.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Weather API", "Geolocation"],
    link: "/demos/weather",
    demo: true,
  },
  {
    title: "Portfolio Interativo",
    category: "Web Development",
    description:
      "Este portfolio foi construído com Next.js 15, TypeScript e Tailwind CSS. Inclui blog integrado, SEO otimizado e performance de alta qualidade.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    link: "/",
    demo: false,
  },
  {
    title: "Blog System",
    category: "Full Stack",
    description:
      "Sistema completo de blog com categorias, tags, busca e administração. Backend com Prisma e PostgreSQL, frontend otimizado.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
    link: "/blog",
    demo: false,
  },
  {
    title: "Component Library",
    category: "UI/UX",
    description:
      "Biblioteca de componentes reutilizáveis com Storybook. Componentes acessíveis, responsivos e customizáveis para projetos React.",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Storybook", "TypeScript", "Tailwind CSS"],
    link: "/demos/components",
    demo: true,
  },
  {
    title: "Landing Pages",
    category: "Web Design",
    description:
      "Coleção de landing pages modernas e animadas para diferentes tipos de negócios. Design responsivo com foco em conversão.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    link: "/demos/landing-pages",
    demo: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi, incluindo demos
            funcionais e aplicações completas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={index < 3}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  {project.demo && (
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Demo
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  {project.demo ? "Ver demo →" : "Ver projeto →"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/lucaaspw"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Ver todos os projetos no GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
