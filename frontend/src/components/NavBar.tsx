'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  ['Dashboard', '/dashboard'],
  ['Create Test', '/create-test'],
  ['Play', '/play'],
  ['Leaderboard', '/leaderboard']
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-black/20 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="bg-primaryGradient bg-clip-text text-xl font-bold text-transparent">
          Quiz Platform
        </Link>
        <div className="flex gap-4 text-sm">
          {links.map(([label, href]) => (
            <motion.div key={href} whileHover={{ y: -2 }}>
              <Link href={href} className="rounded-full px-3 py-1.5 transition hover:bg-white/10">
                {label}
              </Link>
            </motion.div>
          ))}
        </div>
      </nav>
    </header>
  );
}
