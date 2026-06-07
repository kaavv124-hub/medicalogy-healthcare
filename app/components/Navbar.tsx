"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo + Company */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-one.png"
              alt="Medicalogy Healthcare"
              width={120}
              height={50}
              priority
            />

            <div>
              <h1 className="text-lg md:text-3xl font-bold text-blue-700">
                Medicalogy Healthcare
              </h1>

              <p className="text-xs md:text-base text-cyan-600">
                Connecting Healthcare with Technology
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-blue-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 font-medium text-slate-700">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/internships">Internships</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
        <div className="lg:hidden flex flex-col gap-3 mt-4 text-center font-medium text-slate-700">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link href="/internships" onClick={() => setMenuOpen(false)}>Internships</Link>
              <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
              <Link href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
              <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
              <Link href="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

      </div>
    </nav>
  );
}