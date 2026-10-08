import React from 'react';
import { useStore } from './store/useStore';

export default function Notifications() {
  const { notifications } = useStore();
  
  if (notifications.length === 0) return null;

  const typeColors = {
    success: '#4dbb5f',
    error: '#f44747',
    warning: '#cca700',
    info: '#569cd6',
  };

  const typeIcons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };

  return (
    <div style={{ position: 'fixed', bottom: '32px', right: '16px', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 9999 }}>
      {notifications.map(n => (
        <div
          key={n.id}
          style={{
            background: 'var(--bg-tertiary)',
            border: `1px solid ${typeColors[n.type] || 'var(--border)'}`,
            borderLeft: `3px solid ${typeColors[n.type] || 'var(--accent)'}`,
            borderRadius: '4px',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            animation: 'slideIn 0.2s ease',
            minWidth: '200px',
            maxWidth: '400px',
          }}
        >
          <span style={{ color: typeColors[n.type], fontWeight: 'bold' }}>{typeIcons[n.type]}</span>
          <span style={{ color: 'var(--text-primary)' }}>{n.msg}</span>
        </div>
      ))}
    </div>
  );
}
