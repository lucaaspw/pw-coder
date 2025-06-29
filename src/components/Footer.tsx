"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        © {new Date().getFullYear()} Lucas Gonçalves. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
