import BlogList from "@/components/blog/BlogList";
import BlogHeader from "@/components/blog/BlogHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function BlogPage() {
  // Dados temporários para demonstração
  const posts = [
    {
      id: "1",
      title: "Introdução ao Next.js 15",
      slug: "introducao-nextjs-15",
      excerpt: "Aprenda as principais novidades do Next.js 15 e como aproveitar ao máximo suas funcionalidades.",
      content: "Conteúdo do post...",
      published: true,
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      createdAt: new Date("2024-01-15"),
      updatedAt: new Date("2024-01-15"),
      category: { id: "1", name: "Desenvolvimento Web", slug: "desenvolvimento-web" },
      tags: [{ id: "1", name: "Next.js", slug: "nextjs" }, { id: "2", name: "React", slug: "react" }],
      author: { id: "1", name: "Lucas Gonçalves", email: "lucas@example.com" }
    },
    {
      id: "2",
      title: "TypeScript para Iniciantes",
      slug: "typescript-para-iniciantes",
      excerpt: "Um guia completo para começar com TypeScript e melhorar a qualidade do seu código.",
      content: "Conteúdo do post...",
      published: true,
      featured: false,
      imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
      createdAt: new Date("2024-01-10"),
      updatedAt: new Date("2024-01-10"),
      category: { id: "2", name: "Programação", slug: "programacao" },
      tags: [{ id: "3", name: "TypeScript", slug: "typescript" }],
      author: { id: "1", name: "Lucas Gonçalves", email: "lucas@example.com" }
    }
  ];

  const categories = [
    { id: "1", name: "Desenvolvimento Web", slug: "desenvolvimento-web", _count: { posts: 1 } },
    { id: "2", name: "Programação", slug: "programacao", _count: { posts: 1 } }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogHeader />
          <BlogList posts={posts} categories={categories} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
