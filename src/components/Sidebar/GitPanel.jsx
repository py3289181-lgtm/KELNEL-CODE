import React from 'react';
import { useStore } from '../../store/useStore';
import './Sidebar.css';

export default function GitPanel() {
  const { gitBranch, gitStatus, files, addNotification } = useStore();
  
  const changedFiles = files.filter(f => f.isDirty);

  return (
    <div className="sidebar-panel">
      <div className="sidebar-title">
        Source Control
        <span style={{ background: 'var(--accent)', color: '#fff', borderRadius: '10px', padding: '1px 6px', fontSize: '10px' }}>
          {changedFiles.length + gitStatus.modified}
        </span>
      </div>
      <div className="sidebar-content" style={{ padding: '8px' }}>
        <div style={{ marginBottom: '12px' }}>
          <button
            onClick={() => addNotification('Committed changes ✓', 'success')}
            style={{
              width: '100%', padding: '6px', background: 'var(--accent)', color: '#fff',
              borderRadius: '4px', fontSize: '12px', fontWeight: '500', marginBottom: '6px'
            }}
          >
            ✓ Commit
          </button>
          <input placeholder="Commit message..." style={{ width: '100%', fontSize: '12px' }} />
        </div>

        <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Changes ({changedFiles.length + gitStatus.modified})
        </div>

        {changedFiles.map(f => (
          <div key={f.id} style={{
            display: 'flex', alignItems: 'center', padding: '3px 6px', fontSize: '12px',
            color: 'var(--git-modified)', gap: '8px', borderRadius: '3px', cursor: 'pointer'
          }}>
            <span>M</span>
            <span style={{ flex: 1 }}>{f.name}</span>
          </div>
        ))}

        {[...Array(gitStatus.modified)].map((_, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', padding: '3px 6px', fontSize: '12px',
            color: 'var(--git-modified)', gap: '8px', borderRadius: '3px'
          }}>
            <span>M</span>
            <span style={{ flex: 1 }}>example-{i}.js</span>
          </div>
        ))}
        
        {[...Array(gitStatus.added)].map((_, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', padding: '3px 6px', fontSize: '12px',
            color: 'var(--git-added)', gap: '8px', borderRadius: '3px'
          }}>
            <span>U</span>
            <span style={{ flex: 1 }}>new-file-{i}.js</span>
          </div>
        ))}

        <div style={{ marginTop: '12px', padding: '8px', background: 'var(--bg-tertiary)', borderRadius: '4px', fontSize: '12px' }}>
          <div style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>Current Branch</div>
          <div style={{ color: 'var(--text-accent)', fontWeight: '500' }}>⎇ {gitBranch}</div>
        </div>

        <div style={{ marginTop: '8px', display: 'flex', gap: '4px' }}>
          <button onClick={() => addNotification('Pushed to origin ✓', 'success')} style={{
            flex: 1, padding: '4px', background: 'var(--bg-tertiary)', borderRadius: '3px',
            fontSize: '11px', color: 'var(--text-primary)', border: '1px solid var(--border)'
          }}>↑ Push</button>
          <button onClick={() => addNotification('Pulled from origin ✓', 'success')} style={{
            flex: 1, padding: '4px', background: 'var(--bg-tertiary)', borderRadius: '3px',
            fontSize: '11px', color: 'var(--text-primary)', border: '1px solid var(--border)'
          }}>↓ Pull</button>
        </div>
      </div>
    </div>
  );
}
