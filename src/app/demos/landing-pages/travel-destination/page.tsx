"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TravelDestinationLanding() {
  const [selectedDestination, setSelectedDestination] = useState("Todos");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const destinations = ["Todos", "Praias", "Montanhas", "Cidades", "Aventura"];

  const trips = [
    {
      name: "Fernando de Noronha",
      category: "Praias",
      description:
        "Paraíso tropical com praias cristalinas e vida marinha exuberante",
      price: "R$ 2.999",
      duration: "7 dias",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 156,
    },
    {
      name: "Chapada Diamantina",
      category: "Montanhas",
      description: "Cachoeiras, trilhas e paisagens deslumbrantes na Bahia",
      price: "R$ 1.899",
      duration: "5 dias",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 89,
    },
    {
      name: "Rio de Janeiro",
      category: "Cidades",
      description: "Cidade maravilhosa com Cristo Redentor e Pão de Açúcar",
      price: "R$ 1.599",
      duration: "4 dias",
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 203,
    },
    {
      name: "Bonito - MS",
      category: "Aventura",
      description: "Ecoturismo com flutuação e mergulho em rios cristalinos",
      price: "R$ 2.299",
      duration: "6 dias",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 134,
    },
    {
      name: "Jericoacoara",
      category: "Praias",
      description: "Vila de pescadores com dunas e praias paradisíacas",
      price: "R$ 2.499",
      duration: "5 dias",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 98,
    },
    {
      name: "Gramado",
      category: "Cidades",
      description: "Cidade serrana com arquitetura alemã e chocolate quente",
      price: "R$ 1.799",
      duration: "4 dias",
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 167,
    },
  ];

  const filteredTrips =
    selectedDestination === "Todos"
      ? trips
      : trips.filter((trip) => trip.category === selectedDestination);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50"
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-cyan-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold text-cyan-800">
                TravelDream
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {["Início", "Destinos", "Pacotes", "Contato"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-700 hover:text-cyan-600 transition-colors duration-200"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-600 text-white px-6 py-2 rounded-full font-medium hover:bg-cyan-700 transition-colors duration-200"
            >
              Reservar Viagem
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30" />
        </motion.div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Descubra
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              o Mundo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Experiências únicas em destinos incríveis. Viagens personalizadas
            que transformam sonhos em realidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-700 transition-all duration-200 shadow-lg"
            >
              Ver Destinos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Ofertas Especiais
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Destinos Incríveis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore os melhores destinos do Brasil e do mundo
            </p>
          </motion.div>

          {/* Destination Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {destinations.map((destination) => (
              <motion.button
                key={destination}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDestination(destination)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedDestination === destination
                    ? "bg-cyan-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-cyan-100"
                }`}
              >
                {destination}
              </motion.button>
            ))}
          </motion.div>

          {/* Trips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrips.map((trip, index) => (
              <motion.div
                key={trip.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={trip.image}
                    alt={trip.name}
                    width={180}
                    height={100}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {trip.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {trip.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-200">
                    {trip.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{trip.description}</p>

                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(trip.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      ({trip.reviews} avaliações)
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-cyan-600">
                      {trip.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-cyan-600 text-white px-6 py-2 rounded-full font-medium hover:bg-cyan-700 transition-colors duration-200"
                    >
                      Reservar
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a TravelDream?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Garantimos a melhor experiência de viagem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "✈️",
                title: "Passagens Incluídas",
                description: "Voos diretos e conexões otimizadas",
              },
              {
                icon: "🏨",
                title: "Hotéis Selecionados",
                description: "Acomodações de qualidade garantida",
              },
              {
                icon: "🎯",
                title: "Roteiros Personalizados",
                description: "Experiências únicas para cada viajante",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Pronto para sua próxima aventura?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8"
          >
            Descubra destinos incríveis e crie memórias inesquecíveis
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
          >
            Planejar Viagem
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TravelDream</h3>
              <p className="text-gray-400">
                Transformando sonhos em viagens inesquecíveis.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Destinos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Praias
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Montanhas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cidades
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pacotes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Passagens
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Seguros
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tel: (11) 9999-9999</li>
                <li>Email: contato@traveldream.com</li>
                <li>Rua das Viagens, 456</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TravelDream. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Back to Demos Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link
          href="/demos/landing-pages"
          className="bg-cyan-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-cyan-700 transition-all duration-200 flex items-center space-x-2"
        >
          <span>←</span>
          <span>Voltar</span>
        </Link>
      </motion.div>
    </div>
  );
}
