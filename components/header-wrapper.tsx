'use client';

import { usePathname, useRouter } from 'next/navigation';
import Header from './header-navbar';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const router = useRouter();

  const darkHeaderRoutes = new Set([
    '/',
    '/event',
    '/ai-excellence',
    '/our-creative-talent',
    '/contact-us',
  ]);
  const headerTone = darkHeaderRoutes.has(pathname) ? 'dark' : 'light';

  // Handle navigation
  const handleNavigate = (page: 'home' | 'technology') => {
    if (page === 'home') {
      router.push('/');
    } else if (page === 'technology') {
      router.push('/our-technology');
    }
  };

  return <Header headerTone={headerTone} onNavigate={handleNavigate} />;
}
