import React from 'react';
import { useStore } from '../../store/useStore';
import { THEMES } from '../../themes/themes';
import './Sidebar.css';

const EXTENSIONS = [
  { id: 'prettier', name: 'Prettier', desc: 'Code formatter', author: 'Prettier', downloads: '45M', installed: true, icon: '🎨' },
  { id: 'eslint', name: 'ESLint', desc: 'Linting for JS/TS', author: 'Dirk Bäumer', downloads: '38M', installed: true, icon: '✅' },
  { id: 'gitlens', name: 'GitLens', desc: 'Supercharge Git', author: 'GitKraken', downloads: '22M', installed: false, icon: '🔭' },
  { id: 'live-server', name: 'Live Server', desc: 'Local dev server', author: 'Ritwick Dey', downloads: '31M', installed: true, icon: '🌐' },
  { id: 'auto-rename', name: 'Auto Rename Tag', desc: 'Auto rename HTML tags', author: 'Jun Han', downloads: '18M', installed: false, icon: '🏷️' },
  { id: 'path-intellisense', name: 'Path Intellisense', desc: 'File path autocomplete', author: 'Christian Kohler', downloads: '15M', installed: false, icon: '🗺️' },
  { id: 'bracket-colorizer', name: 'Bracket Colorizer', desc: 'Colorize matching brackets', author: 'CoenraadS', downloads: '12M', installed: true, icon: '🌈' },
  { id: 'indent-rainbow', name: 'Indent Rainbow', desc: 'Colorize indentation', author: 'oderwat', downloads: '8M', installed: false, icon: '🌊' },
];

export default function ExtensionsPanel() {
  const { setTheme, addNotification } = useStore();
  const [installed, setInstalled] = React.useState(
    new Set(EXTENSIONS.filter(e => e.installed).map(e => e.id))
  );

  const toggle = (id) => {
    const newSet = new Set(installed);
    if (newSet.has(id)) { newSet.delete(id); addNotification(`Extension disabled`, 'info'); }
    else { newSet.add(id); addNotification(`Extension installed ✓`, 'success'); }
    setInstalled(newSet);
  };

  return (
    <div className="sidebar-panel">
      <div className="sidebar-title">Extensions</div>
      <div className="sidebar-content" style={{ padding: '8px' }}>
        <input placeholder="Search Extensions..." style={{ width: '100%', marginBottom: '8px', fontSize: '12px' }} />
        <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Popular
        </div>
        {EXTENSIONS.map(ext => (
          <div key={ext.id} style={{
            padding: '8px', marginBottom: '4px', background: 'var(--bg-tertiary)',
            borderRadius: '4px', border: '1px solid var(--border)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '20px' }}>{ext.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', fontWeight: '500', color: 'var(--text-bright)' }}>{ext.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{ext.author} · ↓ {ext.downloads}</div>
              </div>
              <button
                onClick={() => toggle(ext.id)}
                style={{
                  padding: '3px 8px', fontSize: '11px', borderRadius: '3px',
                  background: installed.has(ext.id) ? 'var(--bg-hover)' : 'var(--accent)',
                  color: installed.has(ext.id) ? 'var(--text-primary)' : '#fff',
                  border: installed.has(ext.id) ? '1px solid var(--border)' : 'none'
                }}
              >
                {installed.has(ext.id) ? 'Disable' : 'Install'}
              </button>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{ext.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
