"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Lucas Gonçalves</h1>
            <span className="ml-2 text-sm text-gray-500">| Developer</span>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex space-x-8"
            role="navigation"
            aria-label="Navegação principal"
          >
            {[
              { name: "Início", href: "/#home" },
              { name: "Serviços", href: "/#services" },
              { name: "Projetos", href: "/#projects" },
              { name: "Blog", href: "/blog" },
              { name: "Sobre", href: "/#about" },
              { name: "Contato", href: "/#contact" },
            ].map((item) => (
              <div key={item.name}>
                {item.href.startsWith("/#") ? (
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    aria-label={`Ir para ${item.name}`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    aria-label={`Ir para ${item.name}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/#contact"
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Solicitar orçamento"
          >
            Solicitar Orçamento
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: "Início", href: "/#home" },
                { name: "Serviços", href: "/#services" },
                { name: "Projetos", href: "/#projects" },
                { name: "Blog", href: "/blog" },
                { name: "Sobre", href: "/#about" },
                { name: "Contato", href: "/#contact" },
              ].map((item) => (
                <div key={item.name}>
                  {item.href.startsWith("/#") ? (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/#contact"
                className="block px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Orçamento
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
