'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { login } from '@/lib/auth';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { refreshUser } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password) return setError('Email dan password wajib diisi.');
    setLoading(true);
    const result = login(form.email, form.password);
    setLoading(false);
    if (!result.success) return setError(result.error);
    refreshUser();
    router.push('/dashboard');
  };

  return (
    <div className="page-wrapper-sm" style={{ paddingTop: 60 }}>
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <Link href="/" className="navbar-logo" style={{ display: 'inline-flex', marginBottom: 24 }}>
          <span className="logo-icon">⚖️</span>
          <span className="logo-text">IndusLaw</span>
        </Link>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Selamat Datang Kembali</h1>
        <p style={{ color: 'var(--text2)', fontSize: 15 }}>Masuk ke akun IndusLaw Anda</p>
      </div>

      <div className="card" style={{ padding: 32 }}>
        {error && <div className="alert alert-error" style={{ marginBottom: 20 }}>{error}</div>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="form-group">
            <label className="form-label" htmlFor="login-email">Email</label>
            <input id="login-email" name="email" type="email" className="form-input"
              placeholder="email@contoh.com" value={form.email} onChange={handleChange} autoComplete="email" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="login-password">Password</label>
            <input id="login-password" name="password" type="password" className="form-input"
              placeholder="Password Anda" value={form.password} onChange={handleChange} autoComplete="current-password" />
          </div>
          <button id="btn-login" type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', marginTop: 4 }}>
            {loading ? 'Memproses...' : 'Masuk →'}
          </button>
        </form>

        <hr className="divider" style={{ margin: '24px 0' }} />
        <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--text2)' }}>
          Belum punya akun?{' '}
          <Link href="/register" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
            Daftar gratis
          </Link>
        </p>
      </div>
    </div>
  );
}
