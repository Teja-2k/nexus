import {
  Bot,
  Globe,
  MessageSquare,
  BarChart3,
  Phone,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Brain,
  Users,
  TrendingUp,
  ChevronRight,
  Check,
} from "lucide-react";

function GradientMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />
    </div>
  );
}

const agents = [
  {
    icon: Phone,
    title: "AI Receptionist",
    description:
      "Answers calls 24/7, books appointments, handles FAQs. Speaks multiple languages. Never takes a day off.",
    tag: "Voice + Chat",
  },
  {
    icon: Globe,
    title: "Website Generator",
    description:
      "Describe your business and get a conversion-optimized website in minutes. Auto-updates based on customer behavior.",
    tag: "AI-Powered",
  },
  {
    icon: MessageSquare,
    title: "Chat Agent",
    description:
      "Embeddable widget that knows your business inside out. Captures leads, answers questions, books meetings.",
    tag: "Embeddable",
  },
  {
    icon: TrendingUp,
    title: "Sales Agent",
    description:
      "Follows up every lead automatically. Personalized outreach, objection handling, meeting scheduling.",
    tag: "Coming Soon",
  },
  {
    icon: Star,
    title: "Reputation Engine",
    description:
      "Monitors reviews, responds intelligently, requests reviews from happy customers at the perfect moment.",
    tag: "Coming Soon",
  },
  {
    icon: BarChart3,
    title: "Analytics Nerve Center",
    description:
      "One dashboard: calls handled, leads generated, revenue attributed, customer sentiment, AI costs.",
    tag: "Real-time",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$99",
    period: "/mo",
    description: "Perfect for getting started",
    features: [
      "AI Chat Widget",
      "1 Generated Website",
      "100 AI conversations/mo",
      "Basic Analytics",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$299",
    period: "/mo",
    description: "For growing businesses",
    features: [
      "Everything in Starter",
      "AI Voice Receptionist",
      "3 Generated Websites",
      "1,000 AI conversations/mo",
      "Sales Agent",
      "Review Engine",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Empire",
    price: "$599",
    period: "/mo",
    description: "For serious operators",
    features: [
      "Everything in Growth",
      "Unlimited conversations",
      "Unlimited websites",
      "Custom domain & branding",
      "Social Media Operator",
      "API access",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <GradientMesh />

      {/* Navigation */}
      <nav className="relative z-10 border-b border-border/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">Nexus</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/sign-in"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Sign In
            </a>
            <a
              href="/sign-up"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <Brain className="h-4 w-4 text-primary" />
            <span>AI Business Operating System</span>
          </div>
          <h1 className="mb-6 text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl">
            Your Entire AI Workforce.
            <br />
            <span className="bg-gradient-to-r from-primary via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              One Platform.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Stop juggling 10 tools. Nexus gives your business an AI
            receptionist, website generator, chat agent, and analytics
            dashboard &mdash; all sharing one intelligent brain that gets
            smarter with every interaction.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/sign-up"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
            >
              Start Building for Free
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-card"
            >
              See How It Works
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-card text-xs font-medium text-muted-foreground"
                >
                  {["JM", "SK", "AR", "TL", "PK"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="font-semibold text-foreground">500+</span> businesses
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Live in 5 Minutes
            </h2>
            <p className="text-lg text-muted-foreground">
              No forms. No configuration. Just a conversation.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell Us About Your Business",
                description:
                  "Have a conversation with our AI onboarding agent. It extracts everything — services, hours, FAQs, pricing — automatically.",
                icon: MessageSquare,
              },
              {
                step: "02",
                title: "Your AI Team Deploys",
                description:
                  "Chat widget, website, and analytics go live instantly. All agents share the same business knowledge from day one.",
                icon: Bot,
              },
              {
                step: "03",
                title: "Watch It Work",
                description:
                  "Conversations happen, leads are captured, insights flow in. Every interaction makes your AI team smarter.",
                icon: BarChart3,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card"
              >
                <div className="mb-4 text-sm font-mono text-primary">
                  {item.step}
                </div>
                <item.icon className="mb-4 h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              6 AI Employees. One Brain.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Every agent shares the same knowledge about your business.
              When one learns something, they all know it.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <div
                key={agent.title}
                className="group rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <agent.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground">
                    {agent.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{agent.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Secret Sauce */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card/50 to-violet-500/5 p-10 md:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <Brain className="mx-auto mb-6 h-12 w-12 text-primary" />
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                The Shared Brain
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                This is what no competitor has. All your AI employees share
                a unified context layer. When a customer calls about
                &quot;emergency plumbing&quot;:
              </p>
              <div className="grid gap-4 text-left md:grid-cols-2">
                {[
                  "Voice agent books the appointment instantly",
                  "Website surfaces emergency services higher",
                  "Social media creates a 24/7 availability post",
                  "Sales agent sends a satisfaction follow-up",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-border/40 bg-background/50 p-4"
                  >
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Start free. Scale as you grow. No hidden fees.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-primary bg-card shadow-lg shadow-primary/10"
                    : "border-border/60 bg-card/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="mb-1 text-xl font-semibold">{plan.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <a
                  href="/sign-up"
                  className={`mb-8 block rounded-lg py-2.5 text-center text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border bg-background text-foreground hover:bg-card"
                  }`}
                >
                  {plan.cta}
                </a>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Hire Your AI Team?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join 500+ businesses that replaced 10 tools with one intelligent
            platform. Setup takes 5 minutes.
          </p>
          <a
            href="/sign-up"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
          >
            Start Building for Free
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">Nexus</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-foreground">
              Contact
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nexus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
