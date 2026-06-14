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
  title: "Medicalogy Healthcare | Biomedical Internships, Projects & Medical Equipment Services",
  description:
    "Medicalogy Healthcare provides Biomedical Engineering internships, academic projects, medical equipment AMC/CMC services, healthcare technology solutions, and industry-oriented training programs.",

  keywords: [
    "Biomedical Engineering Internship",
    "Biomedical Internship Chennai",
    "Biomedical Projects",
    "Medical Equipment AMC",
    "Medical Equipment CMC",
    "Medical Equipment Maintenance",
    "Healthcare Technology",
    "Biomedical Training",
    "Medicalogy Healthcare",
    "Biomedical Engineering",
  ],

  openGraph: {
    title: "Medicalogy Healthcare",
    description:
      "Connecting Healthcare with Technology",
    url: "https://medicalogy-healthcare.vercel.app",
    siteName: "Medicalogy Healthcare",
    images: [
      {
        url: "/logo-one.png",
        width: 1200,
        height: 630,
        alt: "Medicalogy Healthcare",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
