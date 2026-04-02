import {
  pgTable,
  text,
  timestamp,
  jsonb,
  pgEnum,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";

export const websiteStatusEnum = pgEnum("website_status", [
  "generating",
  "draft",
  "published",
  "archived",
]);

export const generatedWebsites = pgTable(
  "generated_websites",
  {
    id: text("id").primaryKey(),
    orgId: text("org_id")
      .references(() => organizations.id, { onDelete: "cascade" })
      .notNull(),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    status: websiteStatusEnum("status").default("generating").notNull(),
    pages: jsonb("pages"),
    theme: jsonb("theme"),
    seoMetadata: jsonb("seo_metadata"),
    blobStoragePrefix: text("blob_storage_prefix"),
    conversationId: text("conversation_id"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("websites_org_slug_idx").on(table.orgId, table.slug),
  ]
);
