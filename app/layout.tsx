import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PersonSchema from "@/components/PersonSchema";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://anumadhav.in"),
  title: {
    default: "Anu Madhav | Senior Golang Developer",
    template: "%s | Anu Madhav",
  },
  description:
    "Anu Madhav - Senior Golang Developer specializing in backend development, microservices architecture, and AWS cloud solutions.",
  keywords: [
    "Anu Madhav",
    "Golang Developer",
    "Backend Developer",
    "Microservices",
    "AWS",
  ],
  authors: [{ name: "Anu Madhav" }],
  creator: "Anu Madhav",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://anumadhav.in",
    title: "Anu Madhav | Senior Golang Developer",
    description:
      "Senior Golang Developer specializing in backend development and microservices",
    siteName: "Anu Madhav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anu Madhav | Senior Golang Developer",
    description: "Senior Golang Developer specializing in backend development",
    creator: "@yourhandle",
  },
  alternates: {
    canonical: "https://anumadhav.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}
