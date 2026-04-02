import {
  pgTable,
  text,
  timestamp,
  boolean,
  jsonb,
  numeric,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { agentTypeEnum } from "./conversations";

export const agentConfigs = pgTable(
  "agent_configs",
  {
    id: text("id").primaryKey(),
    orgId: text("org_id")
      .references(() => organizations.id, { onDelete: "cascade" })
      .notNull(),
    agentType: agentTypeEnum("agent_type").notNull(),
    name: text("name").notNull(),
    isEnabled: boolean("is_enabled").default(true).notNull(),
    systemPromptOverride: text("system_prompt_override"),
    modelPreference: text("model_preference"),
    temperature: numeric("temperature", { precision: 3, scale: 2 }),
    toolsEnabled: jsonb("tools_enabled"),
    widgetConfig: jsonb("widget_config"),
    apiKey: text("api_key"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("agent_configs_org_type_idx").on(
      table.orgId,
      table.agentType
    ),
  ]
);
