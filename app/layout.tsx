import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToasterProvider } from '@/app/providers/toaster-provider';
import { SessionProvider } from 'next-auth/react';
import { ActiveStatus } from '@/app/components/active-status';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <ToasterProvider />
          <ActiveStatus />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
