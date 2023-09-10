'use client';

import { usePathname } from 'next/navigation';

import { HeaderLink } from './HeaderLink/HeaderLink';

interface NavItem {
  href: string;
  label: string;
}
const navItems: NavItem[] = [
  { href: '/story', label: 'My Story' },
  { href: '/contact', label: 'Contact Me' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map(({ href, label }) => (
        <HeaderLink key={href} href={href} isActive={pathname === href}>
          {label}
        </HeaderLink>
      ))}
    </>
  );
}
