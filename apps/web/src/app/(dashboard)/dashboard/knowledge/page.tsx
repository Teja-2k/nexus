import { Sparkles, Plus } from "lucide-react";
import Link from "next/link";

export default function KnowledgePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Knowledge Base</h1>
          <p className="text-muted-foreground">
            The shared brain powering all your AI agents
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          <Plus className="h-4 w-4" />
          Add Entry
        </button>
      </div>

      <div className="rounded-xl border border-dashed border-border bg-card/50 p-16 text-center">
        <Sparkles className="mx-auto h-12 w-12 text-muted-foreground/50" />
        <h3 className="mt-4 text-lg font-medium">
          Knowledge base is empty
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Complete the onboarding conversation to automatically populate your
          knowledge base with FAQs, services, products, and policies.
        </p>
        <Link
          href="/onboarding"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          <Sparkles className="h-4 w-4" />
          Start Onboarding
        </Link>
      </div>
    </div>
  );
}
