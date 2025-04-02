import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import NavbarProvider from "@/context/NavbarContext";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Simeon Ilić - Full Stack Developer",
  description: "Explore my portfolio and projects in web development.",
  keywords: "full-stack developer, React developer, Next.js, .NET, Spring Boot, web development, software engineer, portfolio",
  openGraph: {
    title: "Simeon Ilić - Full-Stack Developer",
    description: "I build modern web applications using React, Next.js, and .NET. Check out my portfolio and see my latest projects.",
    url: "https://www.simeonilic.dev",
    type: "website",
    images: [
      {
        url: "https://simeonilic.dev/images/thumbnail.png", // ✅ Full URL
        width: 1200,
        height: 630,
        alt: "My Portfolio - Projects by Simeon Ilić",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simeon Ilić - Full-Stack Developer",
    description: "I build modern web applications using React, Next.js, and .NET. Check out my portfolio and see my latest projects.",
  },
  other: {
    "google-site-verification": "mcgBOkf8HRMjBpb6xMbdgu20ns5TYMIChDr4yuHNpvU", // ✅ Add your verification code here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const items = [
    {
      text: "What I do",
      href: "whatIDo"
    },
    {
      text: "About me",
      href: "about"
    },
    {
      text: "Experience",
      href: "experience"
    },
    {
      text: "Tools and languages",
      href: "tools"
    },
    {
      text: "Contact",
      href: "contact"
    },
  ]
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NavbarProvider>
          <div className="max-w-screen-sw w-full sw:px-8 items-center mx-auto my-auto">
            <Navbar items={items} />

          </div>
          
            {children}
          <Footer />
        </NavbarProvider>
      </body>
    </html>
  );
}
