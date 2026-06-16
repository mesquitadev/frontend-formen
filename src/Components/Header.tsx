import React from 'react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-4 px-5 py-4 md:px-10">
        <Link
          href="/"
          aria-label="Formen Multimarcas — início"
          className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink transition-colors hover:text-accent md:text-3xl"
        >
          For<span className="text-accent">men</span>
        </Link>

        <div className="hidden items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-inkDim sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          São Luís · MA
        </div>

        <nav className="flex items-center gap-5">
          <Link
            href="/catalogo"
            className="font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-accent"
          >
            Catálogo
          </Link>
          <a
            href="https://www.instagram.com/formen_mulltimarcas?igsh=MTcxNDB0bTNpNm5uZA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Formen"
            className="text-xl text-ink transition-colors hover:text-accent"
          >
            <FaInstagram />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
