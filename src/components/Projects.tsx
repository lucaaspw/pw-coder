"use client";
import { motion } from "framer-motion";
import OptimizedImage from "./OptimizedImage";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "Plataforma completa de e-commerce com pagamentos, gestão de estoque e dashboard administrativo",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description:
      "Aplicativo bancário com autenticação biométrica, transferências e investimentos",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "MongoDB", "Azure DevOps"],
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    description:
      "Dashboard completo para SaaS com analytics, gestão de usuários e relatórios",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "C#", "SQL Server", "Azure App Services"],
    link: "#",
  },
  {
    title: "Restaurant Management",
    category: "Full Stack",
    description:
      "Sistema completo para restaurantes com pedidos, delivery e gestão de funcionários",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    technologies: ["Angular", "C#", "SQL Server", "Docker"],
    link: "#",
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    description:
      "Plataforma imobiliária com busca avançada, tours virtuais e gestão de propriedades",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile Development",
    description:
      "App de fitness com tracking de exercícios, nutrição e progresso personalizado",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS S3"],
    link: "#",
  },
  {
    title: "Learning Management System",
    category: "Web Application",
    description:
      "Sistema de gestão de aprendizado com cursos, avaliações e certificados",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    technologies: ["Angular", "Ruby", "PostgreSQL", "Docker"],
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    category: "Analytics",
    description:
      "Dashboard para gestão de redes sociais com agendamento e analytics",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Azure DevOps"],
    link: "#",
  },
  {
    title: "Inventory Management",
    category: "Enterprise",
    description:
      "Sistema de gestão de estoque com códigos de barras e relatórios avançados",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    technologies: ["Angular", "C#", "SQL Server", "Azure App Services"],
    link: "#",
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
            Confira alguns dos projetos que desenvolvi para clientes e empresas
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
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
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

                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                  Ver projeto →
                </button>
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
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Ver todos os projetos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
