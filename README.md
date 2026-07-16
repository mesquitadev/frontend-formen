# Formen Multimarcas

Site institucional da **Formen Multimarcas**, loja de moda masculina em São Luís (MA).
A página inicial funciona como um _linktree_ (WhatsApp, delivery, Instagram, horário,
endereços e catálogo) e o catálogo é servido a partir de uma pasta pública do Google Drive.

## Stack

- [Next.js 13](https://nextjs.org/) (Pages Router)
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- Tipografia: Big Shoulders Display + Hanken Grotesk (Google Fonts)

## Começando

```bash
yarn install
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

| Comando      | Descrição                          |
| ------------ | ---------------------------------- |
| `yarn dev`   | Ambiente de desenvolvimento        |
| `yarn build` | Build de produção                  |
| `yarn start` | Sobe o build de produção           |
| `yarn lint`  | ESLint                             |

## Variáveis de ambiente

Defina em `.env.local` (e no ambiente de produção):

```bash
# URL pública do site — usada em canonical, Open Graph e sitemap.
NEXT_PUBLIC_SITE_URL=https://www.formenmultimarcas.com.br
```

## Estrutura

```
src/
├── Components/   # Header, Footer, Layout, Lightbox, PageHeading, Seo, StoreJsonLd
├── lib/          # site.ts — configuração central (SEO, contatos, lojas)
├── pages/        # / (linktree), /catalogo (embed do Drive), 404
└── styles.css    # estilos globais + Tailwind
```

Configurações de identidade, SEO e contatos ficam centralizadas em `src/lib/site.ts`.
