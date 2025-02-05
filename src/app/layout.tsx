import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import NavbarProvider from "@/context/NavbarContext";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Simeon Ilić - Full Stack Developer",
  description: "Explore my portfolio and projects in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const items = [
    {
      text: "What I doo",
      href: "whatIDoo"
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
