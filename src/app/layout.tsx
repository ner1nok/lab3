import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stepan Grigoriev — Frontend Developer",
  description: "Lesson 3 learning project for the Introduction to Web Design with Next.js course",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
