import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

export type LightboxImage = { src: string; alt: string };

interface LightboxProps {
  image: LightboxImage | null;
  onClose: () => void;
}

const Lightbox = ({ image, onClose }: LightboxProps) => {
  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-ink/20 text-2xl text-ink transition-colors hover:border-accent hover:text-accent"
      >
        <IoClose />
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        onClick={e => e.stopPropagation()}
        className="animate-rise max-h-[85vh] w-auto max-w-full rounded-lg object-contain shadow-2xl ring-1 ring-accent/30"
      />
    </div>
  );
};

export default Lightbox;
