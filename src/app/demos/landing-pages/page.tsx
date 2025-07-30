"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
const landingPages = [
  {
    title: "Startup Tech",
    description: "Landing page moderna para startups de tecnologia com animações suaves e design responsivo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Startup",
    link: "/demos/landing-pages/startup-tech",
    features: ["Animações", "Responsivo", "Moderno"],
  },
  {
    title: "Restaurant Elegant",
    description: "Landing page elegante para restaurantes com menu interativo e reservas online",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    category: "Restaurante",
    link: "/demos/landing-pages/restaurant-elegant",
    features: ["Menu Interativo", "Reservas", "Elegante"],
  },
  {
    title: "Fitness Studio",
    description: "Landing page energética para academias com horários de aulas e inscrições online",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    category: "Fitness",
    link: "/demos/landing-pages/fitness-studio",
    features: ["Energético", "Horários", "Inscrições"],
  },
  {
    title: "Creative Agency",
    description: "Landing page criativa para agências com portfólio interativo e projetos em destaque",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
    category: "Agência",
    link: "/demos/landing-pages/creative-agency",
    features: ["Criativo", "Portfólio", "Interativo"],
  },
  {
    title: "E-commerce Modern",
    description: "Landing page para e-commerce com produtos em destaque e carrinho de compras",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    category: "E-commerce",
    link: "/demos/landing-pages/ecommerce-modern",
    features: ["Produtos", "Carrinho", "Moderno"],
  },
  {
    title: "Travel Destination",
    description: "Landing page para destinos turísticos com galeria de fotos e reservas de viagem",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    category: "Turismo",
    link: "/demos/landing-pages/travel-destination",
    features: ["Galeria", "Reservas", "Turismo"],
  },
];

export default function LandingPagesDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Landing Pages
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Coleção de landing pages modernas e animadas para diferentes tipos de negócios. 
              Cada página foi criada com foco em conversão e experiência do usuário.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingPages.map((page, index) => (
              <motion.div
                key={page.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={page.image}
                    width={180}
                    height={100}
                    alt={page.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {page.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {page.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {page.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {page.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={page.link}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                  >
                    Ver landing page →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              href="/demos"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              ← Voltar para Demos
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 