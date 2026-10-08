import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import FileExplorer from './FileExplorer';
import SearchPanel from './SearchPanel';
import GitPanel from './GitPanel';
import ExtensionsPanel from './ExtensionsPanel';
import './Sidebar.css';

export default function Sidebar() {
  const { activeSidebarPanel, sidebarWidth, setSidebarWidth } = useStore();
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e) => {
    setDragging(true);
    const startX = e.clientX;
    const startWidth = sidebarWidth;
    const onMove = (e) => setSidebarWidth(Math.max(150, Math.min(600, startWidth + e.clientX - startX)));
    const onUp = () => { setDragging(false); window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const panels = { explorer: FileExplorer, search: SearchPanel, git: GitPanel, extensions: ExtensionsPanel };
  const PanelComp = panels[activeSidebarPanel] || FileExplorer;

  return (
    <div className="sidebar" style={{ width: sidebarWidth }}>
      <PanelComp />
      <div className={`resize-handle resize-handle-vertical ${dragging ? 'active' : ''}`} onMouseDown={handleMouseDown} />
    </div>
  );
}
