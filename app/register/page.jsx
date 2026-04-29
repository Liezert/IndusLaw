'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { register } from '@/lib/auth';
import { useAuth } from '@/context/AuthContext';

export default function RegisterPage() {
  const router = useRouter();
  const { refreshUser } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.password || !form.confirm) {
      return setError('Semua field wajib diisi.');
    }
    if (form.password.length < 8) {
      return setError('Password minimal 8 karakter.');
    }
    if (form.password !== form.confirm) {
      return setError('Password dan konfirmasi password tidak cocok.');
    }
    setLoading(true);
    const result = register(form.name, form.email, form.password);
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
        <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Buat Akun Baru</h1>
        <p style={{ color: 'var(--text2)', fontSize: 15 }}>Bergabung dan mulai cek secara gratis</p>
      </div>

      <div className="card" style={{ padding: 32 }}>
        {error && <div className="alert alert-error" style={{ marginBottom: 20 }}>{error}</div>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="form-group">
            <label className="form-label" htmlFor="reg-name">Nama Lengkap</label>
            <input id="reg-name" name="name" type="text" className="form-input"
              placeholder="Contoh: Andi Pratama" value={form.name} onChange={handleChange} autoComplete="name" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="reg-email">Email</label>
            <input id="reg-email" name="email" type="email" className="form-input"
              placeholder="email@contoh.com" value={form.email} onChange={handleChange} autoComplete="email" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="reg-password">Password</label>
            <input id="reg-password" name="password" type="password" className="form-input"
              placeholder="Minimal 8 karakter" value={form.password} onChange={handleChange} autoComplete="new-password" />
            <span className="form-hint">Password minimal 8 karakter</span>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="reg-confirm">Konfirmasi Password</label>
            <input id="reg-confirm" name="confirm" type="password" className="form-input"
              placeholder="Ulangi password Anda" value={form.confirm} onChange={handleChange} autoComplete="new-password" />
          </div>
          <button id="btn-register" type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', marginTop: 4 }}>
            {loading ? 'Memproses...' : 'Daftar Sekarang →'}
          </button>
        </form>

        <hr className="divider" style={{ margin: '24px 0' }} />
        <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--text2)' }}>
          Sudah punya akun?{' '}
          <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
            Masuk di sini
          </Link>
        </p>
      </div>

      <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text3)', marginTop: 20 }}>
        Dengan mendaftar, Anda menyetujui bahwa hasil analisis bersifat edukatif dan tidak menggantikan konsultasi hukum profesional.
      </p>
    </div>
  );
}
