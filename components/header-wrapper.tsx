'use client';

import { usePathname, useRouter } from 'next/navigation';
import Header from './header-navbar';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const router = useRouter();

  // Map pathname to currentPage prop
  const currentPage = pathname === '/our-technology' ? 'technology' : 'home';

  // Handle navigation
  const handleNavigate = (page: 'home' | 'technology') => {
    if (page === 'home') {
      router.push('/');
    } else if (page === 'technology') {
      router.push('/our-technology');
    }
  };

  return <Header currentPage={currentPage} onNavigate={handleNavigate} />;
}

