'use client';

import Link from 'next/link';
import { Heart, Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Bộ sưu tập', href: '/collections' },
  { label: 'Khuyến mãi', href: '/promo' },
  { label: 'Về chúng tôi', href: '/about' },
  { label: 'Liên hệ', href: '/contact' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="text-xl font-black tracking-tight">
          VIBE<span className="gradient-text">.LOCAL</span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link className="text-sm font-medium transition hover:text-indigo-500" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          {[Search, User, Heart].map((Icon, idx) => (
            <button key={idx} className="rounded-full border border-slate-300 p-2 dark:border-slate-700">
              <Icon size={16} />
            </button>
          ))}
          <Link href="/cart" className="rounded-full bg-indigo-600 p-2 text-white shadow-glow">
            <ShoppingBag size={16} />
          </Link>
          <ThemeToggle />
        </div>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)}>{open ? <X /> : <Menu />}</button>
      </nav>

      {open && (
        <div className="glass mx-3 mb-3 rounded-2xl p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link href="/cart" className="rounded-xl bg-indigo-600 px-3 py-2 text-sm text-white">Giỏ hàng</Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
