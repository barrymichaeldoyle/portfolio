import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Barry Michael Doyle - Senior Software Engineer',
  description:
    'Barry is Senior Software Engineer based in Cape Town, South Africa. Currently full time employed by SecuritEase as a Senior Front-End Engineer.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between">
            <Link href="/" className="flex row my-auto">
              <div className="rounded-full p-2 bg-black mr-4">
                <Image
                  className=" rounded-full"
                  alt="BMD Logo"
                  src="/bmd.jpeg"
                  width={36}
                  height={36}
                />
              </div>
              <h1 className="text-2xl font-semibold my-auto">
                Barry Michael Doyle
              </h1>
            </Link>
            <div className="space-x-4 my-auto">
              <HeaderLink href="/story">My Story</HeaderLink>
              <HeaderLink href="/contact">Contact Me</HeaderLink>
            </div>
          </div>
        </header>
        <main className="py-8">
          <div className="container mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}

function HeaderLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      className="font-semibold px-4 py-2 rounded-full hover:bg-gray-600 transition duration-200"
      href={href}
    >
      {children}
    </Link>
  );
}
