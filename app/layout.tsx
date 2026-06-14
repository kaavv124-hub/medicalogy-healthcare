import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medicalogy Healthcare | Biomedical Engineering Internships, Projects & Healthcare Solutions",
  description:
    "Medicalogy Healthcare provides Biomedical Engineering internships, academic projects, healthcare technology solutions, medical equipment services, training programs and industry-oriented learning opportunities.",
  keywords: [
    "Biomedical Engineering Internship",
    "Biomedical Projects",
    "Medical Equipment Service",
    "Healthcare Technology",
    "Biomedical Training",
    "Medicalogy Healthcare",
    "Biomedical Engineering Chennai",
    "Biomedical Internship Chennai",
    "Healthcare Solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

  <Navbar />

  {children}

</body>
    </html>
  );
}
