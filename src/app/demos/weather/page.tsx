"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
}

const weatherIcons: { [key: string]: string } = {
  "01d": "☀️",
  "01n": "🌙",
  "02d": "⛅",
  "02n": "☁️",
  "03d": "☁️",
  "03n": "☁️",
  "04d": "☁️",
  "04n": "☁️",
  "09d": "🌧️",
  "09n": "🌧️",
  "10d": "🌦️",
  "10n": "🌧️",
  "11d": "⛈️",
  "11n": "⛈️",
  "13d": "❄️",
  "13n": "❄️",
  "50d": "🌫️",
  "50n": "🌫️",
};

const weatherBackgrounds: { [key: string]: string } = {
  Clear: "from-yellow-400 via-orange-500 to-red-500",
  Clouds: "from-blue-400 via-indigo-500 to-purple-600",
  Rain: "from-gray-400 via-blue-500 to-indigo-600",
  Snow: "from-blue-200 via-blue-300 to-blue-400",
  Thunderstorm: "from-gray-600 via-purple-700 to-gray-800",
  Drizzle: "from-blue-300 via-blue-400 to-blue-500",
  Mist: "from-gray-300 via-gray-400 to-gray-500",
  Fog: "from-gray-400 via-gray-500 to-gray-600",
};

export default function WeatherDemo() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const getWeather = async (cityName: string) => {
    if (!cityName.trim()) return;

    setLoading(true);
    setError("");

    try {
      // Simulação de dados para demo (sem API key)
      const weatherTypes = ["Clear", "Clouds", "Rain", "Snow", "Thunderstorm"];
      const randomWeather =
        weatherTypes[Math.floor(Math.random() * weatherTypes.length)];

      const mockWeather: WeatherData = {
        name: cityName,
        main: {
          temp: Math.floor(Math.random() * 30) + 10,
          feels_like: Math.floor(Math.random() * 30) + 10,
          humidity: Math.floor(Math.random() * 40) + 40,
          pressure: Math.floor(Math.random() * 200) + 1000,
        },
        weather: [
          {
            main: randomWeather,
            description: randomWeather.toLowerCase(),
            icon: "01d",
          },
        ],
        wind: {
          speed: Math.floor(Math.random() * 20) + 5,
        },
        sys: {
          country: "BR",
        },
      };

      // Simular delay de API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setWeather(mockWeather);

      // Adicionar à busca recente
      if (!recentSearches.includes(cityName)) {
        setRecentSearches((prev) => [cityName, ...prev.slice(0, 4)]);
      }
    } catch {
      setError("Erro ao buscar dados do clima. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getWeather(city);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setCity("Sua Localização");
          getWeather("Sua Localização");
        },
        () => {
          setError("Não foi possível obter sua localização.");
        }
      );
    } else {
      setError("Geolocalização não é suportada pelo seu navegador.");
    }
  };

  const getBackgroundClass = () => {
    if (!weather) return "from-blue-400 via-purple-500 to-pink-500";
    const weatherType = weather.weather[0].main;
    return (
      weatherBackgrounds[weatherType] ||
      "from-blue-400 via-purple-500 to-pink-500"
    );
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${getBackgroundClass()} transition-all duration-1000`}
    >
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-4">Weather Pro</h1>
            <p className="text-xl text-white/90">
              Previsão do tempo em tempo real com interface moderna
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Weather Card */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
              >
                <form onSubmit={handleSubmit} className="mb-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Digite o nome da cidade..."
                      className="flex-1 px-6 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent text-lg"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-all duration-200 disabled:opacity-50 shadow-lg"
                    >
                      {loading ? "Buscando..." : "Buscar"}
                    </button>
                  </div>
                </form>

                <button
                  onClick={getCurrentLocation}
                  className="w-full bg-white/20 text-white px-6 py-4 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-all duration-200 shadow-lg mb-8"
                >
                  📍 Usar minha localização
                </button>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 backdrop-blur-lg rounded-2xl p-6 mb-8 text-red-100 text-center border border-red-300/30"
                  >
                    {error}
                  </motion.div>
                )}

                {weather && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                  >
                    <div className="text-8xl mb-6">
                      {weatherIcons[weather.weather[0].icon] || "🌤️"}
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">
                      {weather.name}, {weather.sys.country}
                    </h2>
                    <p className="text-2xl text-white/90 mb-8 capitalize">
                      {weather.weather[0].description}
                    </p>

                    <div className="text-7xl font-bold text-white mb-8">
                      {Math.round(weather.main.temp)}°C
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <div className="text-3xl mb-3">🌡️</div>
                        <div className="text-white font-semibold text-lg">
                          Sensação
                        </div>
                        <div className="text-white/90 text-xl">
                          {Math.round(weather.main.feels_like)}°C
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <div className="text-3xl mb-3">💧</div>
                        <div className="text-white font-semibold text-lg">
                          Umidade
                        </div>
                        <div className="text-white/90 text-xl">
                          {weather.main.humidity}%
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <div className="text-3xl mb-3">💨</div>
                        <div className="text-white font-semibold text-lg">
                          Vento
                        </div>
                        <div className="text-white/90 text-xl">
                          {weather.wind.speed} km/h
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <div className="text-3xl mb-3">📊</div>
                        <div className="text-white font-semibold text-lg">
                          Pressão
                        </div>
                        <div className="text-white/90 text-xl">
                          {weather.main.pressure} hPa
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Recent Searches */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
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
                  Buscas Recentes
                </h3>
                <div className="space-y-2">
                  {recentSearches.length === 0 ? (
                    <p className="text-white/60 text-sm">
                      Nenhuma busca recente
                    </p>
                  ) : (
                    recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => getWeather(search)}
                        className="w-full text-left text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl p-3 transition-all duration-200"
                      >
                        {search}
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Recursos
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-white/80">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Busca por cidade
                  </div>
                  <div className="flex items-center text-sm text-white/80">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Geolocalização
                  </div>
                  <div className="flex items-center text-sm text-white/80">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Interface responsiva
                  </div>
                  <div className="flex items-center text-sm text-white/80">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Animações suaves
                  </div>
                </div>
              </div>

              {/* Weather Tips */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">
                  💡 Dica do Dia
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {weather?.weather[0].main === "Rain"
                    ? "Não esqueça o guarda-chuva! 🌂"
                    : weather?.weather[0].main === "Clear"
                    ? "Perfeito para um passeio ao ar livre! ☀️"
                    : "Verifique a previsão antes de sair! 📱"}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Voltar aos projetos
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
