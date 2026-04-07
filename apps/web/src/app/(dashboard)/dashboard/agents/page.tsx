import {
  MessageSquare,
  Phone,
  Globe,
  TrendingUp,
  Star,
  BarChart3,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";

const agents = [
  {
    name: "Chat Agent",
    description: "Customer-facing chat widget for your website",
    icon: MessageSquare,
    model: "claude-sonnet-4.6",
    status: "active",
    conversations: 0,
  },
  {
    name: "Voice Receptionist",
    description: "AI phone receptionist that books appointments",
    icon: Phone,
    model: "claude-sonnet-4.6",
    status: "coming_soon",
    conversations: 0,
  },
  {
    name: "Website Generator",
    description: "AI-powered website creation from your business context",
    icon: Globe,
    model: "claude-opus-4.6",
    status: "active",
    conversations: 0,
  },
  {
    name: "Sales Agent",
    description: "Automated lead follow-up and outreach",
    icon: TrendingUp,
    model: "claude-sonnet-4.6",
    status: "coming_soon",
    conversations: 0,
  },
  {
    name: "Review Manager",
    description: "Monitor and respond to customer reviews",
    icon: Star,
    model: "claude-haiku-4.5",
    status: "coming_soon",
    conversations: 0,
  },
  {
    name: "Analytics Engine",
    description: "Business intelligence and insights",
    icon: BarChart3,
    model: "claude-haiku-4.5",
    status: "active",
    conversations: 0,
  },
];

export default function AgentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Agents</h1>
        <p className="text-muted-foreground">
          Your AI workforce — configure and manage each agent
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <agent.icon className="h-5 w-5 text-primary" />
              </div>
              {agent.status === "active" ? (
                <ToggleRight className="h-6 w-6 text-emerald-500" />
              ) : (
                <span className="rounded-full border border-border bg-background px-2 py-0.5 text-xs text-muted-foreground">
                  Coming Soon
                </span>
              )}
            </div>
            <h3 className="mt-3 font-semibold">{agent.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {agent.description}
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
              <span className="font-mono text-xs text-muted-foreground">
                {agent.model}
              </span>
              <span className="text-xs text-muted-foreground">
                {agent.conversations} conversations
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
