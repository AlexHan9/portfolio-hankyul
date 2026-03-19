import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HanKyul Baik — Global IT Project Manager",
  description: "Results-driven Global IT Project Manager with 10+ years of experience leading complex, large-scale technology projects and programs.",
  openGraph: {
    title: "HanKyul Baik — Global IT Project Manager",
    description: "Results-driven Global IT Project Manager with 10+ years of experience leading complex, large-scale technology projects and programs.",
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
              <span className="text-gray-600 text-sm">Global IT Project Manager (IT Systems & Operations)</span>
            </div>
            <nav>
              <a href="#experience" className="navlink">Experience</a>
              <a href="#projects" className="navlink">Projects</a>
              <a href="#skills" className="navlink">Skills</a>
              <a href="#contact" className="navlink">Contact</a>
              <a href="/resume.pdf" target="_blank" className="navlink">Resume</a>
            </nav>
          </header>
          {children}
          <footer className="py-10 text-gray-500 text-sm">
            © 2026 HanKyul Baik — La Habra, CA
          </footer>
        </div>
      </body>
    </html>
  );
}
