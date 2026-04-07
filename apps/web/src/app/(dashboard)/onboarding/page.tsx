"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useRef, useEffect, useState } from "react";
import { Send, Sparkles, Bot, User, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

function renderTextWithBold(text: string) {
  return text.split("\n").map((line, i) => (
    <p key={i} className={i > 0 ? "mt-2" : ""}>
      {line.split("**").map((segment, j) =>
        j % 2 === 1 ? <strong key={j}>{segment}</strong> : segment
      )}
    </p>
  ));
}

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

export default function OnboardingPage() {
  const [inputValue, setInputValue] = useState("");

  const { messages: chatMessages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/onboarding" }) as any,
  });

  const messages = [welcomeMessage, ...chatMessages];

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const isStreaming = status === "streaming" || status === "submitted";

  function handleSend() {
    const text = inputValue.trim();
    if (!text || isStreaming) return;
    setInputValue("");
    sendMessage({ text });
  }

  return (
    <div className="mx-auto flex h-[calc(100vh-8rem)] max-w-3xl flex-col">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Business Onboarding</h1>
          <p className="text-sm text-muted-foreground">
            Tell me about your business and I'll set up your AI team
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto rounded-xl border border-border bg-card/50 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.role === "assistant" && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
              )}
              <div className="max-w-[80%] space-y-2">
                {message.parts?.map((part, i) => {
                  if (part.type === "text" && part.text.trim()) {
                    return (
                      <div
                        key={i}
                        className={cn(
                          "rounded-xl px-4 py-3 text-sm leading-relaxed",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-foreground"
                        )}
                      >
                        {renderTextWithBold(part.text)}
                      </div>
                    );
                  }

                  if (part.type.startsWith("tool-")) {
                    const toolPart = part as {
                      type: string;
                      toolCallId: string;
                      state: string;
                      output?: unknown;
                    };
                    const toolName = toolPart.type.replace("tool-", "");

                    if (toolPart.state === "output-available") {
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-lg border border-border/60 bg-background px-3 py-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          <span>
                            {toolName === "extractBusinessInfo"
                              ? "Business info saved"
                              : toolName === "createKnowledgeEntry"
                                ? "Knowledge entry created"
                                : toolName === "validateBusinessData"
                                  ? "Data validation complete"
                                  : `${toolName} completed`}
                          </span>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-lg border border-border/60 bg-background px-3 py-2 text-xs text-muted-foreground"
                      >
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        <span>
                          {toolName === "extractBusinessInfo"
                            ? "Saving business info..."
                            : toolName === "createKnowledgeEntry"
                              ? "Creating knowledge entry..."
                              : `Running ${toolName}...`}
                        </span>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
              {message.role === "user" && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent">
                  <User className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}

          {isStreaming &&
            messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-xl bg-accent px-4 py-3">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="mt-4 flex gap-2">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Tell me about your business..."
          className="flex-1 resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          rows={1}
          disabled={isStreaming}
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={isStreaming || !inputValue.trim()}
          className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {isStreaming ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
