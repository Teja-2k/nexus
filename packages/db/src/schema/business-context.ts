import {
  pgTable,
  text,
  timestamp,
  boolean,
  jsonb,
  integer,
  pgEnum,
  index,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";

export const businessProfiles = pgTable("business_profiles", {
  id: text("id").primaryKey(),
  orgId: text("org_id")
    .references(() => organizations.id, { onDelete: "cascade" })
    .unique()
    .notNull(),
  businessName: text("business_name").notNull(),
  industry: text("industry"),
  description: text("description"),
  address: text("address"),
  phone: text("phone"),
  email: text("email"),
  website: text("website"),
  hoursOfOperation: jsonb("hours_of_operation"),
  timezone: text("timezone").default("America/New_York"),
  onboardingCompleted: boolean("onboarding_completed").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const knowledgeCategoryEnum = pgEnum("knowledge_category", [
  "faq",
  "service",
  "product",
  "policy",
  "team_member",
  "testimonial",
  "custom",
]);

export const knowledgeEntries = pgTable(
  "knowledge_entries",
  {
    id: text("id").primaryKey(),
    orgId: text("org_id")
      .references(() => organizations.id, { onDelete: "cascade" })
      .notNull(),
    category: knowledgeCategoryEnum("category").notNull(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    metadata: jsonb("metadata"),
    isActive: boolean("is_active").default(true).notNull(),
    sortOrder: integer("sort_order").default(0),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("knowledge_org_idx").on(table.orgId),
    index("knowledge_org_category_idx").on(table.orgId, table.category),
  ]
);
