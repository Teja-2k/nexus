import {
  MessageSquare,
  Users,
  Globe,
  TrendingUp,
  ArrowUpRight,
  Bot,
  Sparkles,
  Zap,
  Activity,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    name: "Conversations",
    value: "0",
    change: "+0%",
    icon: MessageSquare,
    description: "Total this month",
  },
  {
    name: "Leads Captured",
    value: "0",
    change: "+0%",
    icon: Users,
    description: "Qualified leads",
  },
  {
    name: "Websites Live",
    value: "0",
    change: "",
    icon: Globe,
    description: "Published sites",
  },
  {
    name: "AI Cost (MTD)",
    value: "$0.00",
    change: "",
    icon: TrendingUp,
    description: "Month to date",
  },
];

const quickActions = [
  {
    title: "Complete Onboarding",
    description: "Tell our AI about your business to power all your agents",
    href: "/onboarding",
    icon: Sparkles,
    primary: true,
    badge: "Required",
  },
  {
    title: "Configure Chat Agent",
    description: "Set up and customize your AI chat widget",
    href: "/dashboard/agents",
    icon: Bot,
    primary: false,
    badge: null,
  },
  {
    title: "Generate Website",
    description: "Create an AI-powered website for your business",
    href: "/dashboard/websites",
    icon: Globe,
    primary: false,
    badge: null,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Your AI workforce at a glance
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5 px-3 py-1">
            <Activity className="h-3 w-3 text-emerald-500" />
            <span className="text-xs">System Online</span>
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.name}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Get Started</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {quickActions.map((action) => (
            <Link key={action.title} href={action.href}>
              <Card
                className={`group h-full cursor-pointer transition-all hover:shadow-md ${
                  action.primary
                    ? "border-primary/30 bg-primary/5 hover:border-primary/50"
                    : "hover:border-border/80"
                }`}
              >
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-center justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
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
                    {action.badge && (
                      <Badge variant="default" className="text-xs">
                        {action.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold">{action.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {action.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* AI Agents Status */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">AI Workforce Status</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Chat Agent",
                  status: "Ready",
                  model: "sonnet-4.6",
                  active: true,
                },
                {
                  name: "Onboarding Agent",
                  status: "Ready",
                  model: "sonnet-4.6",
                  active: true,
                },
                {
                  name: "Website Generator",
                  status: "Ready",
                  model: "opus-4.6",
                  active: true,
                },
                {
                  name: "Voice Receptionist",
                  status: "Coming Soon",
                  model: "sonnet-4.6",
                  active: false,
                },
                {
                  name: "Sales Agent",
                  status: "Coming Soon",
                  model: "sonnet-4.6",
                  active: false,
                },
                {
                  name: "Review Engine",
                  status: "Coming Soon",
                  model: "haiku-4.5",
                  active: false,
                },
              ].map((agent) => (
                <div
                  key={agent.name}
                  className="flex items-center gap-3 rounded-lg border border-border/60 bg-background/50 p-3"
                >
                  <div
                    className={`h-2 w-2 rounded-full ${
                      agent.active ? "bg-emerald-500" : "bg-muted-foreground/30"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{agent.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {agent.model}
                    </p>
                  </div>
                  <Badge
                    variant={agent.active ? "outline" : "secondary"}
                    className="text-xs shrink-0"
                  >
                    {agent.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity (empty state) */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <MessageSquare className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="mt-4 font-medium">No activity yet</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Complete onboarding to start receiving conversations
            </p>
            <Link href="/onboarding">
              <Button className="mt-4">
                <Sparkles className="mr-2 h-4 w-4" />
                Start Onboarding
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
