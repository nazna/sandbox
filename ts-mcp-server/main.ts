import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new McpServer({
  name: 'example-mcp-server',
  version: '0.0.1',
});

server.tool('current_time', 'Get current time', () => {
  return {
    content: [{ type: 'text', text: new Date().toISOString() }],
  };
});

server.tool('uuid', 'Generate a UUID', () => {
  return {
    content: [{ type: 'text', text: crypto.randomUUID() }],
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
