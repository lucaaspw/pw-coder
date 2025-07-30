"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CalculatorDemo() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
      setHistory((prev) => [
        ...prev,
        `${currentValue} ${operation} ${inputValue} = ${newValue}`,
      ]);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (
    firstValue: number,
    secondValue: number,
    operation: string
  ) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    if (!previousValue || !operation) return;

    const inputValue = parseFloat(display);
    const newValue = calculate(previousValue, inputValue, operation);

    setDisplay(String(newValue));
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(true);
  };

  const buttons = [
    {
      label: "AC",
      onClick: clear,
      className: "bg-red-500 hover:bg-red-600 text-white",
    },
    {
      label: "±",
      onClick: () => setDisplay(String(-parseFloat(display))),
      className: "bg-gray-600 hover:bg-gray-700 text-white",
    },
    {
      label: "%",
      onClick: () => setDisplay(String(parseFloat(display) / 100)),
      className: "bg-gray-600 hover:bg-gray-700 text-white",
    },
    {
      label: "÷",
      onClick: () => performOperation("÷"),
      className: "bg-orange-500 hover:bg-orange-600 text-white",
    },
    {
      label: "7",
      onClick: () => inputDigit("7"),
      className: "bg-gray-800 hover:bg-gray-700 text-white",
    },
    {
      label: "8",
      onClick: () => inputDigit("8"),
      className: "bg-gray-800 hover:bg-gray-700 text-white",
    },
    {
      label: "9",
      onClick: () => inputDigit("9"),
      className: "bg-gray-800 hover:bg-gray-700 text-white",
    },
    {
      label: "×",
      onClick: () => performOperation("×"),
      className: "bg-orange-500 hover:bg-orange-600 text-white",
    },
    {
      label: "4",
      onClick: () => inputDigit("4"),
      className: "bg-gray-800 hover:bg-gray-700 text-white",
    },
    {
      label: "5",
      onClick: () => inputDigit("5"),
      className: "bg-gray-800 hover:bg-gray-700 text-white",
    },
    {
      label: "6",
      onClick: () => inputDigit("6"),
      className: "bg-gray-800 hover:bg-gray-700 text-white",
    },
    {
      label: "-",
      onClick: () => performOperation("-"),
      className: "bg-orange-500 hover:bg-orange-600 text-white",
    },
    {
      label: "1",
      onClick: () => inputDigit("1"),
      className: "bg-gray-800 hover:bg-gray-700 text-white",
    },
    {
      label: "2",
      onClick: () => inputDigit("2"),
      className: "bg-gray-800 hover:bg-gray-700 text-white",
    },
    {
      label: "3",
      onClick: () => inputDigit("3"),
      className: "bg-gray-800 hover:bg-gray-700 text-white",
    },
    {
      label: "+",
      onClick: () => performOperation("+"),
      className: "bg-orange-500 hover:bg-orange-600 text-white",
    },
    {
      label: "0",
      onClick: () => inputDigit("0"),
      className: "bg-gray-800 hover:bg-gray-700 text-white col-span-2",
    },
    {
      label: ".",
      onClick: inputDecimal,
      className: "bg-gray-800 hover:bg-gray-700 text-white",
    },
    {
      label: "=",
      onClick: handleEquals,
      className: "bg-orange-500 hover:bg-orange-600 text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Calculadora Profissional
            </h1>
            <p className="text-xl text-purple-200">
              Interface moderna inspirada em design systems profissionais
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
                {/* Display */}
                <div className="mb-8">
                  <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                    <div className="text-right text-white/60 text-sm mb-2 min-h-[20px]">
                      {previousValue !== null &&
                        operation &&
                        `${previousValue} ${operation}`}
                    </div>
                    <div className="text-right text-white text-5xl font-light min-h-[80px] flex items-end justify-end">
                      {display}
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-4 gap-4">
                  {buttons.map((button, index) => (
                    <motion.button
                      key={button.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={button.onClick}
                      className={`${button.className} text-2xl font-medium rounded-2xl h-16 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/20 shadow-lg`}
                    >
                      {button.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* History Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
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
                  Histórico
                </h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {history.length === 0 ? (
                    <p className="text-gray-400 text-sm">
                      Nenhuma operação realizada
                    </p>
                  ) : (
                    history
                      .slice(-8)
                      .reverse()
                      .map((item, index) => (
                        <div
                          key={index}
                          className="text-sm text-gray-300 bg-white/5 rounded-lg p-2"
                        >
                          {item}
                        </div>
                      ))
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Recursos
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Operações matemáticas avançadas
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Histórico de operações
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Interface responsiva
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Animações suaves
                  </div>
                </div>
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
              className="inline-flex items-center text-purple-300 hover:text-white transition-colors duration-200"
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
