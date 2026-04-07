import {
  MessageSquare,
  Phone,
  Globe,
  TrendingUp,
  Star,
  BarChart3,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const agents = [
  {
    name: "Chat Agent",
    description: "Customer-facing chat widget for your website. Answers questions, captures leads, and books appointments.",
    icon: MessageSquare,
    model: "claude-sonnet-4.6",
    costTier: "Medium",
    status: "active" as const,
    conversations: 0,
    features: ["FAQ Answering", "Lead Capture", "Appointment Booking"],
  },
  {
    name: "Voice Receptionist",
    description: "AI phone receptionist that handles calls 24/7, speaks multiple languages, and never misses a call.",
    icon: Phone,
    model: "claude-sonnet-4.6",
    costTier: "Medium",
    status: "coming_soon" as const,
    conversations: 0,
    features: ["Call Handling", "Multi-language", "Appointment Scheduling"],
  },
  {
    name: "Website Generator",
    description: "Creates conversion-optimized websites from your business context. Auto-updates based on customer behavior.",
    icon: Globe,
    model: "claude-opus-4.6",
    costTier: "High",
    status: "active" as const,
    conversations: 0,
    features: ["SEO Optimized", "Mobile-First", "Auto-Updates"],
  },
  {
    name: "Sales Agent",
    description: "Automated lead follow-up with personalized outreach, objection handling, and meeting scheduling.",
    icon: TrendingUp,
    model: "claude-sonnet-4.6",
    costTier: "Medium",
    status: "coming_soon" as const,
    conversations: 0,
    features: ["Follow-ups", "Personalized Outreach", "CRM Sync"],
  },
  {
    name: "Review Manager",
    description: "Monitors reviews across platforms, responds intelligently, and requests reviews from happy customers.",
    icon: Star,
    model: "claude-haiku-4.5",
    costTier: "Low",
    status: "coming_soon" as const,
    conversations: 0,
    features: ["Multi-platform", "Auto-respond", "Review Requests"],
  },
  {
    name: "Analytics Engine",
    description: "Business intelligence dashboard with real-time insights across all your AI agents and channels.",
    icon: BarChart3,
    model: "claude-haiku-4.5",
    costTier: "Low",
    status: "active" as const,
    conversations: 0,
    features: ["Real-time", "Cost Tracking", "Lead Funnel"],
  },
];

export default function AgentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AI Agents</h1>
          <p className="text-muted-foreground">
            Your AI workforce — configure and manage each agent
          </p>
        </div>
        <Badge variant="outline" className="gap-1.5 px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          3 Active
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <Card key={agent.name} className="group relative overflow-hidden">
            {agent.status === "active" && (
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
            )}
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <agent.icon className="h-5 w-5 text-primary" />
                </div>
                <Badge
                  variant={agent.status === "active" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {agent.status === "active" ? "Active" : "Coming Soon"}
                </Badge>
              </div>
              <div className="mt-3">
                <h3 className="font-semibold">{agent.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {agent.description}
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {agent.features.map((feature) => (
                  <Badge
                    key={feature}
                    variant="outline"
                    className="text-[10px] font-normal"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <code className="text-xs text-muted-foreground">
                  {agent.model}
                </code>
                <span className="text-xs text-muted-foreground">
                  {agent.costTier} cost
                </span>
              </div>
              {agent.status === "active" && (
                <Button variant="outline" size="sm" className="w-full">
                  Configure
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
