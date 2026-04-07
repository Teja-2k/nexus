"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import type { ChatStatus } from "ai";
import { Sparkles, Bot, CheckCircle2, Loader2 } from "lucide-react";
import {
  Conversation,
  ConversationContent,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
} from "@/components/ai-elements/prompt-input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const welcomeMessage = {
  id: "welcome",
  role: "assistant" as const,
  parts: [
    {
      type: "text" as const,
      text: "Hey there! I'm your Nexus onboarding agent. I'll help you set up your AI workforce by learning about your business.\n\nLet's start simple — **what's your business called, and what do you do?**",
    },
  ],
};

const toolLabels: Record<string, string> = {
  extractBusinessInfo: "Saving business info",
  createKnowledgeEntry: "Creating knowledge entry",
  validateBusinessData: "Validating data",
};

export default function OnboardingPage() {
  const { messages: chatMessages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/onboarding" }) as any,
  });

  const messages = [welcomeMessage, ...chatMessages];
  const isStreaming = status === "streaming" || status === "submitted";

  return (
    <div className="mx-auto flex h-[calc(100vh-8rem)] max-w-3xl flex-col">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-bold">Business Onboarding</h1>
          <p className="text-sm text-muted-foreground">
            Tell me about your business and I'll set up your AI team
          </p>
        </div>
        <Badge variant="outline" className="gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          AI Agent Active
        </Badge>
      </div>

      {/* Chat */}
      <div className="flex-1 overflow-hidden rounded-xl border border-border bg-card/30">
        <Conversation>
          <ConversationContent>
            {messages.map((message) => (
              <Message key={message.id} from={message.role}>
                <div className="flex items-start gap-3">
                  {message.role === "assistant" && (
                    <Avatar className="mt-0.5 h-8 w-8 shrink-0 border border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <MessageContent>
                    {message.parts?.map((part: any, i: number) => {
                      if (part.type === "text" && part.text?.trim()) {
                        return (
                          <MessageResponse key={i}>
                            {part.text}
                          </MessageResponse>
                        );
                      }
                      if (part.type?.startsWith("tool-")) {
                        const toolName = part.type.replace("tool-", "");
                        const state = part.state || "running";
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/50 px-3 py-2 text-xs text-muted-foreground"
                          >
                            {state === "result" || state === "output-available" ? (
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                            ) : (
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            )}
                            <span>
                              {toolLabels[toolName] || toolName}
                              {state === "result" || state === "output-available"
                                ? " — done"
                                : "..."}
                            </span>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </MessageContent>
                </div>
              </Message>
            ))}

            {isStreaming &&
              messages[messages.length - 1]?.role !== "assistant" && (
                <Message from="assistant">
                  <div className="flex items-start gap-3">
                    <Avatar className="mt-0.5 h-8 w-8 shrink-0 border border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <MessageContent>
                      <div className="flex items-center gap-2 py-1">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Thinking...
                        </span>
                      </div>
                    </MessageContent>
                  </div>
                </Message>
              )}
          </ConversationContent>
        </Conversation>
      </div>

      {/* Input */}
      <div className="mt-4">
        <PromptInput
          onSubmit={async (message) => {
            if (message.text?.trim()) {
              sendMessage({ text: message.text });
            }
          }}
          className="border-border bg-card"
        >
          <PromptInputTextarea
            placeholder="Tell me about your business..."
            disabled={isStreaming}
          />
          <PromptInputSubmit
            status={status as ChatStatus}
            disabled={isStreaming}
          />
        </PromptInput>
      </div>
    </div>
  );
}
