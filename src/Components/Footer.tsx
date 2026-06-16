import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const social = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/formen_mulltimarcas?igsh=MTcxNDB0bTNpNm5uZA==',
    icon: <FaInstagram />,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5598991526700',
    icon: <FaWhatsapp />,
  },
];

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-ink/10 bg-canvas">
      <div className="mx-auto max-w-shell px-5 py-12 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight md:text-6xl">
              For<span className="text-accent">men</span>
            </p>
            <p className="mt-3 max-w-sm text-sm text-inkDim">
              Multimarcas masculina em São Luís. Peça pelo WhatsApp e receba em
              casa.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {social.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-lg text-ink transition-colors hover:border-accent hover:bg-accent hover:text-canvas"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs uppercase tracking-[0.18em] text-inkDim sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Formen Multimarcas</span>
          <Link
            href="/catalogo"
            className="transition-colors hover:text-accent"
          >
            Ver catálogo completo
          </Link>
        </div>
      </div>
    </footer>
  );
}
