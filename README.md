# Deno Clipboard MCP

A Model Context Protocol (MCP) server for clipboard operations using Deno.

## Overview

This project is to validate an MCP server in Deno, and MCP distribution in binary format.

## Features

- **Read from clipboard**: Retrieve text content from the system clipboard
- **Write to clipboard**: Write text content to the system clipboard
- **MCP Integration**: Fully compatible with the Model Context Protocol
- **Cross-platform**: Supports Linux, macOS, and Windows

## Installation

You can download pre-compiled binaries for your platform from the [Releases](https://github.com/yourusername/deno-clipboard-mcp/releases) page.

Available binaries:
- Linux (x86_64): `clipboard-mcp-linux`
- Linux (ARM64): `clipboard-mcp-linux-arm64`
- macOS (Intel): `clipboard-mcp-macos-x86_64`
- macOS (Apple Silicon): `clipboard-mcp-macos-aarch64`
- Windows: `clipboard-mcp-windows.exe`

## Usage

### Running from source

```bash
deno run --allow-run --allow-env --allow-net main.ts
```

### Running pre-compiled binary

```bash
# Linux/macOS
chmod +x ./clipboard-mcp-[platform]
./clipboard-mcp-[platform]

# Windows
clipboard-mcp-windows.exe
```

### Connecting to the server

This MCP server can be connected to any MCP-compatible client. For example, you can use it with Claude or other AI assistants that support the Model Context Protocol.

```json
{
  "mcpServers": {
    "clipboard": {
      "command": "/path/to/downloaded/clipboard-mcp-[platform]"
    }
  }
}
```

### Available Tools

#### write-text

Writes text to the system clipboard.

Parameters:
- `text` (string): The text to write to the clipboard

#### read-text

Reads text from the system clipboard.

Parameters: None

## License

CC0
