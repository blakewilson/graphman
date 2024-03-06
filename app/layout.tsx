import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Graphman - Test and share GraphQL requests.",
  description: "Graphman lets you test and share GraphQL requests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-background">{children}</body>
    </html>
  );
}
