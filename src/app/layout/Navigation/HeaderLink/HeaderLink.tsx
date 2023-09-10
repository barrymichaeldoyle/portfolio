import Link from 'next/link';
import { PropsWithChildren } from 'react';

export function HeaderLink({
  href,
  children,
  isActive,
}: PropsWithChildren<{ href: string; isActive: boolean }>) {
  return (
    <Link
      className={`font-semibold px-4 py-2 rounded-full transition duration-200 ${
        isActive ? 'bg-gray-700 cursor-default' : 'hover:bg-gray-600'
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
