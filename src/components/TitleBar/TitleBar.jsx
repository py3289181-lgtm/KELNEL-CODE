import React from 'react';
import { useStore } from '../../store/useStore';
import './TitleBar.css';

const menuItems = ['File', 'Edit', 'View', 'Terminal', 'Extensions', 'Git', 'Help'];

export default function TitleBar() {
  const { activeTabId, files } = useStore();
  const activeFile = files.find(f => f.id === activeTabId);

  return (
    <div className="titlebar">
      <div className="titlebar-left">
        <div className="titlebar-logo">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="9" height="9" rx="1" fill="#00d4aa"/>
            <rect x="13" y="2" width="9" height="9" rx="1" fill="#7c3aed"/>
            <rect x="2" y="13" width="9" height="9" rx="1" fill="#f59e0b"/>
            <rect x="13" y="13" width="9" height="9" rx="1" fill="#ef4444"/>
          </svg>
          <span>KernelCode</span>
        </div>
        <nav className="menu-bar">
          {menuItems.map(item => (
            <button key={item} className="menu-item">{item}</button>
          ))}
        </nav>
      </div>
      <div className="titlebar-center">
        <span className="titlebar-file">
          {activeFile ? activeFile.name : 'KernelCode IDE'}
        </span>
      </div>
      <div className="titlebar-right">
        <div className="window-controls">
          <button className="wc-btn minimize">─</button>
          <button className="wc-btn maximize">□</button>
          <button className="wc-btn close">✕</button>
        </div>
      </div>
    </div>
  );
}
