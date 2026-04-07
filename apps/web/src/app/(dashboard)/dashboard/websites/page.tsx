import { Globe, Plus } from "lucide-react";

export default function WebsitesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Websites</h1>
          <p className="text-muted-foreground">
            AI-generated websites for your business
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          <Plus className="h-4 w-4" />
          Generate Website
        </button>
      </div>

      <div className="rounded-xl border border-dashed border-border bg-card/50 p-16 text-center">
        <Globe className="mx-auto h-12 w-12 text-muted-foreground/50" />
        <h3 className="mt-4 text-lg font-medium">No websites yet</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Generate a conversion-optimized website powered by your business
          knowledge base. Complete onboarding first.
        </p>
      </div>
    </div>
  );
}
