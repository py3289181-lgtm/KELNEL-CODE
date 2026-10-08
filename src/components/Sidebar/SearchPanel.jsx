import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import './Sidebar.css';

export default function SearchPanel() {
  const { files, openFile, setShowSearch } = useStore();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (q) => {
    setQuery(q);
    if (!q.trim()) { setResults([]); return; }
    const found = [];
    files.forEach(file => {
      const lines = file.content.split('\n');
      lines.forEach((line, i) => {
        if (line.toLowerCase().includes(q.toLowerCase())) {
          found.push({ fileId: file.id, fileName: file.name, line: i + 1, text: line.trim(), match: q });
        }
      });
    });
    setResults(found);
  };

  const highlight = (text, query) => {
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return <>{text.slice(0, idx)}<mark style={{ background: '#ffd700', color: '#000' }}>{text.slice(idx, idx + query.length)}</mark>{text.slice(idx + query.length)}</>;
  };

  return (
    <div className="sidebar-panel">
      <div className="sidebar-title">Search</div>
      <div className="sidebar-content" style={{ padding: '8px' }}>
        <input
          placeholder="Search in files..."
          value={query}
          onChange={e => handleSearch(e.target.value)}
          style={{ width: '100%', marginBottom: '8px' }}
          autoFocus
        />
        {results.length > 0 && (
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            {results.length} result{results.length !== 1 ? 's' : ''}
          </div>
        )}
        {results.map((r, i) => (
          <div key={i} onClick={() => openFile(r.fileId)} style={{
            padding: '4px 6px', cursor: 'pointer', borderRadius: '3px', marginBottom: '2px',
            background: 'var(--bg-tertiary)', fontSize: '12px'
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-tertiary)'}
          >
            <div style={{ color: 'var(--text-accent)', fontWeight: '500' }}>{r.fileName}:{r.line}</div>
            <div style={{ color: 'var(--text-secondary)', fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {highlight(r.text, query)}
            </div>
          </div>
        ))}
        {query && results.length === 0 && (
          <div style={{ color: 'var(--text-muted)', fontSize: '12px', textAlign: 'center', marginTop: '20px' }}>No results found</div>
        )}
      </div>
    </div>
  );
}
