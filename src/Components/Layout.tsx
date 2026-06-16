import React from 'react';
import Footer from './Footer';
import Header from '@/Components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-[1] flex min-h-screen flex-col bg-canvas text-ink">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
