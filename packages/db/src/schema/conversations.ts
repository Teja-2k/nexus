import {
  pgTable,
  text,
  timestamp,
  integer,
  jsonb,
  numeric,
  pgEnum,
  index,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";

export const agentTypeEnum = pgEnum("agent_type", [
  "chat",
  "onboarding",
  "website",
  "voice",
]);

export const conversationStatusEnum = pgEnum("conversation_status", [
  "active",
  "resolved",
  "archived",
]);

export const channelEnum = pgEnum("channel", ["widget", "dashboard", "api"]);

export const sentimentEnum = pgEnum("sentiment", [
  "positive",
  "neutral",
  "negative",
]);

export const conversations = pgTable(
  "conversations",
  {
    id: text("id").primaryKey(),
    orgId: text("org_id")
      .references(() => organizations.id, { onDelete: "cascade" })
      .notNull(),
    agentType: agentTypeEnum("agent_type").notNull(),
    visitorId: text("visitor_id"),
    visitorName: text("visitor_name"),
    visitorEmail: text("visitor_email"),
    channel: channelEnum("channel").default("widget").notNull(),
    status: conversationStatusEnum("status").default("active").notNull(),
    summary: text("summary"),
    sentiment: sentimentEnum("sentiment"),
    leadScore: integer("lead_score"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("conversations_org_idx").on(table.orgId),
    index("conversations_org_status_idx").on(table.orgId, table.status),
  ]
);

export const messageRoleEnum = pgEnum("message_role", [
  "user",
  "assistant",
  "system",
  "tool",
]);

export const messages = pgTable(
  "messages",
  {
    id: text("id").primaryKey(),
    conversationId: text("conversation_id")
      .references(() => conversations.id, { onDelete: "cascade" })
      .notNull(),
    role: messageRoleEnum("role").notNull(),
    content: text("content").notNull(),
    toolCalls: jsonb("tool_calls"),
    tokenUsage: jsonb("token_usage"),
    modelId: text("model_id"),
    costUsd: numeric("cost_usd", { precision: 10, scale: 6 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("messages_conversation_idx").on(table.conversationId),
  ]
);
