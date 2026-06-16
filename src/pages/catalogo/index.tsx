import { FaExternalLinkAlt } from 'react-icons/fa';
import PageHeading from '@/Components/PageHeading';
import Seo from '@/Components/Seo';
import { SITE } from '@/lib/site';

// ID da pasta pública do Google Drive (deve estar como "qualquer pessoa com o link").
const DRIVE_FOLDER_ID = '1l8nba8xkwMhLFdFFyayIMkMjhLiEV-_j';
const EMBED_URL = `https://drive.google.com/embeddedfolderview?id=${DRIVE_FOLDER_ID}#grid`;

export default function Catalogo() {
  return (
    <>
      <Seo
        title="Catálogo"
        path="/catalogo"
        description="Catálogo da Formen Multimarcas: confira as peças disponíveis das melhores marcas masculinas em São Luís."
      />

      <PageHeading showBackButton pageTitle="Catálogo" />

      <section className="mx-auto max-w-shell px-5 py-10 md:px-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[52ch] text-sm text-inkDim">
            Navegue pelas fotos do nosso catálogo. Gostou de alguma peça? Chame
            no WhatsApp para consultar disponibilidade e tamanhos.
          </p>
          <a
            href={SITE.catalog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-none items-center gap-2 rounded-sm border border-accent/40 px-4 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-canvas"
          >
            Abrir no Drive <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>

        <div className="overflow-hidden rounded-lg border border-ink/15 bg-surface">
          <iframe
            src={EMBED_URL}
            title="Catálogo Formen Multimarcas no Google Drive"
            loading="lazy"
            className="h-[78vh] w-full"
          />
        </div>

        <p className="mt-4 text-center text-xs text-inkDim">
          As imagens são carregadas do Google Drive. Caso não apareçam, use o
          botão “Abrir no Drive”.
        </p>
      </section>
    </>
  );
}
