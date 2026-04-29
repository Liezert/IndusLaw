export default function StatusBadge({ status }) {
  const config = {
    aman: { label: 'Aman', className: 'badge-aman', icon: '✓' },
    mencurigakan: { label: 'Mencurigakan', className: 'badge-mencurigakan', icon: '⚠' },
    palsu: { label: 'Palsu', className: 'badge-palsu', icon: '✕' },
    perlu_cek: { label: 'Perlu Dicek', className: 'badge-mencurigakan', icon: '?' },
  };

  const cfg = config[status] || config['mencurigakan'];

  return (
    <span className={`status-badge ${cfg.className}`}>
      <span className="badge-icon">{cfg.icon}</span>
      {cfg.label}
    </span>
  );
}
