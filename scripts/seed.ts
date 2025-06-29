import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Criar categorias
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: "react" },
      update: {},
      create: {
        name: "React",
        slug: "react",
        description: "Artigos sobre React, hooks, componentes e boas práticas",
      },
    }),
    prisma.category.upsert({
      where: { slug: "nextjs" },
      update: {},
      create: {
        name: "Next.js",
        slug: "nextjs",
        description:
          "Tutoriais e dicas sobre Next.js e desenvolvimento full-stack",
      },
    }),
    prisma.category.upsert({
      where: { slug: "typescript" },
      update: {},
      create: {
        name: "TypeScript",
        slug: "typescript",
        description: "Guias sobre TypeScript, tipos e desenvolvimento tipado",
      },
    }),
    prisma.category.upsert({
      where: { slug: "inteligencia-artificial" },
      update: {},
      create: {
        name: "Inteligência Artificial",
        slug: "inteligencia-artificial",
        description: "Artigos sobre IA, machine learning e suas aplicações",
      },
    }),
    prisma.category.upsert({
      where: { slug: "desenvolvimento-web" },
      update: {},
      create: {
        name: "Desenvolvimento Web",
        slug: "desenvolvimento-web",
        description: "Dicas e tutoriais sobre desenvolvimento web moderno",
      },
    }),
  ]);

  // Criar tags
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { slug: "react-hooks" },
      update: {},
      create: { name: "React Hooks", slug: "react-hooks" },
    }),
    prisma.tag.upsert({
      where: { slug: "server-components" },
      update: {},
      create: { name: "Server Components", slug: "server-components" },
    }),
    prisma.tag.upsert({
      where: { slug: "typescript-tips" },
      update: {},
      create: { name: "TypeScript Tips", slug: "typescript-tips" },
    }),
    prisma.tag.upsert({
      where: { slug: "ai-development" },
      update: {},
      create: { name: "AI Development", slug: "ai-development" },
    }),
    prisma.tag.upsert({
      where: { slug: "performance" },
      update: {},
      create: { name: "Performance", slug: "performance" },
    }),
  ]);

  // Criar usuário autor
  const author = await prisma.user.upsert({
    where: { email: "lucas@exemplo.com" },
    update: {},
    create: {
      name: "Lucas Gonçalves",
      email: "lucas@exemplo.com",
    },
  });

  // Criar posts
  const posts = [
    {
      title: "Como usar React Hooks de forma eficiente",
      slug: "como-usar-react-hooks-eficientemente",
      excerpt:
        "Aprenda as melhores práticas para usar React Hooks e evitar problemas comuns de performance e re-renders.",
      content: `
        <h2>Introdução aos React Hooks</h2>
        <p>React Hooks revolucionaram a forma como escrevemos componentes funcionais. Eles nos permitem usar estado e outros recursos do React sem precisar de classes.</p>
        
        <h3>useState - Gerenciando Estado</h3>
        <p>O useState é o hook mais básico e fundamental. Ele permite que componentes funcionais tenham estado local.</p>
        
        <pre><code>const [count, setCount] = useState(0);</code></pre>
        
        <h3>useEffect - Efeitos Colaterais</h3>
        <p>O useEffect é usado para executar efeitos colaterais em componentes funcionais, como chamadas de API, subscriptions, ou manipulação do DOM.</p>
        
        <h3>useMemo e useCallback - Otimização de Performance</h3>
        <p>Esses hooks são essenciais para otimizar a performance de aplicações React, evitando re-renders desnecessários.</p>
        
        <h2>Conclusão</h2>
        <p>Dominar os React Hooks é fundamental para qualquer desenvolvedor React moderno. Eles tornam o código mais limpo, reutilizável e fácil de testar.</p>
      `,
      categoryId: categories[0].id, // React
      authorId: author.id,
      published: true,
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      tags: [tags[0].id], // React Hooks
    },
    {
      title: "Next.js 14: Novidades e Melhorias",
      slug: "nextjs-14-novidades-melhorias",
      excerpt:
        "Descubra as principais novidades do Next.js 14, incluindo Server Components, App Router e melhorias de performance.",
      content: `
        <h2>O que há de novo no Next.js 14</h2>
        <p>O Next.js 14 trouxe várias melhorias significativas que tornam o desenvolvimento ainda mais eficiente e performático.</p>
        
        <h3>Server Components por Padrão</h3>
        <p>O App Router agora usa Server Components por padrão, o que melhora significativamente a performance e SEO das aplicações.</p>
        
        <h3>Melhorias no Turbopack</h3>
        <p>O Turbopack agora é mais estável e rápido, oferecendo uma experiência de desenvolvimento superior.</p>
        
        <h3>Partial Prerendering</h3>
        <p>Uma nova funcionalidade que permite renderizar partes estáticas e dinâmicas da página de forma otimizada.</p>
        
        <h2>Como migrar para o Next.js 14</h2>
        <p>Migrar para o Next.js 14 é relativamente simples, mas requer atenção a algumas mudanças importantes na estrutura do projeto.</p>
        
        <h2>Conclusão</h2>
        <p>O Next.js 14 representa um grande passo em direção ao futuro do desenvolvimento web, com foco em performance e experiência do desenvolvedor.</p>
      `,
      categoryId: categories[1].id, // Next.js
      authorId: author.id,
      published: true,
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      tags: [tags[1].id], // Server Components
    },
    {
      title: "TypeScript: Dicas para Código Mais Limpo",
      slug: "typescript-dicas-codigo-limpo",
      excerpt:
        "Aprenda técnicas avançadas do TypeScript para escrever código mais limpo, seguro e manutenível.",
      content: `
        <h2>Por que TypeScript?</h2>
        <p>TypeScript adiciona tipagem estática ao JavaScript, tornando o código mais seguro e fácil de manter.</p>
        
        <h3>Interfaces vs Types</h3>
        <p>Entenda quando usar interfaces e quando usar types, e como cada um pode melhorar seu código.</p>
        
        <h3>Generics</h3>
        <p>Generics permitem criar componentes reutilizáveis que funcionam com diferentes tipos de dados.</p>
        
        <h3>Utility Types</h3>
        <p>TypeScript oferece vários utility types que facilitam a manipulação de tipos existentes.</p>
        
        <h2>Boas Práticas</h2>
        <p>Algumas dicas para escrever TypeScript de forma mais eficiente e legível.</p>
        
        <h2>Conclusão</h2>
        <p>TypeScript é uma ferramenta poderosa que, quando usada corretamente, pode transformar a qualidade do seu código.</p>
      `,
      categoryId: categories[2].id, // TypeScript
      authorId: author.id,
      published: true,
      featured: false,
      imageUrl:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop",
      tags: [tags[2].id], // TypeScript Tips
    },
    {
      title: "Inteligência Artificial no Desenvolvimento Web",
      slug: "inteligencia-artificial-desenvolvimento-web",
      excerpt:
        "Como a IA está transformando o desenvolvimento web e quais ferramentas você pode usar hoje.",
      content: `
        <h2>A IA no Desenvolvimento Web</h2>
        <p>A inteligência artificial está revolucionando a forma como desenvolvemos aplicações web, desde automação até geração de código.</p>
        
        <h3>Ferramentas de IA para Desenvolvedores</h3>
        <p>Conheça as principais ferramentas de IA que podem acelerar seu desenvolvimento.</p>
        
        <h3>GitHub Copilot</h3>
        <p>Como usar o GitHub Copilot para gerar código mais rapidamente e com melhor qualidade.</p>
        
        <h3>ChatGPT para Desenvolvimento</h3>
        <p>Dicas para usar o ChatGPT de forma eficiente no seu fluxo de desenvolvimento.</p>
        
        <h3>IA em Testes</h3>
        <p>Como a IA pode ajudar na criação e manutenção de testes automatizados.</p>
        
        <h2>O Futuro da IA no Desenvolvimento</h2>
        <p>O que esperar dos próximos anos em termos de IA no desenvolvimento de software.</p>
        
        <h2>Conclusão</h2>
        <p>A IA não vai substituir desenvolvedores, mas vai transformar a forma como trabalhamos.</p>
      `,
      categoryId: categories[3].id, // IA
      authorId: author.id,
      published: true,
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      tags: [tags[3].id], // AI Development
    },
    {
      title: "Otimização de Performance em Aplicações React",
      slug: "otimizacao-performance-aplicacoes-react",
      excerpt:
        "Técnicas práticas para melhorar a performance de suas aplicações React e Next.js.",
      content: `
        <h2>Por que Performance Importa</h2>
        <p>A performance é um fator crucial para a experiência do usuário e SEO. Aprenda como otimizar suas aplicações React.</p>
        
        <h3>Code Splitting</h3>
        <p>Como dividir seu código em chunks menores para carregamento mais rápido.</p>
        
        <h3>Lazy Loading</h3>
        <p>Técnicas para carregar componentes e recursos apenas quando necessário.</p>
        
        <h3>Memoização</h3>
        <p>Como usar React.memo, useMemo e useCallback para evitar re-renders desnecessários.</p>
        
        <h3>Bundle Analysis</h3>
        <p>Ferramentas para analisar e otimizar o tamanho do seu bundle.</p>
        
        <h2>Ferramentas de Monitoramento</h2>
        <p>Como monitorar a performance de suas aplicações em produção.</p>
        
        <h2>Conclusão</h2>
        <p>A otimização de performance é um processo contínuo que pode ter um impacto significativo na experiência do usuário.</p>
      `,
      categoryId: categories[4].id, // Desenvolvimento Web
      authorId: author.id,
      published: true,
      featured: false,
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      tags: [tags[4].id], // Performance
    },
  ];

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        categoryId: post.categoryId,
        authorId: post.authorId,
        published: post.published,
        featured: post.featured,
        imageUrl: post.imageUrl,
        tags: {
          connect: post.tags.map((tagId) => ({ id: tagId })),
        },
      },
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
