import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HanKyul Baik — Product Leader & E-commerce Consultant",
  description: "Product leader with 10+ years in e-commerce and APIs.",
  openGraph: {
    title: "HanKyul Baik — Product Leader & E-commerce Consultant",
    description: "Product leader with 10+ years in e-commerce and APIs.",
    url: "https://portfolio-hankyul.vercel.app",
    siteName: "HanKyul Baik — Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="flex items-center justify-between gap-4 py-6">
            <div>
              <strong>HanKyul Baik</strong><br />
              <span className="text-gray-600">Product Leader • E-commerce Consultant</span>
            </div>
            <nav>
              <a href="#experience" className="navlink">Experience</a>
              <a href="#projects" className="navlink">Projects</a>
              <a href="#skills" className="navlink">Skills</a>
              <a href="#contact" className="navlink">Contact</a>
            </nav>
          </header>
          {children}
          <footer className="py-10 text-gray-500 text-sm">
            © 2025 HanKyul Baik — Los Angeles, CA
          </footer>
        </div>
      </body>
    </html>
  );
}
