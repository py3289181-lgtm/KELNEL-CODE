import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { THEMES, FONT_OPTIONS } from '../../themes/themes';
import './ThemeBuilder.css';

const DEFAULT_CUSTOM = {
  '--bg-primary': '#1e1e1e',
  '--bg-secondary': '#252526',
  '--bg-tertiary': '#2d2d2d',
  '--bg-sidebar': '#252526',
  '--bg-tab-active': '#1e1e1e',
  '--bg-statusbar': '#007acc',
  '--bg-hover': '#2a2d2e',
  '--bg-selected': '#094771',
  '--border': '#454545',
  '--text-primary': '#d4d4d4',
  '--text-secondary': '#9d9d9d',
  '--text-accent': '#569cd6',
  '--text-bright': '#ffffff',
  '--text-statusbar': '#ffffff',
  '--accent': '#007acc',
};

const COLOR_LABELS = {
  '--bg-primary': 'Editor Background',
  '--bg-secondary': 'Sidebar Background',
  '--bg-tertiary': 'Panel Background',
  '--bg-sidebar': 'File Tree Background',
  '--bg-tab-active': 'Active Tab',
  '--bg-statusbar': 'Status Bar Background',
  '--bg-hover': 'Hover State',
  '--bg-selected': 'Selected Item',
  '--border': 'Border Color',
  '--text-primary': 'Primary Text',
  '--text-secondary': 'Secondary Text',
  '--text-accent': 'Accent Text',
  '--text-bright': 'Bright Text',
  '--text-statusbar': 'Status Bar Text',
  '--accent': 'Accent / Focus Color',
};

