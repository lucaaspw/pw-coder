# 🚀 Guia de Deploy para Produção

## Opções de Deploy

### 1. **Vercel (Recomendado)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel --prod
```

### 2. **Docker + Docker Compose**
```bash
# Build e start dos containers
docker-compose up -d

# Ver logs
docker-compose logs -f app

# Parar serviços
docker-compose down
```

### 3. **Deploy Manual**
```bash
# Build para produção
npm run build

# Start do servidor
npm start
```

## Configuração de Ambiente

### Variáveis de Ambiente Necessárias

Crie um arquivo `.env` baseado no `env.example`:

```bash
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/pw_coder_db"

# Next.js Configuration
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://lucasgoncalves.dev

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console (opcional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-code

# Security
NEXTAUTH_SECRET=your-nextauth-secret-key
NEXTAUTH_URL=https://lucasgoncalves.dev
```

## Configuração do Banco de Dados

### 1. **PostgreSQL Local**
```bash
# Instalar PostgreSQL
# Windows: https://www.postgresql.org/download/windows/
# macOS: brew install postgresql
# Linux: sudo apt-get install postgresql

# Criar banco
createdb pw_coder_db

# Executar migrações
npx prisma migrate deploy
```

### 2. **PostgreSQL na Nuvem**
- **Supabase**: https://supabase.com
- **Neon**: https://neon.tech
- **Railway**: https://railway.app

### 3. **Executar Migrações**
```bash
# Gerar cliente Prisma
npx prisma generate

# Executar migrações
npx prisma migrate deploy

# Verificar status
npx prisma migrate status
```

## Otimizações de Produção

### 1. **Performance**
- ✅ Imagens otimizadas (WebP/AVIF)
- ✅ Compressão ativada
- ✅ Headers de cache configurados
- ✅ Console removido em produção

### 2. **Segurança**
- ✅ Headers de segurança configurados
- ✅ HSTS ativado
- ✅ XSS Protection
- ✅ Content Type Options

### 3. **SEO**
- ✅ Sitemap automático
- ✅ Robots.txt configurado
- ✅ Meta tags otimizadas
- ✅ Open Graph configurado

## Monitoramento

### 1. **Logs**
```bash
# Vercel
vercel logs

# Docker
docker-compose logs -f app

# Manual
npm start
```

### 2. **Métricas**
- **Vercel Analytics**: Ativado automaticamente
- **Google Analytics**: Configure `NEXT_PUBLIC_GA_ID`
- **Performance**: Lighthouse CI

## Troubleshooting

### Erro de Build
```bash
# Limpar cache
rm -rf .next
npm run build
```

### Erro de Banco de Dados
```bash
# Verificar conexão
npx prisma db pull

# Reset do banco (CUIDADO!)
npx prisma migrate reset
```

### Erro de Porta
```bash
# Verificar porta em uso
netstat -ano | findstr :3000

# Matar processo
taskkill /PID <PID> /F
```

## Checklist de Deploy

- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados configurado
- [ ] Migrações executadas
- [ ] Build bem-sucedido
- [ ] Testes passando
- [ ] SSL/HTTPS configurado
- [ ] Monitoramento ativado
- [ ] Backup configurado

## Suporte

Para dúvidas ou problemas:
- **Documentação**: https://nextjs.org/docs
- **Prisma**: https://www.prisma.io/docs
- **Vercel**: https://vercel.com/docs 