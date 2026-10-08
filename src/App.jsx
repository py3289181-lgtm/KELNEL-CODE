import React, { useEffect, useCallback } from 'react';
import { useStore } from './store/useStore';
import ActivityBar from './components/ActivityBar/ActivityBar';
import Sidebar from './components/Sidebar/Sidebar';
import EditorArea from './components/Editor/EditorArea';
import StatusBar from './components/StatusBar/StatusBar';
import Panel from './components/Terminal/Panel';
import TitleBar from './components/TitleBar/TitleBar';
import CommandPalette from './components/CommandPalette/CommandPalette';
import ThemeBuilder from './components/ThemeBuilder/ThemeBuilder';
import Notifications from './Notifications';
import Preview from './components/Preview/Preview';
import './App.css';

export default function App() {
  const {
    showSidebar, showPanel, showPreview, zenMode,
    showCommandPalette, setShowCommandPalette,
    showThemeBuilder, setShowThemeBuilder,
    toggleSidebar, togglePanel, togglePreview,
    toggleZenMode, setActiveSidebarPanel,
    saveFile, activeTabId, addNotification,
    setShowSearch,
  } = useStore();

  // Global keyboard shortcuts
  const handleKeyDown = useCallback((e) => {
    const ctrl = e.ctrlKey || e.metaKey;
    if (ctrl && e.key === 'p' && !e.shiftKey) { e.preventDefault(); setShowCommandPalette(true); }
    if (ctrl && e.shiftKey && e.key === 'P') { e.preventDefault(); setShowCommandPalette(true); }
    if (ctrl && e.key === 'b') { e.preventDefault(); toggleSidebar(); }
    if (ctrl && e.key === '`') { e.preventDefault(); togglePanel(); }
    if (ctrl && e.key === 's') { e.preventDefault(); if (activeTabId) { saveFile(activeTabId); addNotification('File saved ✓', 'success'); } }
    if (ctrl && e.key === 'f') { e.preventDefault(); setShowSearch(true); }
    if (ctrl && e.key === 'k') { if (e.key === 'k') {} }
    if (e.key === 'F11') { e.preventDefault(); toggleZenMode(); }
    if (e.key === 'Escape') {
      setShowCommandPalette(false);
      setShowThemeBuilder(false);
      setShowSearch(false);
    }
  }, [activeTabId]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={`app ${zenMode ? 'zen-mode' : ''}`}>
      {!zenMode && <TitleBar />}
      <div className="app-body">
        {!zenMode && <ActivityBar />}
        {showSidebar && !zenMode && <Sidebar />}
        <div className="editor-container">
          <div className="editor-preview">
            <EditorArea />
            {showPreview && <Preview />}
          </div>
          {showPanel && !zenMode && <Panel />}
        </div>
      </div>
      {!zenMode && <StatusBar />}
      {showCommandPalette && <CommandPalette />}
      {showThemeBuilder && <ThemeBuilder />}
      <Notifications />
    </div>
  );
}
