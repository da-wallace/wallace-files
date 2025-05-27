# ⚡ Quick Start Guide

Get your modern T3 stack running in 30 seconds with Bun + Vercel!

## 🚀 Lightning Quick Start (Recommended)

1. **Run the automated setup:**
   ```bash
   bun run setup
   ```

2. **Update your environment variables in `.env.local`:**
   ```bash
   # Edit .env.local with your values:
   DATABASE_URL="postgresql://postgres:password@localhost:5432/wallace-files"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_your_real_key"
   CLERK_SECRET_KEY="sk_test_your_real_key"
   ```

3. **Setup your database and start developing:**
   ```bash
   bun run db:push    # Push schema to database
   bun dev           # Start development server with Turbo
   ```

That's it! 🎉

## 📋 Manual Setup (Alternative)

If you prefer manual setup:

### 1. Install Bun
```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash

# Windows
powershell -c "irm bun.sh/install.ps1 | iex"
```

### 2. Install Dependencies
```bash
bun install
```

### 3. Setup Environment
```bash
cp .env.example .env.local
# Edit .env.local with your actual values
```

### 4. Start Development
```bash
bun run db:push    # Setup database
bun dev           # Start development server
```

## 🔍 Verify Everything Works

```bash
# Run all checks
bun run ci

# Test the app
bun dev
```

Visit http://localhost:3000 and you should see your app running!

## 🛠️ Common Commands

```bash
# Development
bun dev              # Start dev server with Turbo
bun run build        # Build for production
bun start            # Start production server

# Database
bun run db:push      # Push schema to database
bun run db:studio    # Open database browser
bun run db:generate  # Generate Prisma client

# Quality & Testing
bun run ci           # Run all checks (lint + typecheck + test)
bun test             # Run tests
bun run lint         # Lint code
bun run typecheck    # Type check
```

## 🆘 Troubleshooting

**Bun not found?**
- Install Bun CLI (see step 1 above)

**Environment variable errors?**
- Check your `.env.local` file
- Copy from `.env.example` if missing

**Database connection errors?**
- Check your `DATABASE_URL` in `.env.local`
- Make sure PostgreSQL is running

**Clerk authentication errors?**
- Get real keys from https://dashboard.clerk.com/
- Update values in `.env.local`

## 🚀 Deployment

Deploy to Vercel with one command:
```bash
vercel --prod
```

## 📚 Next Steps

- Check out the [README.md](./README.md) for detailed documentation
- Explore the [SETUP-CHECKLIST.md](./SETUP-CHECKLIST.md) for what's included
- Set up your Vercel deployment pipeline

Happy coding! 🎉
