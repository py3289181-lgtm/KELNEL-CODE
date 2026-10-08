import React from 'react';
import { useStore } from '../../store/useStore';
import './StatusBar.css';

export default function StatusBar() {
  const {
    cursorPosition, selectedText, currentTheme, gitBranch, gitStatus,
    activeTabId, files, wordWrap, toggleWordWrap, toggleMinimap, showMinimap,
    setActivePanel, togglePanel, showPanel, addNotification, toggleZenMode
  } = useStore();

  const activeFile = files.find(f => f.id === activeTabId);
  const totalErrors = 0;
  const totalWarnings = 2;

  return (
    <div className="statusbar">
      {/* Left */}
      <div className="statusbar-left">
        <button className="statusbar-item git-branch" onClick={() => addNotification(`Branch: ${gitBranch}`, 'info')}>
          ⎇ {gitBranch}
        </button>
        <button className="statusbar-item" style={{ color: totalErrors > 0 ? '#f44747' : 'inherit' }}
          onClick={() => { setActivePanel('problems'); if (!showPanel) togglePanel(); }}>
          ✕ {totalErrors} ⚠ {totalWarnings}
        </button>
      </div>

      {/* Center */}
      <div className="statusbar-center">
        <span className="statusbar-item kernelcode-badge">⚡ KernelCode</span>
      </div>

      {/* Right */}
      <div className="statusbar-right">
        <button className="statusbar-item" onClick={() => addNotification('Cursor: Ln ' + cursorPosition.line + ', Col ' + cursorPosition.column)}>
          Ln {cursorPosition.line}, Col {cursorPosition.column}
        </button>
        {selectedText && (
          <span className="statusbar-item">({selectedText.length} selected)</span>
        )}
        <button className="statusbar-item" onClick={toggleWordWrap}>
          {wordWrap === 'on' ? 'Word Wrap: On' : 'Word Wrap: Off'}
        </button>
        <button className="statusbar-item" onClick={toggleMinimap}>
          {showMinimap ? 'Minimap: On' : 'Minimap: Off'}
        </button>
        <span className="statusbar-item">UTF-8</span>
        <span className="statusbar-item">LF</span>
        <span className="statusbar-item">Spaces: 2</span>
        <button
          className="statusbar-item language-pill"
          onClick={() => addNotification(`Language: ${activeFile?.language || 'none'}`)}
        >
          {activeFile?.language || 'plaintext'}
        </button>
        <button className="statusbar-item" onClick={toggleZenMode} title="Zen Mode (F11)">
          🧘
        </button>
        <span className="statusbar-item theme-indicator">🎨 {currentTheme}</span>
      </div>
    </div>
  );
}
