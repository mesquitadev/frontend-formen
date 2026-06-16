import React from 'react';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';

interface PageHeadingProps {
  showBackButton: boolean;
  pageTitle: string;
}

const PageHeading = ({ showBackButton, pageTitle }: PageHeadingProps) => {
  const router = useRouter();
  return (
    <div className="border-b border-ink/10">
      <div className="mx-auto flex max-w-shell items-center gap-4 px-5 py-6 md:px-10">
        {showBackButton && (
          <button
            type="button"
            aria-label="Voltar"
            onClick={() => router.back()}
            className="grid h-10 w-10 flex-none place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <IoIosArrowBack size={22} />
          </button>
        )}
        <h1 className="truncate font-display text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          {pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default PageHeading;
