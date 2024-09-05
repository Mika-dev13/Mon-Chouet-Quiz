import type { Metadata } from 'next';
import { Ribeye, Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const ribeye = Ribeye({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ribeye',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Mon Chouet' Quiz",
  description: 'Des quiz amusants et éducatifs pour les petits explorateurs !',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr' className={`${montserrat.variable} ${ribeye.variable}`}>
      <body className={`${montserrat.className}`}>
        {children}
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
