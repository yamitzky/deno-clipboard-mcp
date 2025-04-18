import * as clippy from 'https://deno.land/x/clippy/mod.ts'
import { McpServer } from 'npm:@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from 'npm:@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'npm:zod'

// Create an MCP server
const server = new McpServer({
  name: 'Clipboard',
  version: '1.0.0',
})

server.tool('write-text', 'Write text to clipboard', { text: z.string() }, async ({ text }) => {
  await clippy.writeText(text)
  return {
    content: [{ type: 'text', text: 'Text written to clipboard' }],
  }
})

server.tool('read-text', 'Read text from clipboard', {}, async () => {
  return {
    content: [{ type: 'text', text: await clippy.readText() }],
  }
})

if (import.meta.main) {
  console.log('Starting server...')
  const transport = new StdioServerTransport()
  await server.connect(transport)
}
