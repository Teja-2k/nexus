import {
  MessageSquare,
  Users,
  Globe,
  TrendingUp,
  ArrowUpRight,
  Bot,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    name: "Total Conversations",
    value: "0",
    change: "+0%",
    icon: MessageSquare,
  },
  { name: "Leads Captured", value: "0", change: "+0%", icon: Users },
  { name: "Websites Live", value: "0", change: "", icon: Globe },
  { name: "AI Cost (MTD)", value: "$0.00", change: "", icon: TrendingUp },
];

const quickActions = [
  {
    title: "Complete Onboarding",
    description: "Tell our AI about your business to power all your agents",
    href: "/onboarding",
    icon: Sparkles,
    primary: true,
  },
  {
    title: "Configure Chat Agent",
    description: "Set up and customize your AI chat widget",
    href: "/dashboard/agents",
    icon: Bot,
    primary: false,
  },
  {
    title: "Generate Website",
    description: "Create an AI-powered website for your business",
    href: "/dashboard/websites",
    icon: Globe,
    primary: false,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Your AI workforce at a glance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {stat.name}
              </span>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">{stat.value}</span>
              {stat.change && (
                <span className="flex items-center text-xs text-emerald-500">
                  <ArrowUpRight className="h-3 w-3" />
                  {stat.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Get Started</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className={`group rounded-xl border p-5 transition-all hover:shadow-md ${
                action.primary
                  ? "border-primary/30 bg-primary/5 hover:border-primary/50"
                  : "border-border bg-card hover:border-border/80"
              }`}
            >
              <div
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${
                  action.primary ? "bg-primary/15" : "bg-accent"
                }`}
              >
                <action.icon
                  className={`h-5 w-5 ${
                    action.primary
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                />
              </div>
              <h3 className="font-semibold">{action.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {action.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity (empty state) */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
        <div className="rounded-xl border border-dashed border-border bg-card/50 p-12 text-center">
          <MessageSquare className="mx-auto h-10 w-10 text-muted-foreground/50" />
          <h3 className="mt-4 font-medium">No activity yet</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Complete onboarding to start receiving conversations
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
    </div>
  );
}
