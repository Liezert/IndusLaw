'use client';

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* HERO */}
      <section className="landing-hero animate-fade-in">
        <div className="page-wrapper hero-inner">
          <div className="section-tag animate-fade-up">
            <span className="tag-icon">🛡️</span> Platform Transparansi Digital Indonesia
          </div>
          <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Cek Legalitas, Link & Email<br />
            <span className="hero-gradient">Dalam Hitungan Detik</span>
          </h1>
          <p className="hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
            IndusLaw menggunakan AI untuk membantu Anda memverifikasi perusahaan, mendeteksi link phishing,
            dan mengidentifikasi email palsu. Gratis. Mudah. Terpercaya.
          </p>
          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/register" className="btn-primary hero-btn">
              Mulai Gratis →
            </Link>
            <Link href="/login" className="btn-outline hero-btn">
              Sudah Punya Akun
            </Link>
          </div>
          <p className="hero-trust-text animate-fade-up" style={{ animationDelay: '0.4s' }}>
            ✓ Gratis selamanya &nbsp;·&nbsp; ✓ Powered by Gemini AI &nbsp;·&nbsp; ✓ Berdasarkan UU Indonesia
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="page-wrapper">
          <div className="features-header">
            <div className="section-tag">3 Fitur Utama</div>
            <h2>Semua yang Anda Butuhkan</h2>
            <p>Analisis mendalam dengan AI dalam bahasa Indonesia yang mudah dipahami</p>
          </div>
          <div className="grid-3">
            <div className="card card-hover feature-card">
              <div className="feature-icon">🏢</div>
              <h3>Cek Perusahaan</h3>
              <p>
                Dapatkan checklist persyaratan legal berdasarkan UU PT, UU UMKM, dan UU Cipta Kerja. Cocok untuk pengusaha UMKM yang ingin memahami legalitas usahanya.
              </p>
              <div className="feature-chips">
                <span className="chip chip-company">UU No. 40/2007</span>
                <span className="chip chip-company">UU UMKM</span>
                <span className="chip chip-company">UU Cipta Kerja</span>
              </div>
            </div>
            <div className="card card-hover feature-card highlighted-card">
              <div className="feature-icon">🔗</div>
              <h3>Cek Link</h3>
              <p>
                Analisis URL untuk mendeteksi phishing, typosquatting, dan ancaman digital. Lindungi diri dari penipuan online yang semakin canggih.
              </p>
              <div className="feature-chips">
                <span className="chip chip-link">Anti-Phishing</span>
                <span className="chip chip-link">Domain Analysis</span>
                <span className="chip chip-link">HTTPS Check</span>
              </div>
            </div>
            <div className="card card-hover feature-card">
              <div className="feature-icon">📧</div>
              <h3>Cek Email</h3>
              <p>
                Verifikasi keaslian alamat email dan deteksi spoofing. Ketahui apakah email dari "bank" atau "perusahaan resmi" itu benar-benar asli.
              </p>
              <div className="feature-chips">
                <span className="chip chip-email">Anti-Spoofing</span>
                <span className="chip chip-email">Domain Verify</span>
                <span className="chip chip-email">Email Resmi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <div className="page-wrapper">
          <div className="section-header-center">
            <div className="section-tag">Cara Kerja</div>
            <h2>Mudah dalam 3 Langkah</h2>
          </div>
          <div className="grid-3 steps-grid">
            {[
              { step: '01', icon: '✍️', title: 'Input Data', desc: 'Masukkan nama perusahaan, URL, atau alamat email yang ingin Anda cek.' },
              { step: '02', icon: '🤖', title: 'AI Menganalisis', desc: 'Google Gemini AI memproses input Anda menggunakan pengetahuan hukum dan keamanan digital Indonesia.' },
              { step: '03', icon: '📋', title: 'Hasil Instan', desc: 'Dapatkan laporan lengkap dengan status, penjelasan, dan rekomendasi tindakan.' },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="step-item">
                <div className="step-icon-wrapper">{icon}</div>
                <div className="step-number">LANGKAH {step}</div>
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="page-wrapper cta-inner">
          <h2>Mulai Cek Sekarang — Gratis!</h2>
          <p>Bergabung dengan ribuan pengguna yang sudah mempercayai IndusLaw</p>
          <Link href="/register" className="btn-primary cta-btn">
            Daftar Gratis →
          </Link>
        </div>
      </section>

      {/* DISCLAIMER */}
      <footer className="landing-footer">
        <div className="page-wrapper footer-inner">
          <p className="disclaimer-text">
            ⚠️ Disclaimer: IndusLaw memberikan informasi bersifat edukatif dan advisory. Hasil analisis AI tidak menggantikan konsultasi hukum profesional dengan notaris, advokat, atau instansi pemerintah yang berwenang.
          </p>
          <p className="copyright-text">© 2026 IndusLaw · Powered by Google Gemini AI</p>
        </div>
      </footer>

      <style>{`
        .landing-container { overflow: hidden; }
        .hero-inner { text-align: center; padding: 100px 24px; }
        .tag-icon { margin-right: 4px; }
        .hero-title { font-size: 64px; font-weight: 800; line-height: 1.1; color: var(--text); margin-bottom: 24px; letter-spacing: -0.02em; }
        .hero-gradient { background: linear-gradient(135deg, #3b82f6, #a78bfa, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-subtitle { font-size: 20px; color: var(--text2); max-width: 640px; margin: 0 auto 48px; line-height: 1.7; }
        .hero-actions { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px; }
        .hero-btn { font-size: 17px; padding: 16px 40px; }
        .hero-trust-text { font-size: 14px; color: var(--text3); }

        .features-section { padding: 100px 0; background: rgba(255,255,255,0.01); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .features-header { text-align: center; marginBottom: 64px; }
        .features-header h2 { font-size: 36px; font-weight: 700; color: var(--text); margin: 12px 0; }
        .features-header p { color: var(--text2); font-size: 18px; }
        .feature-card { text-align: center; padding: 40px 32px; }
        .feature-icon { font-size: 48px; marginBottom: 24px; }
        .feature-card h3 { font-size: 20px; font-weight: 700; marginBottom: 16px; color: var(--text); }
        .feature-card p { font-size: 15px; color: var(--text2); lineHeight: 1.7; }
        .feature-chips { margin-top: 24px; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
        .highlighted-card { border: 1px solid rgba(59,130,246,0.3); box-shadow: 0 0 40px rgba(59,130,246,0.1); background: rgba(59,130,246,0.02); }

        .how-it-works { padding: 100px 0; }
        .section-header-center { text-align: center; marginBottom: 60px; }
        .section-header-center h2 { font-size: 32px; font-weight: 700; margin-top: 12px; color: var(--text); }
        .steps-grid { gap: 40px; }
        .step-item { text-align: center; position: relative; }
        .step-icon-wrapper { width: 64px; height: 64px; border-radius: 50%; background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.3); display: flex; alignItems: center; justifyContent: center; margin: 0 auto 24px; font-size: 28px; }
        .step-number { font-size: 12px; font-weight: 700; color: var(--primary); letterSpacing: 2px; marginBottom: 12px; }
        .step-title { font-size: 19px; font-weight: 700; marginBottom: 12px; color: var(--text); }
        .step-desc { font-size: 15px; color: var(--text2); lineHeight: 1.7; }

        .cta-section { padding: 100px 0; borderTop: 1px solid var(--border); background: radial-gradient(circle at center, rgba(59,130,246,0.05) 0%, transparent 70%); }
        .cta-inner { text-align: center; }
        .cta-inner h2 { font-size: 36px; font-weight: 700; color: var(--text); marginBottom: 20px; }
        .cta-inner p { color: var(--text2); marginBottom: 40px; fontSize: 18px; }
        .cta-btn { font-size: 18px; padding: 16px 48px; }

        .landing-footer { border-top: 1px solid var(--border); padding: 48px 24px; text-align: center; }
        .disclaimer-text { font-size: 13px; color: var(--text3); max-width: 700px; margin: 0 auto 16px; line-height: 1.6; }
        .copyright-text { font-size: 13px; color: var(--text3); }

        @media (max-width: 768px) {
          .hero-title { font-size: 40px; }
          .hero-subtitle { font-size: 17px; }
          .features-header h2 { font-size: 28px; }
          .cta-inner h2 { font-size: 28px; }
        }
      `}</style>
    </div>
  );
}
