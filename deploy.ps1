# Script de Deploy para Produção
Write-Host "🚀 Iniciando deploy para produção..." -ForegroundColor Green

# Verificar se o Node.js está instalado
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js não encontrado. Instale o Node.js primeiro." -ForegroundColor Red
    exit 1
}

# Verificar se o npm está instalado
if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ npm não encontrado. Instale o npm primeiro." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Node.js e npm encontrados" -ForegroundColor Green

# Limpar cache
Write-Host "🧹 Limpando cache..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
}

# Instalar dependências
Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
npm ci --only=production

# Build para produção
Write-Host "🔨 Fazendo build para produção..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build concluído com sucesso!" -ForegroundColor Green
    
    # Perguntar se quer fazer deploy no Vercel
    $deployVercel = Read-Host "🌐 Fazer deploy no Vercel? (s/n)"
    
    if ($deployVercel -eq "s" -or $deployVercel -eq "S") {
        Write-Host "🚀 Fazendo deploy no Vercel..." -ForegroundColor Yellow
        
        # Verificar se o Vercel CLI está instalado
        if (!(Get-Command vercel -ErrorAction SilentlyContinue)) {
            Write-Host "📦 Instalando Vercel CLI..." -ForegroundColor Yellow
            npm install -g vercel
        }
        
        # Deploy
        vercel --prod
    } else {
        Write-Host "🎯 Para iniciar o servidor de produção:" -ForegroundColor Cyan
        Write-Host "   npm start" -ForegroundColor White
        Write-Host ""
        Write-Host "🎯 Para usar Docker:" -ForegroundColor Cyan
        Write-Host "   docker-compose up -d" -ForegroundColor White
    }
} else {
    Write-Host "❌ Erro no build. Verifique os logs acima." -ForegroundColor Red
    exit 1
}

Write-Host "🎉 Deploy concluído!" -ForegroundColor Green 