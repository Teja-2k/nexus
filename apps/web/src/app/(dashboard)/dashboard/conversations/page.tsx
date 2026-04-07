import { MessageSquare } from "lucide-react";

export default function ConversationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Conversations</h1>
        <p className="text-muted-foreground">
          All conversations from your AI chat widget
        </p>
      </div>

      <div className="rounded-xl border border-dashed border-border bg-card/50 p-16 text-center">
        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground/50" />
        <h3 className="mt-4 text-lg font-medium">No conversations yet</h3>
        <p className="mt-2 max-w-md mx-auto text-sm text-muted-foreground">
          Conversations will appear here once your chat widget is live and
          visitors start chatting with your AI agent.
        </p>
      </div>
    </div>
  );
}
