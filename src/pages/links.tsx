import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import Seo from '@/Components/Seo';
import StoreJsonLd from '@/Components/StoreJsonLd';
import {
  FaArrowRight,
  FaBoxOpen,
  FaInstagram,
  FaMapMarkerAlt,
  FaRegClock,
  FaTruck,
  FaUsers,
  FaWhatsapp,
} from 'react-icons/fa';
import Lightbox, { LightboxImage } from '@/Components/Lightbox';

type LinkItem = {
  label: string;
  icon: ReactElement;
  href?: string;
  internal?: boolean;
  image?: LightboxImage;
};

const links: LinkItem[] = [
  {
    label: 'Catálogo da loja',
    href: '/catalogo',
    icon: <FaBoxOpen />,
    internal: true,
  },
  {
    label: 'WhatsApp da loja',
    href: 'https://wa.me/5598991526700',
    icon: <FaWhatsapp />,
  },
  { label: 'Delivery', href: 'https://wa.me/5598991526700', icon: <FaTruck /> },
  {
    label: 'Grupo de novidades',
    href: 'https://chat.whatsapp.com/LmP05eTl07x69ogya8Vtw5',
    icon: <FaUsers />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/formen_mulltimarcas?igsh=MTcxNDB0bTNpNm5uZA==',
    icon: <FaInstagram />,
  },
  {
    label: 'Horário de funcionamento',
    icon: <FaRegClock />,
    image: {
      src: '/funcionamento.jpg',
      alt: 'Horário de funcionamento da Formen Multimarcas',
    },
  },
  {
    label: 'Como chegar',
    icon: <FaMapMarkerAlt />,
    image: {
      src: '/enderecos.jpg',
      alt: 'Endereços: Mac Center (Cohama, 2º piso, Loja 68) e Shopping Passeio (Cohatrac)',
    },
  },
];

const ROW_CLS =
  'group flex w-full items-center gap-3 rounded-xl border border-accent/30 bg-surface/70 px-4 py-4 text-left text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-canvas';

function RowInner({ item }: { item: LinkItem }) {
  return (
    <>
      <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-accent/10 text-base text-accent transition-colors duration-300 group-hover:bg-canvas/15 group-hover:text-canvas">
        {item.icon}
      </span>
      <span className="font-display text-lg font-bold uppercase tracking-wide">
        {item.label}
      </span>
      <FaArrowRight className="ml-auto text-sm opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
    </>
  );
}

function LinkButton({
  item,
  index,
  onOpenImage,
}: {
  item: LinkItem;
  index: number;
  onOpenImage: (img: LightboxImage) => void;
}) {
  const style = { animationDelay: `${0.06 * index}s` };

  let control: ReactElement;
  if (item.image) {
    const img = item.image;
    control = (
      <button
        type="button"
        onClick={() => onOpenImage(img)}
        className={ROW_CLS}
      >
        <RowInner item={item} />
      </button>
    );
  } else if (item.internal && item.href) {
    control = (
      <Link href={item.href} className={ROW_CLS}>
        <RowInner item={item} />
      </Link>
    );
  } else {
    control = (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={ROW_CLS}
      >
        <RowInner item={item} />
      </a>
    );
  }

  return (
    <li className="animate-rise" style={style}>
      {control}
    </li>
  );
}

export default function LinksPage() {
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);

  return (
    <>
      <Seo
        title="Links"
        path="/links"
        description="Todos os links da Formen Multimarcas: catálogo, WhatsApp, delivery, Instagram, horário e endereços das lojas em São Luís."
      />
      <StoreJsonLd />

      <main className="relative z-[1] flex min-h-screen flex-col items-center px-5 py-14">
        {/* brilho dourado atrás do avatar */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[90px]"
        />

        <div className="relative w-full max-w-md">
          <header className="flex flex-col items-center text-center">
            <div className="animate-rise overflow-hidden rounded-full shadow-[0_0_50px_-12px_rgba(232,168,46,0.7)] ring-2 ring-accent">
              <Image
                src="/logo.jpeg"
                alt="Logo Formen Multimarcas"
                width={112}
                height={112}
                priority
                className="h-28 w-28 object-cover"
              />
            </div>

            <h1
              className="animate-rise mt-5 font-display text-4xl font-extrabold uppercase leading-none tracking-tight"
              style={{ animationDelay: '0.05s' }}
            >
              For<span className="text-accent">men</span> Multimarcas
            </h1>

            <p
              className="animate-rise mt-3 text-sm uppercase tracking-[0.25em] text-inkDim"
              style={{ animationDelay: '0.1s' }}
            >
              São Luís — MA
            </p>
            <a
              href="https://www.instagram.com/formen_mulltimarcas?igsh=MTcxNDB0bTNpNm5uZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="animate-rise mt-1 text-sm text-accent transition-colors hover:text-accent-hi"
              style={{ animationDelay: '0.14s' }}
            >
              @formen_mulltimarcas
            </a>
          </header>

          <ul className="mt-10 flex list-none flex-col gap-3">
            {links.map((item, i) => (
              <LinkButton
                key={item.label}
                item={item}
                index={i}
                onOpenImage={setLightbox}
              />
            ))}
          </ul>

          <footer className="mt-12 text-center text-xs uppercase tracking-[0.2em] text-inkDim">
            © {new Date().getFullYear()} Formen Multimarcas
          </footer>
        </div>
      </main>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </>
  );
}

// Página standalone (linktree): sem header/footer do site.
LinksPage.getLayout = (page: ReactElement) => page;
