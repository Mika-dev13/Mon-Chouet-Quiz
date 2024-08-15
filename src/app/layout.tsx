import type { Metadata } from 'next';
import { Ribeye, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
