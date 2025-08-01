import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogPost from "@/components/blog/BlogPost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Dados temporários para demonstração
const mockPosts = [
  {
    id: "1",
    title: "Introdução ao Next.js 15",
    slug: "introducao-nextjs-15",
    content: `
      <h1>Introdução ao Next.js 15</h1>
      <p>O Next.js 15 traz várias melhorias significativas para o desenvolvimento web moderno. Neste artigo, vamos explorar as principais novidades e como elas podem beneficiar seu projeto.</p>
      
      <h2>Principais Novidades</h2>
      <ul>
        <li>Melhor performance de renderização</li>
        <li>Novas APIs para otimização</li>
        <li>Suporte aprimorado para TypeScript</li>
        <li>Melhorias na experiência do desenvolvedor</li>
      </ul>
      
      <h2>Conclusão</h2>
      <p>O Next.js 15 representa um passo importante na evolução do framework, oferecendo ferramentas mais poderosas para criar aplicações web modernas e performáticas.</p>
    `,
    excerpt: "Aprenda as principais novidades do Next.js 15 e como aproveitar ao máximo suas funcionalidades.",
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
    content: `
      <h1>TypeScript para Iniciantes</h1>
      <p>TypeScript é uma extensão do JavaScript que adiciona tipagem estática à linguagem. Neste guia, vamos cobrir os conceitos básicos para começar sua jornada com TypeScript.</p>
      
      <h2>Por que TypeScript?</h2>
      <p>TypeScript oferece várias vantagens sobre JavaScript puro:</p>
      <ul>
        <li>Detecção de erros em tempo de desenvolvimento</li>
        <li>Melhor autocompletar no editor</li>
        <li>Código mais legível e manutenível</li>
        <li>Refatoração mais segura</li>
      </ul>
      
      <h2>Conclusão</h2>
      <p>TypeScript é uma ferramenta poderosa que pode melhorar significativamente a qualidade do seu código JavaScript.</p>
    `,
    excerpt: "Um guia completo para começar com TypeScript e melhorar a qualidade do seu código.",
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

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = mockPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: "Post não encontrado",
      description: "O post que você está procurando não foi encontrado.",
    };
  }

  return {
    title: `${post.title} | Lucas Gonçalves`,
    description: post.excerpt || `Leia sobre ${post.title} no blog de Lucas Gonçalves.`,
    keywords: post.tags.map((tag: { name: string }) => tag.name).join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt || `Leia sobre ${post.title} no blog de Lucas Gonçalves.`,
      type: "article",
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      authors: post.author ? [post.author.name] : ["Lucas Gonçalves"],
      images: post.imageUrl
        ? [
            {
              url: post.imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `Leia sobre ${post.title} no blog de Lucas Gonçalves.`,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = mockPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BlogPost post={post} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
