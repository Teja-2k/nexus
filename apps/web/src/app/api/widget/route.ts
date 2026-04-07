import {
  streamText,
  convertToModelMessages,
  validateUIMessages,
  tool,
} from "ai";
import { z } from "zod";

export async function POST(req: Request) {
  // CORS headers for cross-origin widget requests
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-nexus-api-key",
  };

  // Validate API key
  const apiKey = req.headers.get("x-nexus-api-key");
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Missing API key" }), {
      status: 401,
      headers,
    });
  }

  // TODO: Validate API key against database and load business context
  // For now, use a placeholder system prompt
  const { messages } = await req.json();
  const validatedMessages = await validateUIMessages(messages);
  const modelMessages = await convertToModelMessages(validatedMessages);

  const result = streamText({
    model: "anthropic/claude-sonnet-4.6" as any,
    system: `You are a helpful AI assistant for a business. Answer questions based on the business context provided. Be friendly, concise, and helpful. If you don't know something, say so honestly.`,
    messages: modelMessages,
    tools: {
      leadCapture: tool({
        description:
          "Capture a visitor's contact information when they express interest.",
        inputSchema: z.object({
          name: z.string(),
          email: z.string().email(),
          phone: z.string().optional(),
          interest: z.string(),
        }),
        execute: async ({ name, email, interest }) => {
          return {
            success: true,
            message: `Thanks ${name}! We've noted your interest in ${interest} and will reach out at ${email}.`,
          };
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, x-nexus-api-key",
    },
  });
}
