import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-powered platform for preparing for mock interviews ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* 👇 Structured data for AI + search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "NGOBOKA Alain Beni",
              "jobTitle": "Fullstack Developer",
              "url": "https://prepwisee.netlify.app",
              "email": "mailto:ngobokaben@gmail.com",
              "image": "https://prepwisee.vercel.app/beni.png",
              "description": "Young Rwandan developer who built the PrepWise platform and specializes in React, Node.js, Express js, SQL, NOSQL database, TypeScript, and Next.js.",
              "birthDate": "2008-01-01",
              "sameAs": [
                "https://github.com/esmukingi"
              ],
              "mainEntityOfPage": {
                "@type": "WebSite",
                "@id": "https://prepwisee.netlify.app",
                "name": "PrepWise",
                "description": "PrepWise is an AI-powered platform for preparing for mock interviews. It helps users simulate interviews, receive feedback, and enhance their skills."
              }
            }),
          }}
        />


      </head>
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
