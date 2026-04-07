import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus — AI Business Operating System",
  description:
    "Your entire AI workforce in one platform. Voice receptionist, website generator, chat agent, sales automation — all sharing one intelligent brain.",
  openGraph: {
    title: "Nexus — AI Business Operating System",
    description:
      "6 AI employees sharing one brain. Chat agent, website generator, voice receptionist — setup in 5 minutes.",
    images: ["/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus — AI Business Operating System",
    description:
      "6 AI employees sharing one brain. Setup in 5 minutes.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        <TooltipProvider>
          {hasClerkKey ? (
            <ClerkProvider appearance={{ baseTheme: dark }}>
              {children}
            </ClerkProvider>
          ) : (
            children
          )}
        </TooltipProvider>
      </body>
    </html>
  );
}
