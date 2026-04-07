import { Settings, Copy, RefreshCw } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your organization and integrations
        </p>
      </div>

      {/* Widget Embed Code */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Chat Widget</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Add this script to your website to embed the AI chat widget
        </p>
        <div className="mt-4 flex items-center gap-2">
          <code className="flex-1 rounded-lg border border-border bg-background px-4 py-3 font-mono text-sm text-muted-foreground">
            {'<script src="https://app.nexus.ai/api/widget/embed.js?org=YOUR_ORG_ID" async></script>'}
          </code>
          <button className="rounded-lg border border-border bg-background p-3 text-muted-foreground hover:text-foreground">
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* API Key */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">API Key</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Used to authenticate your chat widget and API requests
        </p>
        <div className="mt-4 flex items-center gap-2">
          <code className="flex-1 rounded-lg border border-border bg-background px-4 py-3 font-mono text-sm text-muted-foreground">
            nxs_••••••••••••••••••••••••
          </code>
          <button className="rounded-lg border border-border bg-background p-3 text-muted-foreground hover:text-foreground">
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Branding */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Branding</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Customize your widget and generated websites
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium">Brand Color</label>
            <div className="mt-1 flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-primary" />
              <input
                type="text"
                defaultValue="#6366f1"
                className="rounded-lg border border-border bg-background px-3 py-2 font-mono text-sm"
                readOnly
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Logo</label>
            <div className="mt-1 flex h-10 items-center rounded-lg border border-dashed border-border bg-background px-3 text-sm text-muted-foreground">
              Upload logo (coming soon)
            </div>
          </div>
        </div>
      </div>

      {/* Billing */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Billing</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Current plan: <span className="font-medium text-foreground">Free</span>
            </p>
          </div>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
}
