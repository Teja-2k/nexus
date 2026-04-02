import { db } from "@nexus/db";
import { businessProfiles, knowledgeEntries } from "@nexus/db";
import { eq, and } from "drizzle-orm";

export interface BusinessContext {
  profile: {
    businessName: string;
    industry: string | null;
    description: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    website: string | null;
    hoursOfOperation: unknown;
    timezone: string | null;
  };
  knowledge: {
    id: string;
    category: string;
    title: string;
    content: string;
    metadata: unknown;
  }[];
}

export async function loadBusinessContext(
  orgId: string
): Promise<BusinessContext | null> {
  const profile = await db.query.businessProfiles.findFirst({
    where: eq(businessProfiles.orgId, orgId),
  });

  if (!profile) return null;

  const entries = await db.query.knowledgeEntries.findMany({
    where: and(
      eq(knowledgeEntries.orgId, orgId),
      eq(knowledgeEntries.isActive, true)
    ),
    orderBy: (entries, { asc }) => [asc(entries.sortOrder)],
  });

  return {
    profile: {
      businessName: profile.businessName,
      industry: profile.industry,
      description: profile.description,
      address: profile.address,
      phone: profile.phone,
      email: profile.email,
      website: profile.website,
      hoursOfOperation: profile.hoursOfOperation,
      timezone: profile.timezone,
    },
    knowledge: entries.map((e) => ({
      id: e.id,
      category: e.category,
      title: e.title,
      content: e.content,
      metadata: e.metadata,
    })),
  };
}
