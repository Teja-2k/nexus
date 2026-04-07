import {
  streamText,
  convertToModelMessages,
  validateUIMessages,
  tool,
} from "ai";
import { z } from "zod";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const validatedMessages = await validateUIMessages(messages);
  const modelMessages = await convertToModelMessages(validatedMessages);

  const result = streamText({
    model: "anthropic/claude-sonnet-4.6" as any,
    system: `You are the Nexus Onboarding Agent. Your job is to learn everything about a business through natural conversation.

## Your Goal
Extract the following information through friendly conversation:
1. Business name and industry
2. Description of what they do (2-3 sentences)
3. Physical address (if applicable)
4. Phone number and email
5. Business hours for each day of the week
6. Top 3-5 services or products they offer (with brief descriptions)
7. Common FAQs their customers ask (at least 3)
8. Any policies customers should know about (returns, cancellation, etc.)

## How to Behave
- Be conversational and warm — this should feel like a friendly chat, not a form
- Ask 2-3 questions at a time, not all at once
- After getting each piece of info, use the appropriate tool to save it
- Give encouraging feedback as they share information
- When you have enough info, use the validateBusinessData tool to check completeness
- If something is missing, ask for it naturally

## Important
- Never skip using the tools — every piece of information must be saved
- Group related questions together
- Start by acknowledging what they've shared and asking follow-up questions`,
    messages: modelMessages,
    tools: {
      extractBusinessInfo: tool({
        description:
          "Save extracted business profile information. Call this whenever you learn core business details.",
        inputSchema: z.object({
          businessName: z.string().optional(),
          industry: z.string().optional(),
          description: z.string().optional(),
          address: z.string().optional(),
          phone: z.string().optional(),
          email: z.string().optional(),
          website: z.string().optional(),
          hoursOfOperation: z.record(z.string(), z.string()).optional(),
        }),
        execute: async (data) => {
          return {
            saved: true,
            fields: Object.keys(data).filter(
              (k) => data[k as keyof typeof data] !== undefined
            ),
          };
        },
      }),
      createKnowledgeEntry: tool({
        description:
          "Create a knowledge base entry (FAQ, service, product, policy). Call this for each individual piece of knowledge.",
        inputSchema: z.object({
          category: z.enum([
            "faq",
            "service",
            "product",
            "policy",
            "testimonial",
            "custom",
          ]),
          title: z.string(),
          content: z.string(),
        }),
        execute: async ({ category, title }) => {
          return { saved: true, category, title };
        },
      }),
      validateBusinessData: tool({
        description:
          "Check if we have enough information to complete onboarding.",
        inputSchema: z.object({
          checkType: z.enum(["full", "partial"]),
        }),
        execute: async ({ checkType }) => {
          return {
            complete: checkType === "full",
            message:
              checkType === "partial"
                ? "Keep going — we need more information"
                : "Onboarding data looks complete!",
          };
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
