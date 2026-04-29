'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href={user ? '/dashboard' : '/'} className="navbar-logo">
          <span className="logo-icon">⚖️</span>
          <span className="logo-text">IndusLaw</span>
        </Link>
        <div className="navbar-actions">
          {user ? (
            <>
              <span className="navbar-user">
                <span className="user-avatar">{user.name?.charAt(0).toUpperCase()}</span>
                <span className="user-name">{user.name}</span>
              </span>
              <button className="btn-outline-sm" onClick={handleLogout}>
                Keluar
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn-outline-sm">Masuk</Link>
              <Link href="/register" className="btn-primary-sm">Daftar</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
