'use client';

const HISTORY_KEY = 'induslaw_history';

export function getHistory() {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch { return []; }
}

export function saveHistory(history) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export function addHistoryItem({ type, input, status, result }) {
  const history = getHistory();
  const item = {
    id: Date.now().toString(),
    type,
    input,
    status,
    result,
    createdAt: new Date().toISOString(),
  };
  history.unshift(item);
  // Keep max 100 items
  if (history.length > 100) history.splice(100);
  saveHistory(history);
  return item;
}

export function deleteHistoryItem(id) {
  const history = getHistory();
  const filtered = history.filter(h => h.id !== id);
  saveHistory(filtered);
}

export function clearHistory() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(HISTORY_KEY);
}

export function getHistoryItem(id) {
  const history = getHistory();
  return history.find(h => h.id === id) || null;
}
