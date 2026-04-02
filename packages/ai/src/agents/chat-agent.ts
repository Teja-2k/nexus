import { streamText, tool } from "ai";
import { z } from "zod";
import { loadBusinessContext } from "../context/business-context-loader";
import { buildSystemPrompt } from "../context/prompt-builder";
import type { ModelMessage } from "ai";

export async function runChatAgent(
  orgId: string,
  messages: ModelMessage[],
  model: string = "anthropic/claude-sonnet-4.6"
) {
  const context = await loadBusinessContext(orgId);

  if (!context) {
    throw new Error("Business profile not found. Complete onboarding first.");
  }

  const systemPrompt = buildSystemPrompt(
    "Nexus Chat Agent",
    "a friendly and knowledgeable AI assistant",
    context
  );

  return streamText({
    model: model as any,
    system: systemPrompt,
    messages,
    tools: {
      leadCapture: tool({
        description:
          "Capture a lead's contact information when they express interest or ask about booking/purchasing. Use this proactively when the conversation suggests buying intent.",
        inputSchema: z.object({
          name: z.string().describe("The visitor's full name"),
          email: z.string().email().describe("The visitor's email address"),
          phone: z.string().optional().describe("The visitor's phone number"),
          interest: z
            .string()
            .describe("What the visitor is interested in"),
        }),
        execute: async ({ name, email, phone, interest }) => {
          return {
            success: true,
            message: `Lead captured: ${name} (${email}) interested in ${interest}`,
          };
        },
      }),
      appointmentSuggest: tool({
        description:
          "Suggest available appointment times based on the business hours. Use when a visitor wants to schedule a meeting or visit.",
        inputSchema: z.object({
          preferredDay: z
            .string()
            .optional()
            .describe("The day the visitor prefers"),
          serviceType: z
            .string()
            .describe("The type of service or reason for the appointment"),
        }),
        execute: async ({ preferredDay, serviceType }) => {
          return {
            availableTimes: [
              "Tomorrow at 10:00 AM",
              "Tomorrow at 2:00 PM",
              "Day after tomorrow at 11:00 AM",
            ],
            serviceType,
            note: "These are suggested times. The business will confirm availability.",
          };
        },
      }),
    },
  });
}
