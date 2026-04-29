'use client';

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="landing-hero">
        <div className="page-wrapper" style={{ textAlign: 'center', paddingTop: 80, paddingBottom: 80 }}>
          <div className="section-tag" style={{ display: 'inline-flex', marginBottom: 24 }}>
            <span>🛡️</span> Platform Transparansi Digital Indonesia
          </div>
          <h1 className="hero-title">
            Cek Legalitas, Link & Email<br />
            <span className="hero-gradient">Dalam Hitungan Detik</span>
          </h1>
          <p className="hero-subtitle">
            IndusLaw menggunakan AI untuk membantu Anda memverifikasi perusahaan, mendeteksi link phishing,
            dan mengidentifikasi email palsu. Gratis. Mudah. Terpercaya.
          </p>
          <div className="hero-actions">
            <Link href="/register" className="btn-primary" style={{ fontSize: 16, padding: '14px 36px' }}>
              Mulai Gratis →
            </Link>
            <Link href="/login" className="btn-outline" style={{ fontSize: 16, padding: '14px 36px' }}>
              Sudah Punya Akun
            </Link>
          </div>
          <p style={{ fontSize: 13, color: 'var(--text3)', marginTop: 20 }}>
            ✓ Gratis selamanya &nbsp;·&nbsp; ✓ Powered by Gemini AI &nbsp;·&nbsp; ✓ Berdasarkan UU Indonesia
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '60px 0', background: 'rgba(255,255,255,0.015)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="page-wrapper">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-tag" style={{ display: 'inline-flex', marginBottom: 12 }}>3 Fitur Utama</div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--text)' }}>Semua yang Anda Butuhkan</h2>
            <p style={{ color: 'var(--text2)', marginTop: 8 }}>Analisis mendalam dengan AI dalam bahasa Indonesia yang mudah dipahami</p>
          </div>
          <div className="grid-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🏢</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: 'var(--text)' }}>Cek Perusahaan</h3>
              <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>
                Dapatkan checklist persyaratan legal berdasarkan UU PT, UU UMKM, dan UU Cipta Kerja. Cocok untuk pengusaha UMKM yang ingin memahami legalitas usahanya.
              </p>
              <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
                <span className="chip chip-company">UU No. 40/2007</span>
                <span className="chip chip-company">UU UMKM</span>
                <span className="chip chip-company">UU Cipta Kerja</span>
              </div>
            </div>
            <div className="card" style={{ textAlign: 'center', border: '1px solid rgba(59,130,246,0.3)', boxShadow: '0 0 30px rgba(59,130,246,0.08)' }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🔗</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: 'var(--text)' }}>Cek Link</h3>
              <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>
                Analisis URL untuk mendeteksi phishing, typosquatting, dan ancaman digital. Lindungi diri dari penipuan online yang semakin canggih.
              </p>
              <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
                <span className="chip chip-link">Anti-Phishing</span>
                <span className="chip chip-link">Domain Analysis</span>
                <span className="chip chip-link">HTTPS Check</span>
              </div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>📧</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: 'var(--text)' }}>Cek Email</h3>
              <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>
                Verifikasi keaslian alamat email dan deteksi spoofing. Ketahui apakah email dari "bank" atau "perusahaan resmi" itu benar-benar asli.
              </p>
              <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
                <span className="chip chip-email">Anti-Spoofing</span>
                <span className="chip chip-email">Domain Verify</span>
                <span className="chip chip-email">Email Resmi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '60px 0' }}>
        <div className="page-wrapper" style={{ textAlign: 'center' }}>
          <div className="section-tag" style={{ display: 'inline-flex', marginBottom: 12 }}>Cara Kerja</div>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 40, color: 'var(--text)' }}>Mudah dalam 3 Langkah</h2>
          <div className="grid-3">
            {[
              { step: '01', icon: '✍️', title: 'Input Data', desc: 'Masukkan nama perusahaan, URL, atau alamat email yang ingin Anda cek.' },
              { step: '02', icon: '🤖', title: 'AI Menganalisis', desc: 'Google Gemini AI memproses input Anda menggunakan pengetahuan hukum dan keamanan digital Indonesia.' },
              { step: '03', icon: '📋', title: 'Hasil Instan', desc: 'Dapatkan laporan lengkap dengan status, penjelasan, dan rekomendasi tindakan.' },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} style={{ textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 22 }}>{icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--primary)', letterSpacing: 2, marginBottom: 8 }}>LANGKAH {step}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: 'var(--text)' }}>{title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 0', borderTop: '1px solid var(--border)' }}>
        <div className="page-wrapper" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Mulai Cek Sekarang — Gratis!</h2>
          <p style={{ color: 'var(--text2)', marginBottom: 32, fontSize: 16 }}>Bergabung dengan ribuan pengguna yang sudah mempercayai IndusLaw</p>
          <Link href="/register" className="btn-primary" style={{ fontSize: 16, padding: '14px 40px' }}>
            Daftar Gratis →
          </Link>
        </div>
      </section>

      {/* DISCLAIMER */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '24px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: 'var(--text3)', maxWidth: 600, margin: '0 auto' }}>
          ⚠️ Disclaimer: IndusLaw memberikan informasi bersifat edukatif dan advisory. Hasil analisis AI tidak menggantikan konsultasi hukum profesional dengan notaris, advokat, atau instansi pemerintah yang berwenang.
        </p>
        <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 8 }}>© 2026 IndusLaw · Powered by Google Gemini AI</p>
      </footer>

      <style>{`
        .hero-title { font-size: 52px; font-weight: 800; line-height: 1.15; color: var(--text); margin-bottom: 20px; }
        .hero-gradient { background: linear-gradient(135deg, #3b82f6, #a78bfa, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-subtitle { font-size: 18px; color: var(--text2); max-width: 580px; margin: 0 auto 36px; line-height: 1.7; }
        .hero-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        @media (max-width: 640px) { .hero-title { font-size: 32px; } .hero-subtitle { font-size: 15px; } }
      `}</style>
    </div>
  );
}
