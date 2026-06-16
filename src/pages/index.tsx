import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Lightbox, { LightboxImage } from '@/Components/Lightbox';

const shots = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
  '/7.jpg',
  '/8.jpg',
];

type LinkItem = {
  label: string;
  desc: string;
  icon: JSX.Element;
  href?: string;
  internal?: boolean;
  external?: boolean;
  image?: LightboxImage;
};

const links: LinkItem[] = [
  {
    label: 'Catálogo da loja',
    desc: 'Navegue por categorias, tamanhos e preços',
    href: '/catalogo',
    icon: <FaBoxOpen />,
    internal: true,
  },
  {
    label: 'WhatsApp da loja',
    desc: 'Tire dúvidas e faça seu pedido',
    href: 'https://wa.me/5598991526700',
    icon: <FaWhatsapp />,
    external: true,
  },
  {
    label: 'Delivery',
    desc: 'Receba a sua compra em casa',
    href: 'https://wa.me/5598991526700',
    icon: <FaTruck />,
    external: true,
  },
  {
    label: 'Grupo de novidades',
    desc: 'Drops e promoções em primeira mão',
    href: 'https://chat.whatsapp.com/LmP05eTl07x69ogya8Vtw5',
    icon: <FaUsers />,
    external: true,
  },
  {
    label: 'Instagram',
    desc: '@formen_mulltimarcas',
    href: 'https://www.instagram.com/formen_mulltimarcas?igsh=MTcxNDB0bTNpNm5uZA==',
    icon: <FaInstagram />,
    external: true,
  },
  {
    label: 'Horário de funcionamento',
    desc: 'Confira os dias e horários',
    icon: <FaRegClock />,
    image: {
      src: '/funcionamento.jpg',
      alt: 'Horário de funcionamento da Formen Multimarcas',
    },
  },
  {
    label: 'Como chegar',
    desc: 'Endereço das lojas',
    icon: <FaMapMarkerAlt />,
    image: {
      src: '/enderecos.jpg',
      alt: 'Endereços: Mac Center (Cohama, 2º piso, Loja 68) e Shopping Passeio (Cohatrac)',
    },
  },
];

function LinkRow({
  item,
  index,
  onOpenImage,
}: {
  item: LinkItem;
  index: number;
  onOpenImage: (img: LightboxImage) => void;
}) {
  const inner = (
    <>
      <span className="grid h-11 w-11 flex-none place-items-center rounded-full border border-ink/15 text-lg transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-canvas">
        {item.icon}
      </span>
      <span className="min-w-0">
        <span className="block font-display text-2xl font-bold uppercase leading-none tracking-tight md:text-3xl">
          {item.label}
        </span>
        <span className="mt-1 block text-sm text-inkDim">{item.desc}</span>
      </span>
      <FaArrowRight className="ml-auto flex-none -translate-x-2 text-lg text-inkDim opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accent group-hover:opacity-100" />
    </>
  );

  const className =
    'group flex w-full items-center gap-5 border-b border-ink/10 py-5 pl-1 text-left text-ink transition-[padding,color] duration-300 hover:pl-4 hover:text-accent';
  const style = { animationDelay: `${0.05 * index}s` } as const;

  let control: JSX.Element;
  if (item.image) {
    const img = item.image;
    control = (
      <button
        type="button"
        onClick={() => onOpenImage(img)}
        className={className}
      >
        {inner}
      </button>
    );
  } else if (item.internal && item.href) {
    control = (
      <Link href={item.href} className={className}>
        {inner}
      </Link>
    );
  } else {
    control = (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <li className="animate-rise" style={style}>
      {control}
    </li>
  );
}

export default function Home() {
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);

  return (
    <>
      <Seo title="Moda masculina em São Luís" path="/" />
      <StoreJsonLd />

      {/* HERO */}
      <section className="relative flex min-h-[92vh] flex-col justify-center overflow-clip px-5 py-28 md:px-10">
        <span
          aria-hidden
          className="pointer-events-none absolute right-[-4vw] top-1/2 -translate-y-1/2 rotate-90 select-none font-display text-[clamp(8rem,22vw,22rem)] font-black leading-[0.8] tracking-tight text-accent/[0.07]"
        >
          FORMEN
        </span>

        <p className="animate-rise text-[0.74rem] font-semibold uppercase tracking-[0.42em] text-accent">
          Multimarcas masculina · São Luís — MA
        </p>

        <h1
          className="animate-rise mt-6 max-w-[14ch] font-display text-[clamp(4.5rem,18vw,16rem)] font-black uppercase leading-[0.82] tracking-tight"
          style={{ animationDelay: '0.08s' }}
        >
          Vista a sua <em className="not-italic text-accent">marca</em>.
        </h1>

        <p
          className="animate-rise mt-8 max-w-[36ch] text-lg text-inkDim md:text-xl"
          style={{ animationDelay: '0.16s' }}
        >
          Curadoria das melhores marcas masculinas. Escolha pelo catálogo, peça
          no WhatsApp e receba em casa.
        </p>

        <div
          className="animate-rise mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: '0.24s' }}
        >
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-4 font-display text-base font-bold uppercase tracking-wide text-canvas transition-all duration-300 hover:-translate-y-1 hover:bg-accent-hi"
          >
            Ver catálogo <FaArrowRight />
          </Link>
          <a
            href="https://wa.me/5598991526700"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-7 py-4 font-display text-base font-bold uppercase tracking-wide text-ink transition-all duration-300 hover:-translate-y-1 hover:border-ink"
          >
            <FaWhatsapp /> Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden whitespace-nowrap border-y border-ink/10 bg-accent py-3 text-canvas">
        <div className="inline-block animate-marquee font-display text-lg font-extrabold uppercase tracking-wide md:text-2xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              <span className="px-6">Entrega para toda São Luís</span>
              <span className="px-6">✦</span>
              <span className="px-6">Novos drops toda semana</span>
              <span className="px-6">✦</span>
              <span className="px-6">Pedidos pelo WhatsApp</span>
              <span className="px-6">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* DIRECT LINKS */}
      <section className="mx-auto max-w-shell px-5 py-20 md:px-10 md:py-28">
        <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-ink/10 pb-5">
          <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight md:text-6xl">
            Atalhos
          </h2>
          <span className="text-xs uppercase tracking-[0.2em] text-inkDim">
            Tudo a um toque
          </span>
        </div>
        <ul className="list-none">
          {links.map((item, i) => (
            <LinkRow
              key={item.label}
              item={item}
              index={i}
              onOpenImage={setLightbox}
            />
          ))}
        </ul>
      </section>

      {/* LOOKBOOK */}
      <section className="mx-auto max-w-shell px-5 pb-24 md:px-10">
        <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-ink/10 pb-5">
          <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight md:text-6xl">
            Lookbook
          </h2>
          <span className="text-xs uppercase tracking-[0.2em] text-inkDim">
            Direto da loja
          </span>
        </div>

        <Swiper
          className="fm-swiper"
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          breakpoints={{
            0: { slidesPerView: 1.15 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {shots.map((url, index) => (
            <SwiperSlide key={url}>
              <div className="relative aspect-[3/4] overflow-hidden rounded bg-surface">
                <Image
                  src={url}
                  alt={`Look ${index + 1} da Formen Multimarcas`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority={index === 0}
                />
                <span className="absolute bottom-3 left-3 bg-canvas/70 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
                  Look {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </>
  );
}
