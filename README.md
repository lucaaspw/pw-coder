# 🚀 Lucas Gonçalves - Portfolio & Blog

Portfolio profissional e blog desenvolvido com Next.js 15, React 19, TypeScript e Prisma.

## ✨ Características

- **Next.js 15** - Framework React mais recente
- **React 19** - Versão mais atual do React
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework de estilos moderno
- **Prisma** - ORM para banco de dados
- **Framer Motion** - Animações fluidas
- **SEO Otimizado** - Meta tags, sitemap, robots.txt
- **Performance** - Imagens otimizadas, lazy loading
- **Responsivo** - Design mobile-first

## 🚀 Deploy Rápido

### Opção 1: Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Opção 2: Script Automatizado
```bash
# Executar script de deploy
.\deploy.ps1
```

### Opção 3: Docker
```bash
# Build e start
docker-compose up -d
```

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Start do servidor de produção
npm start

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── app/                 # App Router (Next.js 15)
│   ├── blog/           # Páginas do blog
│   ├── demos/          # Demonstrações
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página inicial
├── components/         # Componentes React
│   ├── blog/          # Componentes do blog
│   └── ...            # Outros componentes
└── lib/               # Utilitários e configurações
    └── prisma.ts      # Cliente Prisma
```

## 🗄️ Banco de Dados

### Configuração
1. Instale o PostgreSQL
2. Configure a variável `DATABASE_URL` no `.env`
3. Execute as migrações:

```bash
# Gerar cliente Prisma
npx prisma generate

# Executar migrações
npx prisma migrate deploy
```

### Opções de Hosting
- **Supabase** (Recomendado): https://supabase.com
- **Neon**: https://neon.tech
- **Railway**: https://railway.app

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` baseado no `env.example`:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/pw_coder_db"
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://lucasgoncalves.dev
```

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **First Load JS**: ~156 kB
- **Bundle Size**: Otimizado com tree shaking
- **Images**: WebP/AVIF com lazy loading

## 🔒 Segurança

- Headers de segurança configurados
- HSTS ativado
- XSS Protection
- Content Type Options
- CSP (Content Security Policy)

## 📈 SEO

- Meta tags otimizadas
- Open Graph configurado
- Sitemap automático
- Robots.txt configurado
- Structured data

## 🎨 Design

- Design system consistente
- Componentes reutilizáveis
- Animações suaves
- Dark mode ready
- Acessibilidade (WCAG 2.1)

## 📱 Responsividade

- Mobile-first design
- Breakpoints otimizados
- Touch-friendly
- Performance mobile

## 🚀 Deploy

Veja o guia completo de deploy em [DEPLOY.md](./DEPLOY.md)

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

- **Website**: https://lucasgoncalves.dev
- **Email**: lucas@example.com
- **LinkedIn**: [Lucas Gonçalves](https://linkedin.com/in/lucasgoncalves)
- **GitHub**: [@lucasgoncalves](https://github.com/lucasgoncalves)
