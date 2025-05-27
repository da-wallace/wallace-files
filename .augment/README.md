# Augment MCP Configuration

This directory contains the Model Context Protocol (MCP) configuration for Augment Agent, enabling powerful integrations with Prisma database management and browser automation capabilities.

## Available MCP Servers

### 1. Prisma MCP Server
**Purpose**: Database management and Prisma operations
**Command**: `npx -y prisma platform mcp --early-access`

**Capabilities**:
- Create and manage Prisma Postgres databases
- Run schema migrations
- Access Prisma Console
- Database instance management
- Schema generation and updates

**Sample Prompts**:
- "Create a new Postgres database in the US region"
- "Run a migration to add a User table"
- "Show me the current database schema"
- "Create a Product table with name, price, and description fields"

### 2. Browser MCP Server
**Purpose**: Browser automation and web interaction
**Command**: `npx -y @browsermcp/mcp`

**Capabilities**:
- Automate Chrome browser interactions
- Navigate web pages
- Fill forms and submit data
- Extract information from websites
- Interact with web elements (click, type, scroll)

**Requirements**:
- Google Chrome browser installed
- Browser MCP Chrome Extension installed from [Chrome Web Store](https://chromewebstore.google.com/detail/browser-mcp-automate-your/bjfgambnhccakkhmkepdoekmckoijdlc)

**Sample Prompts**:
- "Navigate to GitHub and search for Next.js repositories"
- "Fill out this contact form with my information"
- "Extract all the product prices from this e-commerce page"
- "Take a screenshot of the current page"

## Setup Instructions

### Prerequisites
1. **Node.js and npm/bun** - Already configured in this project
2. **Prisma CLI** - Installed as dev dependency
3. **Google Chrome** - Required for browser automation
4. **Browser MCP Extension** - Install from Chrome Web Store

### Installation Steps

1. **Install Browser MCP Extension**:
   - Visit the [Chrome Web Store](https://chromewebstore.google.com/detail/browser-mcp-automate-your/bjfgambnhccakkhmkepdoekmckoijdlc)
   - Click "Add to Chrome" to install the Browser MCP extension
   - The extension will appear in your Chrome toolbar

2. **Verify Prisma Setup**:
   ```bash
   # Check if Prisma is properly configured
   bun run db:generate
   
   # Test Prisma MCP server (requires Prisma account)
   npx prisma platform mcp --early-access
   ```

3. **Test Browser MCP**:
   ```bash
   # Install and test browser MCP
   npx @browsermcp/mcp
   ```

### Configuration Files

- **`mcp.json`**: Main MCP server configuration
- **`README.md`**: This documentation file

### Environment Configuration

The MCP servers are configured differently for different environments:

- **Development**: Both Prisma and Browser MCP enabled
- **Production**: Only Prisma MCP enabled (browser automation typically not needed in production)

## Usage with Augment Agent

Once configured, you can use natural language prompts with Augment Agent to:

1. **Database Operations**:
   - "Create a new database for this project"
   - "Add a new table for user authentication"
   - "Run pending migrations"

2. **Browser Automation**:
   - "Go to the project's GitHub page and check the latest issues"
   - "Fill out the deployment form on Vercel"
   - "Extract pricing information from competitor websites"

## Troubleshooting

### Prisma MCP Issues
- Ensure you're logged into Prisma Platform: `npx prisma auth login`
- Check early access permissions for MCP features
- Verify DATABASE_URL is properly configured

### Browser MCP Issues
- Ensure Chrome browser is running
- Verify Browser MCP extension is installed and enabled
- Check that Chrome allows the extension to access the current page
- Restart Chrome if the extension isn't responding

### General MCP Issues
- Check that all required npm packages are installed
- Verify network connectivity for downloading MCP servers
- Review Augment Agent logs for specific error messages

## Security Considerations

- **Browser MCP**: Runs locally and uses your existing browser profile, keeping sessions private
- **Prisma MCP**: Requires authentication with Prisma Platform for database operations
- **Data Privacy**: All automation happens locally on your machine

## Contributing

When adding new MCP servers or modifying the configuration:

1. Update the `mcp.json` configuration file
2. Document new capabilities in this README
3. Add sample prompts and use cases
4. Test the configuration in both development and production environments
5. Update any related npm scripts in `package.json`

For more information about MCP, visit the [Model Context Protocol documentation](https://modelcontextprotocol.io/).
