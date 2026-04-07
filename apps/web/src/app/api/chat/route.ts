import {
  streamText,
  convertToModelMessages,
  validateUIMessages,
} from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const validatedMessages = await validateUIMessages(messages);
  const modelMessages = await convertToModelMessages(validatedMessages);

  const result = streamText({
    model: "anthropic/claude-sonnet-4.6" as any,
    system: `You are a Nexus AI assistant helping a business owner manage their AI workforce. Be helpful, concise, and professional.`,
    messages: modelMessages,
  });

  return result.toUIMessageStreamResponse();
}
