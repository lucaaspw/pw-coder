"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  priority: "low" | "medium" | "high";
  createdAt: Date;
}

const categories = ["Trabalho", "Pessoal", "Estudo", "Saúde"];
const priorities = [
  {
    value: "low",
    label: "Baixa",
    color: "bg-emerald-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
  {
    value: "medium",
    label: "Média",
    color: "bg-amber-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
  },
  {
    value: "high",
    label: "Alta",
    color: "bg-red-500",
    bgColor: "bg-red-50",
    textColor: "text-red-700",
  },
];

export default function TodoDemo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Trabalho");
  const [selectedPriority, setSelectedPriority] = useState<
    "low" | "medium" | "high"
  >("medium");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos).map(
        (todo: Todo & { createdAt: string }) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        })
      );
      setTodos(parsedTodos);
    }
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: Todo = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false,
        category: selectedCategory,
        priority: selectedPriority,
        createdAt: new Date(),
      };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !todo.completed) ||
      (filter === "completed" && todo.completed);

    const matchesSearch =
      todo.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;
  const progressPercentage =
    totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Task Manager Pro
            </h1>
            <p className="text-xl text-gray-600">
              Gerencie suas tarefas com elegância e eficiência
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Add Todo Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Nova Tarefa
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <input
                      type="text"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addTodo()}
                      placeholder="O que você precisa fazer?"
                      className="w-full px-4 py-3 text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-lg"
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border text-gray-900 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedPriority}
                    onChange={(e) =>
                      setSelectedPriority(
                        e.target.value as "low" | "medium" | "high"
                      )
                    }
                    className="px-4 py-3 border text-gray-900 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  >
                    {priorities.map((priority) => (
                      <option key={priority.value} value={priority.value}>
                        {priority.label}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={addTodo}
                  className="mt-4 bg-indigo-600 cursor-pointer text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Adicionar Tarefa
                </button>
              </motion.div>

              {/* Filters and Search */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex gap-2">
                    {[
                      { value: "all", label: "Todas", icon: "📋" },
                      { value: "active", label: "Ativas", icon: "⏳" },
                      { value: "completed", label: "Concluídas", icon: "✅" },
                    ].map((filterOption) => (
                      <button
                        key={filterOption.value}
                        onClick={() =>
                          setFilter(
                            filterOption.value as "all" | "active" | "completed"
                          )
                        }
                        className={`px-4 py-2 rounded-xl cursor-pointer font-medium transition-all duration-200 flex items-center gap-2 ${
                          filter === filterOption.value
                            ? "bg-indigo-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        <span>{filterOption.icon}</span>
                        {filterOption.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex-1 max-w-md">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar tarefas..."
                      className="w-full px-4 py-2 text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Progress */}
              {totalCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Progresso
                    </h3>
                    <span className="text-sm text-gray-600">
                      {completedCount} de {totalCount} concluídas
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </div>
                  <div className="text-right mt-2">
                    <span className="text-2xl font-bold text-indigo-600">
                      {Math.round(progressPercentage)}%
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Todo List */}
              <div className="space-y-3">
                <AnimatePresence>
                  {filteredTodos.map((todo) => (
                    <motion.div
                      key={todo.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <button
                          onClick={() => toggleTodo(todo.id)}
                          className={`mt-1 w-6 h-6 cursor-pointer rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                            todo.completed
                              ? "bg-indigo-600 border-indigo-600 text-white"
                              : "border-gray-300 hover:border-indigo-400"
                          }`}
                        >
                          {todo.completed && (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </button>

                        <div className="flex-1">
                          <p
                            className={`text-lg font-medium ${
                              todo.completed
                                ? "line-through text-gray-500"
                                : "text-gray-900"
                            }`}
                          >
                            {todo.text}
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                              {todo.category}
                            </span>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                priorities.find(
                                  (p) => p.value === todo.priority
                                )?.bgColor
                              } ${
                                priorities.find(
                                  (p) => p.value === todo.priority
                                )?.textColor
                              }`}
                            >
                              {
                                priorities.find(
                                  (p) => p.value === todo.priority
                                )?.label
                              }
                            </span>
                            <span className="text-sm text-gray-400">
                              {new Date(todo.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => deleteTodo(todo.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-2 hover:bg-red-50 rounded-lg"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {filteredTodos.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16 bg-white rounded-2xl shadow-xl border border-gray-100"
                  >
                    <div className="text-6xl mb-4">📝</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {filter === "all"
                        ? "Nenhuma tarefa ainda"
                        : "Nenhuma tarefa encontrada"}
                    </h3>
                    <p className="text-gray-600">
                      {filter === "all"
                        ? "Adicione sua primeira tarefa para começar!"
                        : "Tente ajustar os filtros ou busca."}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Stats */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Estatísticas
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total</span>
                    <span className="text-2xl font-bold text-indigo-600">
                      {totalCount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Concluídas</span>
                    <span className="text-2xl font-bold text-green-600">
                      {completedCount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pendentes</span>
                    <span className="text-2xl font-bold text-amber-600">
                      {totalCount - completedCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Categorias
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const count = todos.filter(
                      (todo) => todo.category === category
                    ).length;
                    return (
                      <div
                        key={category}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-600">{category}</span>
                        <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-sm font-medium">
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Ações Rápidas
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setFilter("active")}
                    className="w-full text-left px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors duration-200"
                  >
                    Ver tarefas ativas
                  </button>
                  <button
                    onClick={() => setFilter("completed")}
                    className="w-full text-left px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors duration-200"
                  >
                    Ver concluídas
                  </button>
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
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
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
