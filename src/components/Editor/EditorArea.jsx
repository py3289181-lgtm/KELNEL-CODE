import React, { useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useStore } from '../../store/useStore';
import Tabs from '../Tabs/Tabs';
import { THEMES } from '../../themes/themes';
import './EditorArea.css';

export default function EditorArea() {
  const {
    files, activeTabId, openTabs, updateFileContent, setCursorPosition,
    setSelectedText, currentTheme, fontSize, showMinimap, wordWrap, addNotification
  } = useStore();

  const activeFile = files.find(f => f.id === activeTabId);
  const editorRef = useRef(null);

  const monacoTheme = THEMES[currentTheme]?.monacoTheme || 'vs-dark';

  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;

    // Cursor position tracking
    editor.onDidChangeCursorPosition((e) => {
      setCursorPosition({ line: e.position.lineNumber, column: e.position.column });
    });

    // Selection tracking
    editor.onDidChangeCursorSelection((e) => {
      const sel = editor.getModel()?.getValueInRange(e.selection) || '';
      setSelectedText(sel);
    });

    // Extra keybindings
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      const { activeTabId, saveFile, addNotification } = useStore.getState();
      if (activeTabId) { saveFile(activeTabId); addNotification('File saved ✓', 'success'); }
    });

    // Register custom themes
    registerMonacoThemes(monaco);

    // Set theme
    monaco.editor.setTheme(monacoTheme);
  };

  const registerMonacoThemes = (monaco) => {
    // One Dark Pro
    monaco.editor.defineTheme('one-dark-pro', {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'keyword', foreground: 'c678dd' },
        { token: 'string', foreground: '98c379' },
        { token: 'comment', foreground: '5c6370', fontStyle: 'italic' },
        { token: 'number', foreground: 'd19a66' },
        { token: 'type', foreground: 'e5c07b' },
        { token: 'function', foreground: '61afef' },
        { token: 'variable', foreground: 'e06c75' },
      ],
      colors: {
        'editor.background': '#282c34',
        'editor.foreground': '#abb2bf',
        'editor.lineHighlightBackground': '#2c313c',
        'editorLineNumber.foreground': '#4b5263',
        'editorCursor.foreground': '#528bff',
        'editor.selectionBackground': '#3e4451',
      }
    });

    // Dracula
    monaco.editor.defineTheme('dracula', {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'keyword', foreground: 'ff79c6' },
        { token: 'string', foreground: 'f1fa8c' },
        { token: 'comment', foreground: '6272a4', fontStyle: 'italic' },
        { token: 'number', foreground: 'bd93f9' },
        { token: 'function', foreground: '50fa7b' },
        { token: 'variable', foreground: 'f8f8f2' },
        { token: 'type', foreground: '8be9fd', fontStyle: 'italic' },
      ],
      colors: {
        'editor.background': '#282a36',
        'editor.foreground': '#f8f8f2',
        'editor.lineHighlightBackground': '#44475a40',
        'editorLineNumber.foreground': '#6272a4',
        'editorCursor.foreground': '#f8f8f2',
        'editor.selectionBackground': '#44475a',
      }
    });

    // Tokyo Night
    monaco.editor.defineTheme('tokyo-night', {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'keyword', foreground: 'bb9af7' },
        { token: 'string', foreground: '9ece6a' },
        { token: 'comment', foreground: '565f89', fontStyle: 'italic' },
        { token: 'number', foreground: 'ff9e64' },
        { token: 'function', foreground: '7aa2f7' },
        { token: 'type', foreground: '2ac3de' },
      ],
      colors: {
        'editor.background': '#1a1b2e',
        'editor.foreground': '#c0caf5',
        'editor.lineHighlightBackground': '#1e2040',
        'editorLineNumber.foreground': '#3b4261',
        'editorCursor.foreground': '#c0caf5',
        'editor.selectionBackground': '#283457',
      }
    });

    // Monokai
    monaco.editor.defineTheme('monokai', {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'keyword', foreground: 'f92672' },
        { token: 'string', foreground: 'e6db74' },
        { token: 'comment', foreground: '75715e', fontStyle: 'italic' },
        { token: 'number', foreground: 'ae81ff' },
        { token: 'function', foreground: 'a6e22e' },
        { token: 'type', foreground: '66d9ef', fontStyle: 'italic' },
      ],
      colors: {
        'editor.background': '#272822',
        'editor.foreground': '#f8f8f2',
        'editor.lineHighlightBackground': '#3e3d3240',
        'editorLineNumber.foreground': '#75715e',
        'editorCursor.foreground': '#f8f8f0',
        'editor.selectionBackground': '#49483e',
      }
    });

    // Nord
    monaco.editor.defineTheme('nord', {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'keyword', foreground: '81a1c1' },
        { token: 'string', foreground: 'a3be8c' },
        { token: 'comment', foreground: '4c566a', fontStyle: 'italic' },
        { token: 'number', foreground: 'b48ead' },
        { token: 'function', foreground: '88c0d0' },
        { token: 'type', foreground: '8fbcbb' },
      ],
      colors: {
        'editor.background': '#2e3440',
        'editor.foreground': '#d8dee9',
        'editor.lineHighlightBackground': '#3b425240',
        'editorLineNumber.foreground': '#4c566a',
        'editorCursor.foreground': '#d8dee9',
        'editor.selectionBackground': '#434c5e',
      }
    });

    // Catppuccin Mocha
    monaco.editor.defineTheme('catppuccin-mocha', {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'keyword', foreground: 'cba6f7' },
        { token: 'string', foreground: 'a6e3a1' },
        { token: 'comment', foreground: '6c7086', fontStyle: 'italic' },
        { token: 'number', foreground: 'fab387' },
        { token: 'function', foreground: '89b4fa' },
        { token: 'type', foreground: '89dceb' },
      ],
      colors: {
        'editor.background': '#1e1e2e',
        'editor.foreground': '#cdd6f4',
        'editor.lineHighlightBackground': '#31324440',
        'editorLineNumber.foreground': '#585b70',
        'editorCursor.foreground': '#f5e0dc',
        'editor.selectionBackground': '#45475a',
      }
    });

    // Register all other themes with base colors
    const darkThemes = ['gruvbox-dark', 'material-dark', 'github-dark', 'night-owl', 'palenight',
      'synthwave-84', 'cobalt2', 'shades-of-purple', 'ayu-dark', 'andromeda', 'panda',
      'radical', 'forest', 'cyberpunk', 'darcula', 'atom-one-dark', 'neon-dreams'];
    
    darkThemes.forEach(themeId => {
      if (!monaco.editor.getTheme || themeId in (monaco.editor._themeService?._knownThemes || {})) return;
      const t = THEMES[themeId];
      if (!t) return;
      const bg = t.vars['--bg-primary']?.replace('#', '') || '1e1e1e';
      const fg = t.vars['--text-primary']?.replace('#', '') || 'd4d4d4';
      const sel = t.vars['--bg-selected']?.replace('#', '') || '264f78';
      monaco.editor.defineTheme(themeId, {
        base: 'vs-dark', inherit: true, rules: [],
        colors: {
          'editor.background': `#${bg}`,
          'editor.foreground': `#${fg}`,
          'editor.selectionBackground': `#${sel}`,
        }
      });
    });

    // Light themes
    monaco.editor.defineTheme('github-light', {
      base: 'vs', inherit: true,
      rules: [
        { token: 'keyword', foreground: 'cf222e' },
        { token: 'string', foreground: '0a3069' },
        { token: 'comment', foreground: '6e7781', fontStyle: 'italic' },
        { token: 'number', foreground: '0550ae' },
        { token: 'function', foreground: '8250df' },
      ],
      colors: {
        'editor.background': '#ffffff',
        'editor.foreground': '#24292f',
        'editor.lineHighlightBackground': '#f6f8fa',
        'editorLineNumber.foreground': '#57606a',
        'editor.selectionBackground': '#ddf4ff',
      }
    });

    ['solarized-light', 'quiet-light', 'ayu-light'].forEach(themeId => {
      const t = THEMES[themeId];
      if (!t) return;
      const bg = t.vars['--bg-primary']?.replace('#', '') || 'ffffff';
      const fg = t.vars['--text-primary']?.replace('#', '') || '333333';
      monaco.editor.defineTheme(themeId, {
        base: 'vs', inherit: true, rules: [],
        colors: { 'editor.background': `#${bg}`, 'editor.foreground': `#${fg}` }
      });
    });
  };

  useEffect(() => {
    if (editorRef.current) {
      // Theme changed - update
    }
  }, [monacoTheme]);

  if (openTabs.length === 0) {
    return (
      <div className="editor-area editor-welcome">
        <div className="welcome-screen">
          <div className="welcome-logo">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="9" height="9" rx="1" fill="#00d4aa"/>
              <rect x="13" y="2" width="9" height="9" rx="1" fill="#7c3aed"/>
              <rect x="2" y="13" width="9" height="9" rx="1" fill="#f59e0b"/>
              <rect x="13" y="13" width="9" height="9" rx="1" fill="#ef4444"/>
            </svg>
          </div>
          <h1 className="welcome-title">KernelCode</h1>
          <p className="welcome-subtitle">The Power of VS Code, in your Browser</p>
          <div className="welcome-shortcuts">
            <div className="shortcut-item"><kbd>Ctrl+P</kbd><span>Quick Open File</span></div>
            <div className="shortcut-item"><kbd>Ctrl+Shift+P</kbd><span>Command Palette</span></div>
            <div className="shortcut-item"><kbd>Ctrl+`</kbd><span>Toggle Terminal</span></div>
            <div className="shortcut-item"><kbd>Ctrl+B</kbd><span>Toggle Sidebar</span></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="editor-area">
      <Tabs />
      {activeFile ? (
        <Editor
          key={activeFile.id}
          height="100%"
          language={activeFile.language}
          value={activeFile.content}
          theme={monacoTheme}
          onMount={handleEditorMount}
          onChange={(value) => updateFileContent(activeFile.id, value || '')}
          options={{
            fontSize,
            fontFamily: 'var(--font-editor)',
            fontLigatures: true,
            minimap: { enabled: showMinimap },
            wordWrap,
            lineNumbers: 'on',
            renderLineHighlight: 'all',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            insertSpaces: true,
            formatOnPaste: true,
            formatOnType: true,
            autoClosingBrackets: 'always',
            autoClosingQuotes: 'always',
            autoIndent: 'full',
            bracketPairColorization: { enabled: true },
            guides: { bracketPairs: true, indentation: true },
            smoothScrolling: true,
            cursorBlinking: 'smooth',
            cursorSmoothCaretAnimation: 'on',
            renderWhitespace: 'selection',
            occurrencesHighlight: 'singleFile',
            codeLens: true,
            folding: true,
            foldingHighlight: true,
            showFoldingControls: 'mouseover',
            matchBrackets: 'always',
            padding: { top: 8 },
            suggest: { showMethods: true, showFunctions: true, showConstructors: true },
            quickSuggestions: true,
            suggestOnTriggerCharacters: true,
            parameterHints: { enabled: true },
            hover: { enabled: true },
          }}
        />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
          Select a file to edit
        </div>
      )}
    </div>
  );
}
