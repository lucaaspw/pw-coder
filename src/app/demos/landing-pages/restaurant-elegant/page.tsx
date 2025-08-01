"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RestaurantElegantLanding() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const menuCategories = [
    "Todos",
    "Entradas",
    "Pratos Principais",
    "Sobremesas",
    "Bebidas",
  ];

  const menuItems = [
    {
      name: "Carpaccio de Salmão",
      category: "Entradas",
      description: "Salmão fresco com azeite trufado e limão siciliano",
      price: "R$ 45",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
      chef: "Chef Marco",
      time: "15 min",
    },
    {
      name: "Risoto de Funghi",
      category: "Pratos Principais",
      description: "Arroz arbóreo com funghi porcini e parmesão",
      price: "R$ 68",
      image:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
      chef: "Chef Sofia",
      time: "25 min",
    },
    {
      name: "Filé Mignon Grelhado",
      category: "Pratos Principais",
      description: "Filé mignon grelhado com molho de vinho tinto",
      price: "R$ 89",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      chef: "Chef Antonio",
      time: "20 min",
    },
    {
      name: "Tiramisu Clássico",
      category: "Sobremesas",
      description: "Tiramisu tradicional com café e mascarpone",
      price: "R$ 32",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
      chef: "Chef Maria",
      time: "10 min",
    },
    {
      name: "Vinho Tinto Reserva",
      category: "Bebidas",
      description: "Vinho tinto reserva da região do Douro",
      price: "R$ 120",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
      chef: "Sommelier",
      time: "Imediato",
    },
    {
      name: "Ceviche de Camarão",
      category: "Entradas",
      description: "Camarão marinado em limão e cebola roxa",
      price: "R$ 52",
      image:
        "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop",
      chef: "Chef Carlos",
      time: "12 min",
    },
  ];

  const filteredMenu =
    selectedCategory === "Todos"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div ref={containerRef} className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <div className="text-3xl font-serif text-stone-800">
                La Bella Tavola
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-12">
              {["Início", "Menu", "Sobre", "Contato"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-stone-800 text-white px-8 py-3 rounded-none font-medium hover:bg-stone-900 transition-colors duration-200 border border-stone-800"
            >
              Reservar Mesa
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-stone-900/40" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        </motion.div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block border border-white/30 px-8 py-3 mb-8">
              <span className="text-sm tracking-widest uppercase">
                Est. 1995
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
              Experiência
              <br />
              <span className="text-stone-200">Gastronômica</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-stone-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Sabores autênticos da culinária italiana em um ambiente elegante e
            acolhedor. Uma experiência gastronômica única que desperta todos os
            sentidos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-stone-800 px-12 py-4 text-lg font-medium hover:bg-stone-100 transition-all duration-200 border border-white"
            >
              Ver Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white px-12 py-4 text-lg font-medium hover:bg-white hover:text-stone-800 transition-all duration-200"
            >
              Fazer Reserva
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-serif text-stone-800 mb-6">
              Nosso Menu
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Pratos cuidadosamente preparados com ingredientes frescos e
              selecionados
            </p>
          </motion.div>

          {/* Menu Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            {menuCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 font-medium transition-all duration-200 border ${
                  selectedCategory === category
                    ? "bg-stone-800 text-white border-stone-800"
                    : "bg-white text-stone-700 border-stone-300 hover:border-stone-800"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredMenu.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    width={180}
                    height={100}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-stone-800 text-white px-4 py-2 text-sm font-medium">
                      {item.price}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif text-stone-800 mb-2">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center text-sm text-stone-500 mb-6">
                    <span>Chef {item.chef}</span>
                    <span>{item.time}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-stone-800 text-white py-4 font-medium hover:bg-stone-900 transition-colors duration-200 border border-stone-800"
                  >
                    Adicionar ao Pedido
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-serif text-stone-800 mb-8">
                Nossa História
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Fundado em 1995, o La Bella Tavola nasceu da paixão pela
                culinária italiana autêntica. Nossa família trouxe receitas
                tradicionais da Toscana para criar uma experiência gastronômica
                única.
              </p>
              <p className="text-lg text-stone-600 mb-12 leading-relaxed">
                Hoje, continuamos a tradição com ingredientes frescos, técnicas
                tradicionais e um ambiente que faz você se sentir em casa.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-stone-800 text-white px-12 py-4 text-lg font-medium hover:bg-stone-900 transition-all duration-200 border border-stone-800"
              >
                Conheça Nossa História
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop"
                alt="Chef preparando prato"
                className="w-full h-96 object-cover"
                width={100}
                height={100}
              />
              <div className="absolute inset-0 border-4 border-white"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-serif mb-6"
          >
            Reserve Sua Mesa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-stone-300 mb-12"
          >
            Garanta sua experiência gastronômica única
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-stone-800 px-12 py-4 text-lg font-medium hover:bg-stone-100 transition-all duration-200 border border-white"
          >
            Fazer Reserva Agora
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-serif mb-6">La Bella Tavola</h3>
              <p className="text-stone-400 leading-relaxed">
                Experiência gastronômica italiana autêntica desde 1995.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Menu</h4>
              <ul className="space-y-3 text-stone-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Entradas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pratos Principais
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobremesas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Horários</h4>
              <ul className="space-y-3 text-stone-400">
                <li>Segunda a Sexta: 18h - 23h</li>
                <li>Sábado: 12h - 23h</li>
                <li>Domingo: 12h - 22h</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Contato</h4>
              <ul className="space-y-3 text-stone-400">
                <li>Tel: (11) 9999-9999</li>
                <li>Email: info@labellatavola.com</li>
                <li>Rua das Flores, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400">
            <p>&copy; 2024 La Bella Tavola. Todos os direitos reservados.</p>
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
          className="bg-stone-800 text-white px-6 py-3 shadow-lg hover:bg-stone-900 transition-all duration-200 flex items-center space-x-2 border border-stone-800"
        >
          <span>←</span>
          <span>Voltar</span>
        </Link>
      </motion.div>
    </div>
  );
}
