import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'kenkolabs — developer & builder',
  description:
    'kenkolabs is the personal portfolio and project lab of kenji — a developer building cool things on the web.',
  openGraph: {
    title: 'kenkolabs — developer & builder',
    description: 'Portfolio and project lab. shipping cool things.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
