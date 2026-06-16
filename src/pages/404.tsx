import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaBoxOpen, FaWhatsapp } from 'react-icons/fa';
import { SITE } from '@/lib/site';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página não encontrada | {SITE.name}</title>
        <meta name="robots" content="noindex, follow" />
      </Head>

      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-clip px-5 py-24 text-center">
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[clamp(11rem,40vw,30rem)] font-black leading-none tracking-tight text-accent/[0.07]"
        >
          404
        </span>

        <p className="animate-rise text-[0.74rem] font-semibold uppercase tracking-[0.42em] text-accent">
          Erro 404
        </p>

        <h1
          className="animate-rise mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl"
          style={{ animationDelay: '0.06s' }}
        >
          Página não <span className="text-accent">encontrada</span>
        </h1>

        <p
          className="animate-rise mt-5 max-w-[42ch] text-base text-inkDim md:text-lg"
          style={{ animationDelay: '0.12s' }}
        >
          O link pode ter mudado ou a página não existe mais. Mas tem muita
          coisa boa esperando por você.
        </p>

        <div
          className="animate-rise mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: '0.18s' }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-4 font-display text-base font-bold uppercase tracking-wide text-canvas transition-all duration-300 hover:-translate-y-1 hover:bg-accent-hi"
          >
            <FaArrowLeft /> Voltar ao início
          </Link>
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-7 py-4 font-display text-base font-bold uppercase tracking-wide text-ink transition-all duration-300 hover:-translate-y-1 hover:border-ink"
          >
            <FaBoxOpen /> Ver catálogo
          </Link>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-7 py-4 font-display text-base font-bold uppercase tracking-wide text-ink transition-all duration-300 hover:-translate-y-1 hover:border-ink"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
