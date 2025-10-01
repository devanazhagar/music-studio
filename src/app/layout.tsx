import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsappButton } from '@/components/whatsapp-button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Harmony Hub - Your Music Academy',
  description: 'Harmony Hub Music Academy offers expert lessons in Piano, Guitar, Drums, Violin, and more in Chennai.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "dark:bg-background bg-hero-pattern")}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <WhatsappButton />
      </body>
    </html>
  );
}
