import { SITE, absoluteUrl } from '@/lib/site';

// Dados estruturados schema.org: ClothingStore com as duas unidades,
// horários, contato e redes sociais. Ajuda Google a exibir rich results.
const StoreJsonLd = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    '@id': `${SITE.url}/#store`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    image: absoluteUrl(SITE.ogImage),
    logo: absoluteUrl('/icon.png'),
    telephone: SITE.phone,
    priceRange: '$$',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'Dinheiro, Cartão, Pix',
    areaServed: { '@type': 'City', name: `${SITE.city}, ${SITE.region}` },
    sameAs: [SITE.instagram],
    address: SITE.stores.map(s => ({
      '@type': 'PostalAddress',
      streetAddress: s.street,
      addressLocality: s.locality,
      addressRegion: s.region,
      addressCountry: s.country,
    })),
    department: SITE.stores.map(s => ({
      '@type': 'ClothingStore',
      name: s.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: s.street,
        addressLocality: s.locality,
        addressRegion: s.region,
        addressCountry: s.country,
      },
    })),
    openingHoursSpecification: SITE.openingHours.map(o => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: o.days,
      opens: o.opens,
      closes: o.closes,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StoreJsonLd;
