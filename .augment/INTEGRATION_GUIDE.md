# MCP Integration Guide for AI Tools

This guide explains how to integrate the configured MCP servers with various AI development tools.

## Supported AI Tools

### 1. Augment Agent (Current Setup)
This repository is already configured for Augment Agent with the `.augment/mcp.json` configuration file.

**Usage:**
- The MCP servers are automatically available when using Augment Agent
- Use natural language prompts to interact with Prisma and browser automation
- Configuration is loaded from `.augment/mcp.json`

### 2. Cursor IDE
To use these MCP servers with Cursor:

**Global Configuration** (`~/.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "prisma": {
      "command": "npx",
      "args": ["-y", "prisma", "platform", "mcp", "--early-access"]
    },
    "browsermcp": {
      "command": "npx",
      "args": ["-y", "@browsermcp/mcp"]
    }
  }
}
```

**Project Configuration** (`.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "prisma": {
      "command": "npx",
      "args": ["-y", "prisma", "platform", "mcp", "--early-access"]
    },
    "browsermcp": {
      "command": "npx",
      "args": ["-y", "@browsermcp/mcp"]
    }
  }
}
```

### 3. Windsurf IDE
To use these MCP servers with Windsurf:

**Global Configuration** (`~/.codeium/windsurf/mcp_config.json`):
```json
{
  "mcpServers": {
    "prisma": {
      "command": "npx",
      "args": ["-y", "prisma", "platform", "mcp", "--early-access"]
    },
    "browsermcp": {
      "command": "npx",
      "args": ["-y", "@browsermcp/mcp"]
    }
  }
}
```

**Alternative:** Use the Windsurf MCP Plugin Store to install the Prisma MCP plugin directly.

### 4. Claude Desktop
To use these MCP servers with Claude Desktop:

**Configuration File:**
- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "prisma": {
      "command": "npx",
      "args": ["-y", "prisma", "platform", "mcp", "--early-access"]
    },
    "browsermcp": {
      "command": "npx",
      "args": ["-y", "@browsermcp/mcp"]
    }
  }
}
```

### 5. VS Code with GitHub Copilot
For VS Code with MCP support:

**Configuration:** Add to VS Code settings or use the MCP extension configuration.

## Sample Prompts by Use Case

### Database Management (Prisma MCP)
```
"Create a new Postgres database for this project"
"Add a User table with email, name, and createdAt fields"
"Run a migration to add an index on the email field"
"Generate a Prisma model for a Product with name, price, and description"
"Show me the current database schema"
"Create a many-to-many relationship between Users and Products"
```

### Browser Automation (Browser MCP)
```
"Navigate to GitHub and search for Next.js repositories"
"Go to the Vercel dashboard and check deployment status"
"Fill out this contact form with test data"
"Take a screenshot of the current page"
"Extract all product prices from this e-commerce page"
"Click the 'Deploy' button on the Vercel dashboard"
"Scroll down and find the pricing section"
```

### Combined Workflows
```
"Create a User table in the database, then navigate to the admin panel to verify it appears"
"Set up a Product model with Prisma, then go to the e-commerce site to test the product listing"
"Run database migrations, then check the deployment status on Vercel"
```

## Troubleshooting

### Prisma MCP Issues
1. **Authentication Error:**
   ```bash
   npx prisma auth login
   ```

2. **Early Access Not Available:**
   - Ensure you have access to Prisma Platform early access features
   - Check your Prisma account permissions

3. **Database Connection Issues:**
   - Verify `DATABASE_URL` is correctly set
   - Test database connectivity: `npx prisma db push`

### Browser MCP Issues
1. **Chrome Extension Not Installed:**
   - Install from: https://chromewebstore.google.com/detail/browser-mcp-automate-your/bjfgambnhccakkhmkepdoekmckoijdlc
   - Ensure the extension is enabled

2. **Browser Not Responding:**
   - Restart Chrome browser
   - Check if the extension has necessary permissions
   - Verify Chrome is the default browser

3. **Connection Timeout:**
   - Ensure Chrome is running
   - Check firewall settings
   - Try restarting the MCP server

### General MCP Issues
1. **Server Not Starting:**
   ```bash
   # Test individual servers
   bun run mcp:prisma
   bun run mcp:browser
   
   # Run setup script
   bun run mcp:setup
   ```

2. **Configuration Not Loading:**
   - Verify JSON syntax in configuration files
   - Check file permissions
   - Restart your AI tool

## Development Workflow

### For Team Members
1. **Initial Setup:**
   ```bash
   git clone <repository>
   cd wallace-files
   bun install
   bun run mcp:setup
   ```

2. **Daily Usage:**
   - Use AI prompts for database operations
   - Automate browser tasks for testing
   - Combine both for end-to-end workflows

3. **Best Practices:**
   - Test MCP servers before important operations
   - Use descriptive prompts for better results
   - Keep Chrome browser updated for Browser MCP

### For Project Maintainers
1. **Updating MCP Configuration:**
   - Modify `.augment/mcp.json` for new servers
   - Update documentation in `.augment/README.md`
   - Test changes with `bun run mcp:test`

2. **Adding New MCP Servers:**
   - Research available MCP servers
   - Add configuration to `mcp.json`
   - Update setup scripts and documentation
   - Test integration with AI tools

## Security Considerations

- **Prisma MCP:** Requires authentication with Prisma Platform
- **Browser MCP:** Runs locally, uses your existing browser profile
- **Data Privacy:** All automation happens on your local machine
- **Permissions:** Review what each MCP server can access

## Performance Tips

- **Prisma MCP:** Keep database connections optimized
- **Browser MCP:** Close unnecessary browser tabs for better performance
- **General:** Use specific prompts for faster execution

For more detailed information, see the main [README.md](../README.md) and [MCP documentation](.augment/README.md).
