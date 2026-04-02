import type { BusinessContext } from "./business-context-loader";

function formatHours(hours: unknown): string {
  if (!hours || typeof hours !== "object") return "Not specified";
  const entries = Object.entries(hours as Record<string, string>);
  return entries.map(([day, time]) => `${day}: ${time}`).join("\n");
}

function groupByCategory(
  entries: BusinessContext["knowledge"]
): Record<string, BusinessContext["knowledge"]> {
  const grouped: Record<string, BusinessContext["knowledge"]> = {};
  for (const entry of entries) {
    if (!grouped[entry.category]) grouped[entry.category] = [];
    grouped[entry.category].push(entry);
  }
  return grouped;
}

export function buildSystemPrompt(
  agentName: string,
  agentRole: string,
  context: BusinessContext
): string {
  const { profile, knowledge } = context;
  const grouped = groupByCategory(knowledge);

  let prompt = `You are ${agentName}, ${agentRole} for ${profile.businessName}.

## About the Business
${profile.description || "No description provided yet."}
${profile.industry ? `Industry: ${profile.industry}` : ""}
${profile.address ? `Location: ${profile.address}` : ""}
${profile.phone ? `Phone: ${profile.phone}` : ""}
${profile.email ? `Email: ${profile.email}` : ""}
${profile.website ? `Website: ${profile.website}` : ""}

## Business Hours
${formatHours(profile.hoursOfOperation)}
`;

  if (grouped.service?.length) {
    prompt += `\n## Services\n`;
    for (const entry of grouped.service) {
      prompt += `- **${entry.title}**: ${entry.content}\n`;
    }
  }

  if (grouped.product?.length) {
    prompt += `\n## Products\n`;
    for (const entry of grouped.product) {
      prompt += `- **${entry.title}**: ${entry.content}\n`;
    }
  }

  if (grouped.faq?.length) {
    prompt += `\n## Frequently Asked Questions\n`;
    for (const entry of grouped.faq) {
      prompt += `- **Q: ${entry.title}**\n  A: ${entry.content}\n`;
    }
  }

  if (grouped.policy?.length) {
    prompt += `\n## Policies\n`;
    for (const entry of grouped.policy) {
      prompt += `- **${entry.title}**: ${entry.content}\n`;
    }
  }

  if (grouped.testimonial?.length) {
    prompt += `\n## Customer Testimonials\n`;
    for (const entry of grouped.testimonial) {
      prompt += `- "${entry.content}" — ${entry.title}\n`;
    }
  }

  prompt += `
## Your Behavior Rules
- Always be helpful, professional, and on-brand
- If you don't know something, say so honestly — never make up information
- Use the business context above to answer questions accurately
- Be conversational but concise
- If the visitor seems interested, use the lead capture tool to collect their contact info
`;

  return prompt;
}
