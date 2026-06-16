// Configuração central de SEO/identidade.
// IMPORTANTE: defina NEXT_PUBLIC_SITE_URL no ambiente de produção
// (ex.: https://www.formenmultimarcas.com.br). O fallback abaixo é só
// um padrão; ajuste para o domínio real para canonical/OG/sitemap corretos.
export const SITE = {
  name: 'Formen Multimarcas',
  shortName: 'Formen',
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.formenmultimarcas.com.br'
  ).replace(/\/$/, ''),
  description:
    'Formen Multimarcas: moda masculina em São Luís (MA). Curadoria das melhores marcas, catálogo online, pedidos pelo WhatsApp e delivery. Lojas no Mac Center (Cohama) e Shopping Passeio (Cohatrac).',
  locale: 'pt_BR',
  themeColor: '#0b0a09',
  ogImage: '/og-image.jpg',
  phone: '+5598991526700',
  phoneDisplay: '(98) 99152-6700',
  whatsapp: 'https://wa.me/5598991526700',
  instagram: 'https://www.instagram.com/formen_mulltimarcas',
  catalog:
    'https://drive.google.com/drive/folders/1l8nba8xkwMhLFdFFyayIMkMjhLiEV-_j',
  city: 'São Luís',
  region: 'MA',
  country: 'BR',
  keywords: [
    'moda masculina São Luís',
    'multimarcas masculina',
    'roupas masculinas São Luís',
    'Formen Multimarcas',
    'loja de roupa masculina Cohama',
    'Shopping Passeio masculina',
    'catálogo masculino São Luís',
  ],
  // Lojas físicas
  stores: [
    {
      name: 'Formen Multimarcas — Mac Center',
      street: 'Centro Comercial Mac Center, Cohama, 2º piso, Loja 68',
      locality: 'São Luís',
      region: 'MA',
      country: 'BR',
    },
    {
      name: 'Formen Multimarcas — Shopping Passeio',
      street: 'Shopping Passeio, Cohatrac',
      locality: 'São Luís',
      region: 'MA',
      country: 'BR',
    },
  ],
  // Horário de funcionamento
  openingHours: [
    {
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '10:00',
      closes: '22:00',
    },
    { days: ['Sunday'], opens: '13:00', closes: '20:00' },
  ],
};

export const absoluteUrl = (path = '/') =>
  `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
