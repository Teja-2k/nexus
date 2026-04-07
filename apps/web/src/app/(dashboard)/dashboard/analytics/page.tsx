import { BarChart3 } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Track conversations, leads, and AI performance
        </p>
      </div>

      <div className="rounded-xl border border-dashed border-border bg-card/50 p-16 text-center">
        <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground/50" />
        <h3 className="mt-4 text-lg font-medium">
          No analytics data yet
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Analytics will populate as your AI agents handle conversations and
          capture leads.
        </p>
      </div>
    </div>
  );
}
