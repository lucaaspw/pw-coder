"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ComponentsDemo() {
  const [activeTab, setActiveTab] = useState("buttons");
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  type ButtonVariant =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "outline";

  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
    loading?: boolean;
  }

  const Button = ({
    variant = "primary",
    children,
    loading,
    ...props
  }: ButtonProps) => {
    const variants: Record<ButtonVariant, string> = {
      primary: darkMode
        ? "bg-blue-500 hover:bg-blue-600 text-white"
        : "bg-blue-600 hover:bg-blue-700 text-white",
      secondary: darkMode
        ? "bg-gray-700 hover:bg-gray-600 text-white"
        : "bg-gray-600 hover:bg-gray-700 text-white",
      success: darkMode
        ? "bg-green-700 hover:bg-green-600 text-white"
        : "bg-green-600 hover:bg-green-700 text-white",
      danger: darkMode
        ? "bg-red-700 hover:bg-red-600 text-white"
        : "bg-red-600 hover:bg-red-700 text-white",
      outline: darkMode
        ? "border-2 border-blue-400 text-blue-400 hover:bg-blue-900/20"
        : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    };
    return (
      <button
        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${variants[variant]}`}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
            Carregando...
          </span>
        ) : (
          children
        )}
      </button>
    );
  };

  interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    success?: boolean;
  }
  const Input = ({ label, error, success, ...props }: InputProps) => (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
          error
            ? "border-red-500"
            : success
            ? "border-green-500"
            : "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        }`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
      {success && !error && (
        <span className="text-xs text-green-600">Tudo certo!</span>
      )}
    </div>
  );

  interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    children: React.ReactNode;
    badge?: string;
    description?: string;
  }
  const Card = ({
    title,
    children,
    badge,
    description,
    ...props
  }: CardProps) => (
    <div
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 relative mb-8"
      {...props}
    >
      {badge && (
        <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          {badge}
        </span>
      )}
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {description}
        </p>
      )}
      {children}
    </div>
  );

  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }
  const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full mx-4"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-6">{children}</div>
        </motion.div>
      </div>
    );
  };

  const tabs = [
    { id: "buttons", label: "Botões" },
    { id: "inputs", label: "Inputs" },
    { id: "cards", label: "Cards" },
    { id: "modals", label: "Modais" },
    { id: "colors", label: "Cores & Tipografia" },
  ];

  const CodeBlock = ({ code }: { code: string }) => (
    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-xs overflow-x-auto mt-2 mb-4">
      <code>{code}</code>
    </pre>
  );

  // Playground para Button
  const [playVariant, setPlayVariant] = useState<ButtonVariant>("primary");
  const [playLoading, setPlayLoading] = useState(false);
  const [playDisabled, setPlayDisabled] = useState(false);
  const [playText, setPlayText] = useState("Clique aqui");

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-950 text-white transition-colors duration-300"
          : "min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300"
      }
    >
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2">Component Library</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Exemplos reais de componentes reutilizáveis
              </p>
            </div>
            <button
              onClick={() => setDarkMode((d) => !d)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow hover:shadow-md transition-colors duration-200"
              aria-label="Alternar modo escuro"
            >
              {darkMode ? (
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
                    d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.05l-.71-.71M6.34 6.34l-.71-.71"
                  />
                </svg>
              ) : (
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
                    d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.05l-.71-.71M6.34 6.34l-.71-.71M12 5a7 7 0 000 14a7 7 0 000-14z"
                  />
                </svg>
              )}
              {darkMode ? "Claro" : "Escuro"}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex"
          >
            {/* Sidebar */}
            <aside className="hidden md:block w-56 border-r border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-6 sticky top-24 self-start h-fit">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-8">
              {activeTab === "buttons" && (
                <>
                  <Card
                    title="Playground do Botão"
                    description="Teste diferentes variantes, estados e textos ao vivo."
                  >
                    <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
                      <select
                        value={playVariant}
                        onChange={(e) =>
                          setPlayVariant(e.target.value as ButtonVariant)
                        }
                        className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      >
                        <option value="primary">Primário</option>
                        <option value="secondary">Secundário</option>
                        <option value="success">Sucesso</option>
                        <option value="danger">Perigo</option>
                        <option value="outline">Outline</option>
                      </select>
                      <input
                        type="text"
                        value={playText}
                        onChange={(e) => setPlayText(e.target.value)}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        placeholder="Texto do botão"
                      />
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={playLoading}
                          onChange={(e) => setPlayLoading(e.target.checked)}
                        />{" "}
                        Loading
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={playDisabled}
                          onChange={(e) => setPlayDisabled(e.target.checked)}
                        />{" "}
                        Disabled
                      </label>
                    </div>
                    <div className="mb-4">
                      <Button
                        variant={playVariant}
                        loading={playLoading}
                        disabled={playDisabled}
                      >
                        {playText}
                      </Button>
                    </div>
                    <CodeBlock
                      code={`<Button variant="${playVariant}"${
                        playLoading ? " loading" : ""
                      }${playDisabled ? " disabled" : ""}>${playText}</Button>`}
                    />
                  </Card>

                  <Card
                    title="Exemplos de Botões"
                    description="Veja as variantes, estados e tamanhos."
                  >
                    <div className="flex flex-wrap gap-3 mb-2">
                      <Button variant="primary">Primário</Button>
                      <Button variant="secondary">Secundário</Button>
                      <Button variant="success">Sucesso</Button>
                      <Button variant="danger">Perigo</Button>
                      <Button variant="outline">Outline</Button>
                    </div>
                    <CodeBlock
                      code={`<Button variant="primary">Primário</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="success">Sucesso</Button>
<Button variant="danger">Perigo</Button>
<Button variant="outline">Outline</Button>`}
                    />

                    <div className="flex flex-wrap gap-3 mb-2 mt-6">
                      <Button variant="primary" loading>
                        Loading
                      </Button>
                      <Button variant="primary" disabled>
                        Disabled
                      </Button>
                      <Button variant="primary">
                        <span className="flex items-center gap-2">
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
                          Com Ícone
                        </span>
                      </Button>
                    </div>
                    <CodeBlock
                      code={`<Button variant="primary" loading>Loading</Button>
<Button variant="primary" disabled>Disabled</Button>
<Button variant="primary"><span>Com Ícone</span></Button>`}
                    />

                    <div className="flex flex-wrap gap-3 mb-2 mt-6">
                      <Button variant="primary" className="px-2 py-1 text-sm">
                        Pequeno
                      </Button>
                      <Button variant="primary" className="px-4 py-2">
                        Médio
                      </Button>
                      <Button variant="primary" className="px-6 py-3 text-lg">
                        Grande
                      </Button>
                    </div>
                    <CodeBlock
                      code={`<Button className="px-2 py-1 text-sm">Pequeno</Button>
<Button className="px-4 py-2">Médio</Button>
<Button className="px-6 py-3 text-lg">Grande</Button>`}
                    />
                  </Card>
                </>
              )}

              {activeTab === "inputs" && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Inputs
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Exemplos
                      </h3>
                      <Input
                        label="Nome"
                        placeholder="Digite seu nome"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                      <Input
                        label="Email"
                        type="email"
                        placeholder="seu@email.com"
                      />
                      <Input
                        label="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                      />
                      <Input label="Com erro" error="Campo obrigatório" />
                      <Input label="Com sucesso" success />
                      <CodeBlock
                        code={`<Input label="Nome" placeholder="Digite seu nome" />
<Input label="Email" type="email" />
<Input label="Senha" type="password" />
<Input label="Com erro" error="Campo obrigatório" />
<Input label="Com sucesso" success />`}
                      />
                    </div>
                  </div>
                </section>
              )}

              {activeTab === "cards" && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Cards
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Exemplos
                      </h3>
                      <Card title="Card Simples">
                        Este é um exemplo de card simples com título e conteúdo.
                      </Card>
                      <Card title="Card com Badge" badge="Novo">
                        Card com badge de destaque.
                      </Card>
                      <Card>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                              className="w-8 h-8 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Card com Ícone
                          </h3>
                          <p className="text-gray-600">
                            Card com ícone centralizado e conteúdo estruturado.
                          </p>
                        </div>
                      </Card>
                      <Card title="Card com Ações">
                        <p className="text-gray-600 mb-4">
                          Card com botões de ação no rodapé.
                        </p>
                        <div className="flex gap-2">
                          <Button variant="primary">Ação</Button>
                          <Button variant="outline">Cancelar</Button>
                        </div>
                      </Card>
                      <CodeBlock
                        code={`<Card title="Card Simples">Conteúdo</Card>
<Card title="Card com Badge" badge="Novo">Card com badge de destaque.</Card>
<Card>...com ícone...</Card>
<Card title="Card com Ações">...botões...</Card>`}
                      />
                    </div>
                  </div>
                </section>
              )}

              {activeTab === "modals" && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Modal
                  </h2>
                  <div className="mb-4">
                    <Button onClick={() => setIsModalOpen(true)}>
                      Abrir Modal de Exemplo
                    </Button>
                  </div>
                  <CodeBlock
                    code={`<Modal isOpen={isOpen} onClose={onClose} title="Exemplo de Modal">
  <p>Conteúdo do modal</p>
</Modal>`}
                  />
                  <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Exemplo de Modal"
                  >
                    <p className="text-gray-600 mb-6">
                      Este é um exemplo de modal funcional. Você pode adicionar
                      qualquer conteúdo aqui.
                    </p>
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="outline"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancelar
                      </Button>
                      <Button onClick={() => setIsModalOpen(false)}>
                        Confirmar
                      </Button>
                    </div>
                  </Modal>
                </section>
              )}

              {activeTab === "colors" && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Cores & Tipografia
                  </h2>
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Paleta de Cores
                    </h3>
                    <div className="flex gap-4 mb-4">
                      <div className="w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                        Primary
                      </div>
                      <div className="w-16 h-16 rounded-lg bg-green-600 flex items-center justify-center text-white font-bold">
                        Success
                      </div>
                      <div className="w-16 h-16 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold">
                        Danger
                      </div>
                      <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center text-white font-bold">
                        Dark
                      </div>
                      <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center text-gray-800 font-bold border">
                        Light
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Tipografia
                    </h3>
                    <div className="space-y-2">
                      <h1 className="text-4xl font-bold">Título H1</h1>
                      <h2 className="text-3xl font-bold">Título H2</h2>
                      <h3 className="text-2xl font-bold">Título H3</h3>
                      <p className="text-base">
                        Texto padrão do sistema de design.
                      </p>
                      <a href="#" className="text-blue-600 hover:underline">
                        Link de exemplo
                      </a>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
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
