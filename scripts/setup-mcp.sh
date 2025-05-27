#!/bin/bash

# MCP Setup Script for Wallace Files Project
# This script helps developers set up Model Context Protocol (MCP) plugins

set -e

echo "🤖 Setting up MCP (Model Context Protocol) plugins..."
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running on macOS or Linux
if [[ "$OSTYPE" == "darwin"* ]]; then
    OS="macOS"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    OS="Linux"
else
    print_warning "Unsupported OS: $OSTYPE. This script is designed for macOS and Linux."
    exit 1
fi

print_status "Detected OS: $OS"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm/bun is available
if command -v bun &> /dev/null; then
    PACKAGE_MANAGER="bun"
elif command -v npm &> /dev/null; then
    PACKAGE_MANAGER="npm"
else
    print_error "Neither bun nor npm is available. Please install one of them."
    exit 1
fi

print_status "Using package manager: $PACKAGE_MANAGER"

# Check if we're in the right directory
if [[ ! -f "package.json" ]]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if .augment directory exists
if [[ ! -d ".augment" ]]; then
    print_error ".augment directory not found. MCP configuration is missing."
    exit 1
fi

print_success "Found MCP configuration in .augment directory"

# 1. Test Prisma MCP Server
echo ""
print_status "Testing Prisma MCP Server..."

# Check if Prisma is available (use npx instead of global install)
print_status "Checking Prisma CLI availability..."
if npx prisma --version &> /dev/null; then
    print_success "Prisma CLI is available via npx"
else
    print_warning "Prisma CLI test failed, but this may be normal"
fi

# Check Prisma authentication
print_status "Checking Prisma authentication..."
if npx prisma auth status &> /dev/null; then
    print_success "Prisma authentication is configured"
else
    print_warning "Prisma authentication not configured. You may need to run: npx prisma auth login"
fi

# Test Prisma MCP server
print_status "Testing Prisma MCP server availability..."
if timeout 10s npx -y prisma platform mcp --early-access --help &> /dev/null; then
    print_success "Prisma MCP server is available"
else
    print_warning "Prisma MCP server test failed or timed out. This may be normal if you're not logged in."
fi

# 2. Test Browser MCP Server
echo ""
print_status "Testing Browser MCP Server..."

# Test Browser MCP availability (use npx instead of global install)
print_status "Checking Browser MCP server availability..."
if timeout 10s npx -y @browsermcp/mcp --help &> /dev/null; then
    print_success "Browser MCP server is available via npx"
else
    print_warning "Browser MCP server test failed or timed out, but this may be normal"
fi

# 3. Check Chrome browser
echo ""
print_status "Checking for Chrome browser..."

if [[ "$OS" == "macOS" ]]; then
    if [[ -d "/Applications/Google Chrome.app" ]]; then
        print_success "Google Chrome is installed"
    else
        print_warning "Google Chrome not found. Browser MCP requires Chrome."
        print_status "Install Chrome from: https://www.google.com/chrome/"
    fi
elif [[ "$OS" == "Linux" ]]; then
    if command -v google-chrome &> /dev/null || command -v chromium-browser &> /dev/null; then
        print_success "Chrome/Chromium is installed"
    else
        print_warning "Chrome/Chromium not found. Browser MCP requires Chrome."
        print_status "Install Chrome from: https://www.google.com/chrome/"
    fi
fi

# 4. Browser MCP Extension check
echo ""
print_warning "MANUAL STEP REQUIRED: Install Browser MCP Chrome Extension"
print_status "1. Open Chrome browser"
print_status "2. Visit: https://chromewebstore.google.com/detail/browser-mcp-automate-your/bjfgambnhccakkhmkepdoekmckoijdlc"
print_status "3. Click 'Add to Chrome' to install the extension"
print_status "4. The extension should appear in your Chrome toolbar"

# 5. Test MCP scripts
echo ""
print_status "Testing project MCP scripts..."

if [[ "$PACKAGE_MANAGER" == "bun" ]]; then
    print_status "Testing: bun run mcp:test"
    if bun run mcp:test; then
        print_success "MCP test scripts work correctly"
    else
        print_warning "MCP test scripts had issues (this may be normal)"
    fi
else
    print_status "Testing: npm run mcp:test"
    if npm run mcp:test; then
        print_success "MCP test scripts work correctly"
    else
        print_warning "MCP test scripts had issues (this may be normal)"
    fi
fi

# 6. Final instructions
echo ""
print_success "MCP Setup Complete!"
echo "==================="
print_status "Next steps:"
print_status "1. Ensure you're logged into Prisma: npx prisma auth login"
print_status "2. Install the Browser MCP Chrome extension (see link above)"
print_status "3. Test the setup with your AI assistant (Augment, Cursor, etc.)"
print_status ""
print_status "Available MCP commands:"
print_status "- $PACKAGE_MANAGER run mcp:prisma  # Start Prisma MCP server"
print_status "- $PACKAGE_MANAGER run mcp:browser # Start Browser MCP server"
print_status "- $PACKAGE_MANAGER run mcp:test    # Test MCP servers"
print_status ""
print_status "Configuration files:"
print_status "- .augment/mcp.json     # MCP server configuration"
print_status "- .augment/README.md    # Detailed documentation"
print_status ""
print_status "Sample AI prompts to try:"
print_status '- "Create a new User table with email and name fields"'
print_status '- "Navigate to GitHub and search for Next.js repositories"'
print_status '- "Run a database migration to add the new schema"'

echo ""
print_success "🎉 MCP setup is complete! Happy coding with AI assistance!"
