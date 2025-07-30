"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

export default function FitnessStudioLanding() {
  const [selectedDay, setSelectedDay] = useState("Segunda");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const classes = [
    {
      name: "Spinning",
      instructor: "Carlos Silva",
      time: "07:00 - 08:00",
      level: "Intermediário",
      capacity: "15/20",
      day: "Segunda",
      intensity: "🔥🔥🔥",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Yoga Flow",
      instructor: "Ana Costa",
      time: "08:30 - 09:30",
      level: "Todos os níveis",
      capacity: "12/15",
      day: "Segunda",
      intensity: "🔥",
      color: "from-green-500 to-teal-500",
    },
    {
      name: "CrossFit",
      instructor: "Pedro Santos",
      time: "18:00 - 19:00",
      level: "Avançado",
      capacity: "8/12",
      day: "Segunda",
      intensity: "🔥🔥🔥🔥",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Pilates",
      instructor: "Mariana Lima",
      time: "19:30 - 20:30",
      level: "Iniciante",
      capacity: "10/12",
      day: "Terça",
      intensity: "🔥🔥",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Zumba",
      instructor: "Juliana Rocha",
      time: "20:00 - 21:00",
      level: "Todos os níveis",
      capacity: "18/25",
      day: "Terça",
      intensity: "🔥🔥🔥",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Musculação",
      instructor: "Roberto Alves",
      time: "06:00 - 22:00",
      level: "Todos os níveis",
      capacity: "Ilimitado",
      day: "Todos",
      intensity: "🔥🔥",
      color: "from-gray-500 to-slate-500",
    },
  ];

  const filteredClasses =
    selectedDay === "Todos"
      ? classes
      : classes.filter((cls) => cls.day === selectedDay || cls.day === "Todos");

  const days = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Todos",
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">💪</span>
              </div>
              <span className="text-2xl font-bold text-white">PowerFit</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {["Início", "Aulas", "Treinos", "Contato"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200"
            >
              Matricular-se
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-red-600/30 to-purple-600/30" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        </motion.div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <span className="text-sm text-white/80">⚡ Energia Total</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Transforme Seu
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Corpo
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Aulas energéticas, treinos personalizados e uma comunidade que te
            motiva a alcançar seus objetivos. Comece sua transformação hoje!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-2xl shadow-orange-500/25"
            >
              Ver Horários
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              Aula Experimental
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-6 h-6 bg-orange-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-purple-400 rounded-full opacity-60"
        />
      </section>

      {/* Classes Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Nossas Aulas</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Aulas variadas para todos os níveis e objetivos
            </p>
          </motion.div>

          {/* Day Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {days.map((day) => (
              <motion.button
                key={day}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedDay === day
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                    : "bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                {day}
              </motion.button>
            ))}
          </motion.div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((cls, index) => (
              <motion.div
                key={`${cls.name}-${cls.time}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${cls.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {cls.name}
                    </h3>
                    <span className="text-2xl">{cls.intensity}</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-white/60">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {cls.time}
                    </div>
                    <div className="flex items-center text-white/60">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {cls.instructor}
                    </div>
                    <div className="flex items-center text-white/60">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      {cls.capacity}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-white/60">{cls.level}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200"
                  >
                    Inscrever-se
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Por que escolher o PowerFit?
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Tudo que você precisa para alcançar seus objetivos fitness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💪",
                title: "Treinos Personalizados",
                description: "Programas adaptados ao seu nível e objetivos",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: "👥",
                title: "Comunidade Motivadora",
                description:
                  "Conecte-se com pessoas que compartilham seus objetivos",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: "🎯",
                title: "Resultados Garantidos",
                description:
                  "Metodologia comprovada para alcançar seus objetivos",
                color: "from-green-500 to-teal-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-6"
          >
            Pronto para começar sua transformação?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8"
          >
            Junte-se a milhares de pessoas que já transformaram suas vidas
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-2xl"
          >
            Começar Agora
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mr-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">💪</span>
                </div>
                <span className="text-xl font-bold">PowerFit</span>
              </div>
              <p className="text-white/60">
                Transformando vidas através do fitness desde 2010.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Aulas</h4>
              <ul className="space-y-2 text-white/60">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Spinning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Yoga
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CrossFit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horários</h4>
              <ul className="space-y-2 text-white/60">
                <li>Segunda a Sexta: 06h - 22h</li>
                <li>Sábado: 08h - 18h</li>
                <li>Domingo: 08h - 14h</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-white/60">
                <li>Tel: (11) 9999-9999</li>
                <li>Email: info@powerfit.com</li>
                <li>Rua do Fitness, 456</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 PowerFit Studio. Todos os direitos reservados.</p>
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
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center space-x-2"
        >
          <span>←</span>
          <span>Voltar</span>
        </Link>
      </motion.div>
    </div>
  );
}
