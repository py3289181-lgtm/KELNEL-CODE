import React from 'react';
import { useStore } from '../../store/useStore';
import './Tabs.css';

const LANG_ICONS = {
  javascript: '🟨', typescript: '🔷', html: '🟧', css: '🟦',
  json: '📋', markdown: '📝', python: '🐍', rust: '🦀', go: '🐹',
  java: '☕', cpp: '➕', default: '📄'
};

export default function Tabs() {
  const { openTabs, activeTabId, files, openFile, closeTab } = useStore();

  const openFiles = openTabs.map(id => files.find(f => f.id === id)).filter(Boolean);

  const handleMiddleClick = (e, id) => {
    if (e.button === 1) { e.preventDefault(); closeTab(id); }
  };

  return (
    <div className="tabs-bar">
      {openFiles.map(file => (
        <div
          key={file.id}
          className={`tab ${file.id === activeTabId ? 'active' : ''} ${file.isDirty ? 'dirty' : ''}`}
          onClick={() => openFile(file.id)}
          onMouseDown={(e) => handleMiddleClick(e, file.id)}
          title={file.path}
        >
          <span className="tab-icon">{LANG_ICONS[file.language] || LANG_ICONS.default}</span>
          <span className="tab-name">{file.name}</span>
          {file.isDirty && <span className="tab-dirty" title="Unsaved changes">●</span>}
          <button
            className="tab-close"
            onClick={(e) => { e.stopPropagation(); closeTab(file.id); }}
            title="Close (Ctrl+W)"
          >
            ×
          </button>
        </div>
      ))}
      <div className="tabs-scrollable-space" />
    </div>
  );
}
