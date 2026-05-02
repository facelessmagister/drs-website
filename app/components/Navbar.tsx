"use client";

import Link from "next/link";
import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/quiz", label: "Quiz" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
          <BookOpen className="h-6 w-6" />
          <span className="text-lg font-bold tracking-tight">DRS</span>
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-teal-400 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-slate-300 hover:text-teal-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-slate-700/50 bg-slate-900 px-6 py-4 space-y-3 text-sm font-medium text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)} className="block hover:text-teal-400 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
