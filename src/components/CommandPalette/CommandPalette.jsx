import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../../store/useStore';
import './CommandPalette.css';

const COMMANDS = [
  { id: 'new-file', label: '📄 New File', desc: 'Create a new file', shortcut: 'Ctrl+N' },
  { id: 'open-file', label: '📂 Open File', desc: 'Open a file from disk', shortcut: 'Ctrl+O' },
  { id: 'save', label: '💾 Save File', desc: 'Save current file', shortcut: 'Ctrl+S' },
  { id: 'save-all', label: '💾 Save All', desc: 'Save all open files', shortcut: 'Ctrl+Shift+S' },
  { id: 'toggle-sidebar', label: '▐ Toggle Sidebar', desc: 'Show/hide sidebar', shortcut: 'Ctrl+B' },
  { id: 'toggle-terminal', label: '$ Toggle Terminal', desc: 'Show/hide terminal panel', shortcut: 'Ctrl+`' },
  { id: 'toggle-minimap', label: '🗺 Toggle Minimap', desc: 'Show/hide minimap' },
  { id: 'toggle-word-wrap', label: '↵ Toggle Word Wrap', desc: 'Enable/disable word wrap' },
  { id: 'toggle-zen', label: '🧘 Zen Mode', desc: 'Focus mode - hide all UI', shortcut: 'F11' },
  { id: 'theme-builder', label: '🎨 Open Theme Builder', desc: 'Create custom themes' },
  { id: 'format-doc', label: '✨ Format Document', desc: 'Format current file', shortcut: 'Shift+Alt+F' },
  { id: 'live-preview', label: '👁 Toggle Live Preview', desc: 'Show HTML/CSS preview', shortcut: 'Ctrl+Shift+V' },
  { id: 'split-editor', label: '⊞ Split Editor', desc: 'Split editor into two panes' },
  { id: 'close-tab', label: '✕ Close Tab', desc: 'Close current tab', shortcut: 'Ctrl+W' },
  { id: 'close-all', label: '✕ Close All Tabs', desc: 'Close all open tabs' },
  { id: 'git-status', label: '⎇ Git: Status', desc: 'Show git status' },
  { id: 'git-commit', label: '✓ Git: Commit', desc: 'Commit staged changes' },
  { id: 'increase-font', label: 'A+ Increase Font Size', desc: 'Make text larger', shortcut: 'Ctrl+=' },
  { id: 'decrease-font', label: 'A- Decrease Font Size', desc: 'Make text smaller', shortcut: 'Ctrl+-' },
  { id: 'reset-font', label: '↺ Reset Font Size', desc: 'Reset to default size' },
  { id: 'explorer', label: '📁 Open File Explorer', desc: 'Show file explorer sidebar' },
  { id: 'search-panel', label: '🔍 Open Search', desc: 'Search across files' },
  { id: 'extensions', label: '⊞ Extensions', desc: 'Manage extensions' },
];

export default function CommandPalette() {
  const { setShowCommandPalette, toggleSidebar, togglePanel, toggleMinimap,
    toggleWordWrap, toggleZenMode, setShowThemeBuilder, saveFile, activeTabId,
    addNotification, setActiveSidebarPanel, togglePreview, fontSize, setFontSize,
    openTabs, closeTab } = useStore();

  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const filtered = query
    ? COMMANDS.filter(c => c.label.toLowerCase().includes(query.toLowerCase()) || c.desc.toLowerCase().includes(query.toLowerCase()))
    : COMMANDS;

  const execute = (cmd) => {
    setShowCommandPalette(false);
    switch (cmd.id) {
      case 'toggle-sidebar': toggleSidebar(); break;
      case 'toggle-terminal': togglePanel(); break;
      case 'toggle-minimap': toggleMinimap(); break;
      case 'toggle-word-wrap': toggleWordWrap(); break;
      case 'toggle-zen': toggleZenMode(); break;
      case 'theme-builder': setShowThemeBuilder(true); break;
      case 'save': if (activeTabId) { saveFile(activeTabId); addNotification('Saved ✓', 'success'); } break;
      case 'live-preview': togglePreview(); break;
      case 'increase-font': setFontSize(Math.min(fontSize + 2, 28)); addNotification(`Font: ${Math.min(fontSize + 2, 28)}px`); break;
      case 'decrease-font': setFontSize(Math.max(fontSize - 2, 8)); addNotification(`Font: ${Math.max(fontSize - 2, 8)}px`); break;
      case 'reset-font': setFontSize(14); addNotification('Font reset to 14px'); break;
      case 'explorer': setActiveSidebarPanel('explorer'); break;
      case 'search-panel': setActiveSidebarPanel('search'); break;
      case 'extensions': setActiveSidebarPanel('extensions'); break;
      case 'git-status': setActiveSidebarPanel('git'); break;
      case 'close-tab': if (activeTabId) closeTab(activeTabId); break;
      case 'close-all': [...openTabs].forEach(id => closeTab(id)); break;
      default: addNotification(`Command: ${cmd.label}`, 'info');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { setShowCommandPalette(false); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIdx(i => Math.min(i + 1, filtered.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIdx(i => Math.max(i - 1, 0)); }
    if (e.key === 'Enter') { if (filtered[selectedIdx]) execute(filtered[selectedIdx]); }
  };

  useEffect(() => { setSelectedIdx(0); }, [query]);

  return (
    <div className="overlay" onClick={() => setShowCommandPalette(false)}>
      <div className="command-palette" onClick={e => e.stopPropagation()}>
        <div className="cp-input-row">
          <span className="cp-icon">⌘</span>
          <input
            ref={inputRef}
            className="cp-input"
            placeholder="Type a command or search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <kbd className="cp-esc">Esc</kbd>
        </div>
        <div className="cp-list" ref={listRef}>
          {filtered.map((cmd, i) => (
            <div
              key={cmd.id}
              className={`cp-item ${i === selectedIdx ? 'selected' : ''}`}
              onClick={() => execute(cmd)}
              onMouseEnter={() => setSelectedIdx(i)}
            >
              <div className="cp-item-left">
                <span className="cp-item-label">{cmd.label}</span>
                <span className="cp-item-desc">{cmd.desc}</span>
              </div>
              {cmd.shortcut && <kbd className="cp-shortcut">{cmd.shortcut}</kbd>}
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="cp-empty">No commands match "{query}"</div>
          )}
        </div>
      </div>
    </div>
  );
}