export default function ThemeBuilder() {
  const { setShowThemeBuilder, setTheme, currentTheme, setFont, currentFont, setCustomTheme, addNotification } = useStore();
  const [tab, setTab] = useState('gallery');
  const [customVars, setCustomVars] = useState(DEFAULT_CUSTOM);
  const [search, setSearch] = useState('');

  const darkThemes = Object.entries(THEMES).filter(([, t]) => t.type === 'dark');
  const lightThemes = Object.entries(THEMES).filter(([, t]) => t.type === 'light');

  const filteredDark = darkThemes.filter(([, t]) => t.name.toLowerCase().includes(search.toLowerCase()));
  const filteredLight = lightThemes.filter(([, t]) => t.name.toLowerCase().includes(search.toLowerCase()));

  const applyCustom = () => {
    setCustomTheme(customVars);
    addNotification('Custom theme applied ✓', 'success');
  };

  return (
    <div className="overlay" onClick={() => setShowThemeBuilder(false)}>
      <div className="theme-builder" onClick={e => e.stopPropagation()}>
        <div className="tb-header">
          <h2>🎨 Themes & Appearance</h2>
          <button onClick={() => setShowThemeBuilder(false)} style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>✕</button>
        </div>

        <div className="tb-tabs">
          {['gallery', 'fonts', 'custom'].map(t => (
            <button key={t} className={`tb-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
              {t === 'gallery' ? '🖼 Theme Gallery' : t === 'fonts' ? '🔤 Fonts' : '🛠 Custom Builder'}
            </button>
          ))}
        </div>

        <div className="tb-body">
          {tab === 'gallery' && (
            <div>
              <input
                placeholder="Search themes..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', marginBottom: '12px' }}
              />
              
              <div className="tb-section-title">🌙 Dark Themes ({filteredDark.length})</div>
              <div className="theme-grid">
                {filteredDark.map(([id, theme]) => (
                  <ThemeCard key={id} id={id} theme={theme} active={currentTheme === id} onSelect={setTheme} />
                ))}
              </div>

              <div className="tb-section-title" style={{ marginTop: '16px' }}>☀️ Light Themes ({filteredLight.length})</div>
              <div className="theme-grid">
                {filteredLight.map(([id, theme]) => (
                  <ThemeCard key={id} id={id} theme={theme} active={currentTheme === id} onSelect={setTheme} />
                ))}
              </div>
            </div>
          )}

          {tab === 'fonts' && (
            <div>
              <div className="tb-section-title" style={{ marginBottom: '12px' }}>Editor Font</div>
              <div style={{ display: 'grid', gap: '8px' }}>
                {FONT_OPTIONS.map(font => (
                  <button
                    key={font.id}
                    className={`font-option ${currentFont.id === font.id ? 'active' : ''}`}
                    onClick={() => { setFont(font); addNotification(`Font: ${font.name}`, 'success'); }}
                  >
                    <span style={{ fontFamily: font.value, fontSize: '16px' }}>Aa — {font.name}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: font.value }}>
                      const hello = "world"; // 0O1Il
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {tab === 'custom' && (
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '12px' }}>
                Create your own theme by customizing colors below:
              </div>
              <div style={{ display: 'grid', gap: '6px' }}>
                {Object.entries(customVars).map(([key, val]) => (
                  <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '4px 0' }}>
                    <input
                      type="color"
                      value={val}
                      onChange={e => setCustomVars(prev => ({ ...prev, [key]: e.target.value }))}
                      style={{ width: '36px', height: '28px', cursor: 'pointer', border: '1px solid var(--border)', borderRadius: '3px', padding: '1px' }}
                    />
                    <span style={{ flex: 1, fontSize: '12px', color: 'var(--text-primary)' }}>{COLOR_LABELS[key] || key}</span>
                    <code style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{val}</code>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                <button
                  onClick={applyCustom}
                  style={{ flex: 1, padding: '8px', background: 'var(--accent)', color: '#fff', borderRadius: '4px', fontWeight: '500' }}
                >
                  Apply Custom Theme
                </button>
                <button
                  onClick={() => setCustomVars(DEFAULT_CUSTOM)}
                  style={{ padding: '8px 12px', background: 'var(--bg-tertiary)', borderRadius: '4px', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ThemeCard({ id, theme, active, onSelect }) {
  const bg = theme.vars['--bg-primary'] || '#1e1e1e';
  const sidebar = theme.vars['--bg-secondary'] || '#252526';
  const accent = theme.vars['--accent'] || '#007acc';
  const text = theme.vars['--text-primary'] || '#d4d4d4';
  const statusbar = theme.vars['--bg-statusbar'] || '#007acc';

  return (
    <button
      className={`theme-card ${active ? 'active' : ''}`}
      onClick={() => onSelect(id)}
    >
      {/* Mini editor preview */}
      <div className="theme-preview" style={{ background: bg }}>
        <div style={{ background: sidebar, width: '20%', height: '100%', display: 'flex', flexDirection: 'column', gap: '2px', padding: '3px 2px' }}>
          {['▸ src', '  📄 app.js', '  📄 style.css'].map((l, i) => (
            <div key={i} style={{ fontSize: '4px', color: text, opacity: i === 0 ? 1 : 0.7, whiteSpace: 'nowrap' }}>{l}</div>
          ))}
        </div>
        <div style={{ flex: 1, padding: '3px', display: 'flex', flexDirection: 'column', gap: '1px' }}>
          <div style={{ height: '3px', background: accent, borderRadius: '1px', width: '40%', marginBottom: '2px' }}/>
          {['keyword fn hello() {', '  return "world"', '}'].map((l, i) => (
            <div key={i} style={{ fontSize: '4px', color: i === 0 ? accent : text, opacity: 0.8, fontFamily: 'monospace' }}>{l}</div>
          ))}
          <div style={{ marginTop: 'auto', height: '3px', background: statusbar, borderRadius: '0' }}/>
        </div>
      </div>
      <div className="theme-name" style={{ borderTop: active ? `2px solid ${accent}` : '2px solid transparent' }}>
        {active && <span style={{ color: accent }}>✓ </span>}
        {theme.name}
      </div>
    </button>
  );
}
