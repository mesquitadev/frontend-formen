import Head from 'next/head';
import { SITE, absoluteUrl } from '@/lib/site';

interface SeoProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

const Seo = ({
  title,
  description = SITE.description,
  path = '/',
  image = SITE.ogImage,
  type = 'website',
  noindex = false,
}: SeoProps) => {
  const url = absoluteUrl(path);
  const ogImage = image.startsWith('http') ? image : absoluteUrl(image);
  const fullTitle = title === SITE.name ? title : `${title} | ${SITE.name}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={SITE.keywords.join(', ')} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1'
        }
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={SITE.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default Seo;
