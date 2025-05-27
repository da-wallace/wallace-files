#!/bin/bash

# T3 Fullstack App - Modern High-Performance Setup
# Optimized for Bun + Vercel + Latest Technologies

set -e

echo "⚡ T3 Modern Stack Setup"
echo "======================="
echo "🚀 Bun + Vercel + Next.js 15 + TypeScript"
echo ""

# Check if Bun is installed
if ! command -v bun &> /dev/null; then
    echo "❌ Bun is not installed."
    echo ""
    echo "Installing Bun (latest)..."
    curl -fsSL https://bun.sh/install | bash
    export PATH="$HOME/.bun/bin:$PATH"
    echo "✅ Bun installed successfully"
else
    echo "✅ Bun found ($(bun --version))"
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "🔧 Installing Vercel CLI..."
    bun add -g vercel@latest
    echo "✅ Vercel CLI installed"
else
    echo "✅ Vercel CLI found ($(vercel --version))"
fi

# Install dependencies with Bun (fastest package manager)
echo ""
echo "📦 Installing dependencies with Bun..."
echo "⚡ This is significantly faster than npm/yarn..."
bun install

echo "✅ Dependencies installed"

# Setup environment file
echo ""
echo "🔧 Setting up environment variables..."

if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo "✅ Created .env.local from .env.example"
else
    echo "⚠️  .env.local already exists, skipping copy"
fi

# Generate Prisma client
echo ""
echo "🗄️  Generating Prisma client..."
bun run db:generate

echo ""
echo "🎉 Modern setup complete!"
echo ""
echo "🚀 Quick Start:"
echo "1. Update .env.local with your values:"
echo "   - DATABASE_URL (PostgreSQL)"
echo "   - CLERK_SECRET_KEY (from https://dashboard.clerk.com/)"
echo "   - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"
echo ""
echo "2. Start development (with Turbo!):"
echo "   bun dev"
echo ""
echo "3. Run tests:"
echo "   bun test"
echo ""
echo "4. Deploy to Vercel:"
echo "   vercel --prod"
echo ""
echo "⚡ Performance Features Enabled:"
echo "   ✅ Bun package manager (3x faster installs)"
echo "   ✅ Next.js 15 with Turbo (faster builds)"
echo "   ✅ TypeScript 5.8+ (latest features)"
echo "   ✅ Prisma generate optimization"
echo "   ✅ Vercel edge runtime ready"
echo ""
echo "🔗 Useful Commands:"
echo "   bun run ci          # Run all checks (lint + typecheck + test)"
echo "   bun run db:studio   # Open Prisma Studio"
echo "   bun run vercel:env  # Pull Vercel env vars locally"
