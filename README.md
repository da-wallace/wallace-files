# ⚡ Modern T3 Stack Application

A high-performance, production-ready full-stack web application built with the latest technologies:

## 🏗️ Core Stack (The 3 Pillars)
- **🔐 Clerk** - Modern authentication & user management
- **⚛️ React 19** - Latest React with concurrent features
- **🔗 tRPC** - End-to-end type safety

## 🎨 UI & Styling
- **🎨 TailwindUI** - Professional component library (license required)
- **🎯 Headless UI** - Unstyled, accessible UI components
- **🎭 Heroicons** - Beautiful hand-crafted SVG icons
- **🌊 Framer Motion** - Production-ready motion library
- **🎨 Tailwind CSS 4.0** - Latest utility-first CSS framework

## ⚡ Performance & Developer Experience
- **📦 Bun** - Ultra-fast package manager & runtime
- **🚀 Next.js 15** - App Router with Turbo
- **📊 TypeScript 5.8+** - Advanced type safety
- **🔍 Biome** - Lightning-fast linting & formatting
- **🧪 Vitest** - Modern testing framework
- **🏗️ Turbo** - High-performance build system

## 🗄️ Database & Backend
- **🗄️ Prisma** - Type-safe database ORM
- **🐘 PostgreSQL** - Robust relational database
- **📊 Vercel Analytics** - Built-in performance monitoring
- **🚨 Sentry** - Error monitoring & performance tracking

## 🤖 AI Integration (MCP Plugins)
- **🔗 Prisma MCP** - AI-powered database management
- **🌐 Browser MCP** - Automated browser interactions
- **⚡ Augment Agent** - Advanced AI coding assistant

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Clerk account (free at https://clerk.com)
- Doppler CLI (for secure secrets management)

### ⚡ Super Quick Setup (Recommended)

```bash
# 1. Install dependencies
npm install

# 2. Run automated Doppler setup
./scripts/setup-doppler.sh

# 3. Update Clerk keys (get from https://dashboard.clerk.com/)
doppler secrets set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_your_real_key"
doppler secrets set CLERK_SECRET_KEY="sk_test_your_real_key"

# 4. Setup database and start development
npm run db:push    # Push schema to database
npm run dev        # Start development server with Doppler
```

Visit http://localhost:3000

### 📋 Manual Setup (Alternative)

If you prefer manual setup:

1. **Install Doppler CLI:**
   ```bash
   # macOS with Homebrew
   brew install dopplerhq/cli/doppler

   # macOS/Linux without Homebrew
   curl -Ls https://cli.doppler.com/install.sh | sh
   ```

2. **Setup Doppler:**
   ```bash
   npm run doppler:login    # Login to Doppler
   npm run doppler:setup    # Setup project
   ```

3. **Add your secrets:**
   ```bash
   # Database URL
   doppler secrets set DATABASE_URL="postgresql://postgres:password@localhost:5432/wallace-files"

   # Clerk keys (get from https://dashboard.clerk.com/)
   doppler secrets set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_your_key"
   doppler secrets set CLERK_SECRET_KEY="sk_test_your_key"
   ```

4. **Start development:**
   ```bash
   npm run db:push    # Setup database
   npm run dev        # Start with Doppler
   ```



## 🔐 Authentication Setup

1. Create a Clerk account at https://dashboard.clerk.com/
2. Create a new application
3. Copy your publishable key and secret key to `.env`
4. Configure sign-in/sign-up URLs in Clerk dashboard:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in URL: `/dashboard`
   - After sign-up URL: `/dashboard`

## 🤖 AI Integration Setup (MCP Plugins)

This project is configured with Model Context Protocol (MCP) plugins for enhanced AI capabilities:

### 🔗 Prisma MCP Server
Enables AI-powered database management:
- Create and manage databases
- Run schema migrations
- Generate Prisma models
- Access Prisma Console

**Quick Setup:**
```bash
# Automated setup (recommended)
bun run mcp:setup

# Manual setup
npx prisma auth login
bun run mcp:prisma
```

### 🌐 Browser MCP Server
Enables automated browser interactions:
- Navigate web pages
- Fill forms and extract data
- Automate repetitive tasks
- Take screenshots

**Quick Setup:**
```bash
# Automated setup (recommended)
bun run mcp:setup

# Manual setup
# 1. Install Chrome extension: https://chromewebstore.google.com/detail/browser-mcp-automate-your/bjfgambnhccakkhmkepdoekmckoijdlc
# 2. Test the server
bun run mcp:browser
```

### 📁 Configuration Files
- `.augment/mcp.json` - MCP server configuration
- `.augment/README.md` - Detailed setup instructions

**Sample AI Prompts:**
- "Create a new User table with email and name fields"
- "Navigate to GitHub and search for Next.js repositories"
- "Run a database migration to add the new schema"

## 🗄️ Database Schema

The application includes:
- **User** model (synced with Clerk)
- **Post** model (with user relations)

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable components
├── lib/                 # Utility functions
├── server/              # tRPC server code
└── styles/              # Global styles
```

## 🛠️ Available Scripts

### ⚡ Development Commands (with Bun)
- `bun dev` - Start development server with Turbo
- `bun run build` - Build for production
- `bun start` - Start production server
- `bun run preview` - Build and start production locally

### 🗄️ Database Commands
- `bun run db:push` - Push schema to database (dev)
- `bun run db:migrate:dev` - Create and apply migration (dev)
- `bun run db:migrate` - Deploy migrations (prod)
- `bun run db:studio` - Open Prisma Studio
- `bun run db:generate` - Generate Prisma client
- `bun run db:reset` - Reset database
- `bun run db:seed` - Seed database

### 🤖 MCP (AI Plugin) Commands
- `bun run mcp:setup` - Automated MCP setup script
- `bun run mcp:prisma` - Start Prisma MCP server
- `bun run mcp:browser` - Start Browser MCP server
- `bun run mcp:test` - Test MCP server availability
- `bun run mcp:install` - Install MCP dependencies

### 🧪 Testing & Quality
- `bun test` - Run tests with Bun (ultra-fast)
- `bun run test:watch` - Run tests in watch mode
- `bun run ci` - Run all checks (lint + typecheck + test)
- `bun run lint` - Run ESLint
- `bun run typecheck` - Check TypeScript

### 🚀 Deployment
- `bun run setup` - Automated project setup
- `bun run vercel:env` - Pull Vercel environment variables
- `vercel --prod` - Deploy to production

## 🌍 Environment Management

### Local Development
- Use `.env.local` for local environment variables
- Copy from `.env.example` to get started
- Never commit `.env.local` to git

### Staging & Production
- Environment variables managed in Vercel dashboard
- Automatic deployment from git branches
- Use `bun run vercel:env` to sync locally

## 🚀 Deployment Pipeline

### Multi-Stage Deployment
```
Feature Branch → PR → Tests → Staging → Production
     ↓            ↓      ↓        ↓         ↓
   Preview     GitHub  Bun CI   Vercel   Vercel
   Deploy      Actions  Tests   Staging   Prod
```

### Automatic Deployments
- **main branch** → Production
- **staging branch** → Staging environment
- **Feature branches** → Preview deployments

## 📚 Learn More

- [T3 Stack Documentation](https://create.t3.gg/)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)

## ⚡ Performance Features

- **Bun**: 3x faster package installs and test execution
- **Next.js 15 Turbo**: Lightning-fast development builds
- **Vercel Edge**: Global CDN and edge functions
- **TypeScript 5.8+**: Latest performance optimizations
- **Tailwind CSS 4.0**: Modern CSS engine
