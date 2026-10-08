import React from 'react';
import { useStore } from '../../store/useStore';
import './ActivityBar.css';

const panels = [
  { id: 'explorer', icon: '📁', title: 'Explorer (Ctrl+Shift+E)' },
  { id: 'search', icon: '🔍', title: 'Search (Ctrl+Shift+F)' },
  { id: 'git', icon: '⎇', title: 'Source Control (Ctrl+Shift+G)' },
  { id: 'extensions', icon: '⊞', title: 'Extensions (Ctrl+Shift+X)' },
];

const bottomPanels = [
  { id: 'themes', icon: '🎨', title: 'Themes & Appearance' },
  { id: 'settings', icon: '⚙', title: 'Settings' },
];

export default function ActivityBar() {
  const { activeSidebarPanel, setActiveSidebarPanel, showSidebar, toggleSidebar,
    setShowThemeBuilder } = useStore();

  const handleClick = (id) => {
    if (id === 'themes') { setShowThemeBuilder(true); return; }
    if (activeSidebarPanel === id && showSidebar) {
      toggleSidebar();
    } else {
      setActiveSidebarPanel(id);
      if (!showSidebar) toggleSidebar();
    }
  };

  return (
    <div className="activity-bar">
      <div className="activity-top">
        {panels.map(p => (
          <button
            key={p.id}
            className={`activity-btn ${activeSidebarPanel === p.id && showSidebar ? 'active' : ''}`}
            onClick={() => handleClick(p.id)}
            title={p.title}
          >
            <span className="activity-icon">{p.icon}</span>
          </button>
        ))}
      </div>
      <div className="activity-bottom">
        {bottomPanels.map(p => (
          <button
            key={p.id}
            className="activity-btn"
            onClick={() => handleClick(p.id)}
            title={p.title}
          >
            <span className="activity-icon">{p.icon}</span>
          </button>
        ))}
        <button className="activity-btn avatar" title="Account">
          <span style={{ fontSize: '20px' }}>👤</span>
        </button>
      </div>
    </div>
  );
}
