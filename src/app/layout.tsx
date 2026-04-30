import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohith Lanka | Web Developer & Designer",
  description: "Front-end Developer with 4+ years of experience building responsive web applications. Specializing in Webflow development, React, Next.js, and modern web design.",
  keywords: ["Webflow Developer", "Frontend Developer", "React", "Next.js", "Web Design", "GSAP"],
  authors: [{ name: "Rohith Lanka" }],
  openGraph: {
    title: "Rohith Lanka | Web Developer & Designer",
    description: "Front-end Developer with 4+ years of experience building responsive web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
