import {
  pgTable,
  text,
  timestamp,
  jsonb,
  date,
  numeric,
  pgEnum,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";

export const eventTypeEnum = pgEnum("event_type", [
  "widget_opened",
  "widget_message_sent",
  "lead_captured",
  "website_visit",
  "appointment_booked",
  "onboarding_completed",
  "website_generated",
]);

export const analyticsEvents = pgTable(
  "analytics_events",
  {
    id: text("id").primaryKey(),
    orgId: text("org_id")
      .references(() => organizations.id, { onDelete: "cascade" })
      .notNull(),
    eventType: eventTypeEnum("event_type").notNull(),
    properties: jsonb("properties"),
    visitorId: text("visitor_id"),
    sessionId: text("session_id"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("analytics_org_idx").on(table.orgId),
    index("analytics_org_type_idx").on(table.orgId, table.eventType),
  ]
);

export const metricTypeEnum = pgEnum("metric_type", [
  "conversations_count",
  "messages_count",
  "leads_captured",
  "ai_cost_usd",
  "widget_opens",
  "website_visits",
]);

export const dailyMetrics = pgTable(
  "daily_metrics",
  {
    orgId: text("org_id")
      .references(() => organizations.id, { onDelete: "cascade" })
      .notNull(),
    date: date("date").notNull(),
    metricType: metricTypeEnum("metric_type").notNull(),
    value: numeric("value", { precision: 15, scale: 4 }).notNull(),
  },
  (table) => [
    uniqueIndex("daily_metrics_unique_idx").on(
      table.orgId,
      table.date,
      table.metricType
    ),
  ]
);
