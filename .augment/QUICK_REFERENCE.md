# MCP Quick Reference Card

## 🚀 Quick Setup
```bash
# One-command setup
bun run mcp:setup

# Manual steps if needed
npx prisma auth login
# Install Chrome extension: https://chromewebstore.google.com/detail/browser-mcp-automate-your/bjfgambnhccakkhmkepdoekmckoijdlc
```

## 🛠️ Available Commands
```bash
bun run mcp:setup     # Automated setup script
bun run mcp:prisma    # Start Prisma MCP server
bun run mcp:browser   # Start Browser MCP server  
bun run mcp:test      # Test MCP servers
bun run mcp:install   # Install MCP dependencies
```

## 💬 Sample AI Prompts

### Database Operations (Prisma MCP)
```
"Create a new User table with email, name, and createdAt fields"
"Add a Product model with name, price, description, and category"
"Run a migration to add an index on the email field"
"Generate a many-to-many relationship between Users and Products"
"Show me the current database schema"
"Create a migration to add a 'role' field to the User table"
```

### Browser Automation (Browser MCP)
```
"Navigate to GitHub and search for Next.js repositories"
"Go to the Vercel dashboard and check deployment status"
"Take a screenshot of the current page"
"Fill out this contact form with test data"
"Extract all product prices from this e-commerce page"
"Click the 'Deploy' button and wait for completion"
"Scroll down to find the pricing section"
```

### Combined Workflows
```
"Create a User table, then navigate to the admin panel to verify it appears"
"Set up a Product model with Prisma, then test the product listing page"
"Run database migrations, then check deployment status on Vercel"
"Add a new feature to the database, then test it in the browser"
```

## 📁 Configuration Files
- `.augment/mcp.json` - Main MCP configuration
- `.augment/README.md` - Detailed documentation  
- `.augment/INTEGRATION_GUIDE.md` - AI tool integration guide
- `.augment/QUICK_REFERENCE.md` - This quick reference

## 🔧 Troubleshooting

### Prisma Issues
```bash
# Login to Prisma
npx prisma auth login

# Test database connection
npx prisma db push

# Check authentication status
npx prisma auth status
```

### Browser MCP Issues
```bash
# Check if Chrome extension is installed
# Visit: chrome://extensions/

# Restart Chrome if needed
# Ensure extension has permissions

# Test browser MCP
bun run mcp:browser
```

### General Issues
```bash
# Re-run setup
bun run mcp:setup

# Check configuration
cat .augment/mcp.json

# Test individual servers
npx -y prisma platform mcp --early-access --help
npx -y @browsermcp/mcp --help
```

## 🎯 Best Practices

1. **Be Specific**: Use detailed prompts for better results
2. **Test First**: Run `bun run mcp:test` before important operations
3. **Stay Updated**: Keep Chrome browser and extensions updated
4. **Use Safely**: Test database operations in development first
5. **Document**: Add new prompts and workflows to team documentation

## 🔗 Useful Links
- [Prisma MCP Documentation](https://www.prisma.io/docs/postgres/integrations/mcp-server)
- [Browser MCP Chrome Extension](https://chromewebstore.google.com/detail/browser-mcp-automate-your/bjfgambnhccakkhmkepdoekmckoijdlc)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Project README](../README.md)

## 🆘 Getting Help

1. Check the detailed [README.md](.augment/README.md)
2. Review [INTEGRATION_GUIDE.md](.augment/INTEGRATION_GUIDE.md)
3. Run the setup script: `bun run mcp:setup`
4. Test individual components with the troubleshooting commands above

---
*This repository is configured for enhanced AI development with Prisma database management and browser automation capabilities.*
