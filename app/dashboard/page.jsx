'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { addHistoryItem, getHistory, deleteHistoryItem } from '@/lib/history';
import StatusBadge from '@/components/StatusBadge';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function DashboardPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('perusahaan'); // perusahaan, link, email
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const handleAnalyze = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResult(null);
    setError('');

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: activeTab, input }),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Gagal menganalisis');

      setResult(data.data);
      const historyItem = addHistoryItem({
        type: activeTab,
        input: input,
        status: data.data.status,
        result: data.data
      });
      setHistory(prev => [historyItem, ...prev]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleHistoryClick = (item) => {
    setActiveTab(item.type);
    setInput(item.input);
    setResult(item.result);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteHistory = (e, id) => {
    e.stopPropagation();
    deleteHistoryItem(id);
    setHistory(getHistory());
  };

  const getPlaceholder = () => {
    if (activeTab === 'perusahaan') return 'Contoh: PT Maju Bersama atau Toko Berkah';
    if (activeTab === 'link') return 'Contoh: https://klik-hadiah.com/login';
    return 'Contoh: admin@bank-indonesia.verify.com';
  };

  const getLabel = () => {
    if (activeTab === 'perusahaan') return 'Nama Perusahaan / Bisnis';
    if (activeTab === 'link') return 'URL / Tautan';
    return 'Alamat Email';
  };

  return (
    <div className="page-wrapper animate-fade-in">
      <header style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Halo, {user?.name?.split(' ')[0]} 👋</h1>
        <p style={{ color: 'var(--text2)' }}>Mulai verifikasi keamanan digital Anda hari ini.</p>
      </header>

      <div className="grid-2" style={{ gridTemplateColumns: '1.4fr 0.6fr', alignItems: 'start' }}>
        {/* LEFT COLUMN: ANALYZER */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* TABS */}
          <div className="card" style={{ padding: 8, display: 'flex', gap: 4, borderRadius: 'var(--r-md)' }}>
            {[
              { id: 'perusahaan', icon: '🏢', label: 'Perusahaan' },
              { id: 'link', icon: '🔗', label: 'Link' },
              { id: 'email', icon: '📧', label: 'Email' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setResult(null); setInput(''); setError(''); }}
                className={activeTab === tab.id ? 'btn-primary' : 'btn-ghost'}
                style={{ flex: 1, padding: '10px', fontSize: 14, borderRadius: 'var(--r-sm)' }}
              >
                <span style={{ marginRight: 8 }}>{tab.icon}</span> {tab.label}
              </button>
            ))}
          </div>

          {/* INPUT FORM */}
          <div className="card">
            <form onSubmit={handleAnalyze} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="form-group">
                <label className="form-label">{getLabel()}</label>
                <div style={{ display: 'flex', gap: 12 }}>
                  <input
                    type="text"
                    className="form-input"
                    placeholder={getPlaceholder()}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <button type="submit" className="btn-primary" disabled={loading || !input.trim()}>
                    {loading ? '...' : 'Analisis'}
                  </button>
                </div>
              </div>
              {error && <div className="alert alert-error">{error}</div>}
            </form>
          </div>

          {/* RESULTS */}
          {loading && (
            <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
              <LoadingSpinner message="Gemini AI sedang menganalisis..." />
            </div>
          )}

          {result && !loading && (
            <div className="card animate-fade-up">
              <div style={{ textAlign: 'center', marginBottom: 32 }}>
                <div className={`result-status-icon icon-${result.status}`}>
                  {result.status === 'aman' ? '✓' : result.status === 'palsu' ? '✕' : '⚠'}
                </div>
                <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{result.kesimpulan}</h2>
                <StatusBadge status={result.status} />
              </div>

              <div style={{ marginBottom: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>Tingkat Keamanan</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: `var(--${result.status})` }}>{result.skor}/100</span>
                </div>
                <div className={`score-bar score-${result.status}`}>
                  <div className="score-fill" style={{ width: `${result.skor}%` }}></div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {/* CHECKLIST */}
                {result.analisis && (
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Detail Analisis</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {result.analisis.map((item, i) => (
                        <div key={i} className="checklist-item">
                          <div className={`checklist-dot ${item.aman ? '' : 'required'}`}>
                            {item.aman ? '✓' : '!'}
                          </div>
                          <div className="checklist-text">
                            <h4>{item.poin}</h4>
                            <p>{item.keterangan}</p>
                            {item.referensi && <div className="checklist-ref">Ref: {item.referensi}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* REKOMENDASI */}
                {result.rekomendasi && (
                  <div className={`alert alert-${result.status === 'aman' ? 'success' : 'warn'}`}>
                    <h4 style={{ marginBottom: 8, fontSize: 15 }}>Rekomendasi Tindakan:</h4>
                    <ul style={{ paddingLeft: 20, fontSize: 14 }}>
                      {result.rekomendasi.map((rec, i) => <li key={i}>{rec}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: HISTORY */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700 }}>Riwayat</h3>
            <span style={{ fontSize: 12, color: 'var(--text3)' }}>{history.length} item</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {history.length === 0 ? (
              <div className="card" style={{ textAlign: 'center', padding: '40px 20px', opacity: 0.6 }}>
                <p style={{ fontSize: 14 }}>Belum ada riwayat analisis.</p>
              </div>
            ) : (
              history.map((item) => (
                <div key={item.id} className="history-item" onClick={() => handleHistoryClick(item)}>
                  <div className="history-item-left">
                    <div className={`history-type-icon icon-${item.type}`}>
                      {item.type === 'perusahaan' ? '🏢' : item.type === 'link' ? '🔗' : '📧'}
                    </div>
                    <div className="history-info">
                      <div className="history-input">{item.input}</div>
                      <div className="history-meta">
                        {new Date(item.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                      </div>
                    </div>
                  </div>
                  <div className="history-item-right">
                    <StatusBadge status={item.status} />
                    <button
                      onClick={(e) => handleDeleteHistory(e, item.id)}
                      className="btn-danger"
                      style={{ padding: 6, borderRadius: 6, border: 'none', background: 'transparent' }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
