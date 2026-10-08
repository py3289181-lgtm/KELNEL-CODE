import { create } from 'zustand';
import { THEMES, applyTheme, FONT_OPTIONS } from '../themes/themes';

const DEFAULT_FILES = [
  {
    id: 'welcome-js',
    name: 'welcome.js',
    path: '/welcome.js',
    language: 'javascript',
    content: `// 🚀 Welcome to KernelCode IDE!
// The most powerful web-based code editor

function greet(name) {
  const message = \`Hello, \${name}! Welcome to KernelCode!\`;
  console.log(message);
  return message;
}

// Features:
// ✅ Monaco Editor (VS Code engine)
// ✅ 50+ Themes
// ✅ Multi-language support
// ✅ File Explorer
// ✅ Integrated Terminal
// ✅ Live Preview
// ✅ Git Integration
// ✅ Command Palette (Ctrl+Shift+P)
// ✅ Custom Theme Builder

greet('Developer');
`,
    isDirty: false,
  },
  {
    id: 'index-html',
    name: 'index.html',
    path: '/index.html',
    language: 'html',
    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Hello, KernelCode! 🚀</h1>
        <p>Start building something amazing!</p>
        <button onclick="showAlert()">Click me!</button>
    </div>
    <script src="app.js"></script>
</body>
</html>
`,
    isDirty: false,
  },
  {
    id: 'style-css',
    name: 'style.css',
    path: '/style.css',
    language: 'css',
    content: `/* KernelCode - Style Sheet */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  text-align: center;
}

h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 16px;
}

button {
  background: #667eea;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 16px;
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.05);
  background: #5a6fd6;
}
`,
    isDirty: false,
  },
  {
    id: 'app-js',
    name: 'app.js',
    path: '/app.js',
    language: 'javascript',
    content: `// app.js - Main Application Script

function showAlert() {
  alert('Hello from KernelCode! 🚀');
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('App initialized!');
  
  const h1 = document.querySelector('h1');
  if (h1) {
    h1.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    h1.style.webkitBackgroundClip = 'text';
    h1.style.webkitTextFillColor = 'transparent';
  }
});
`,
    isDirty: false,
  },
];

const DEFAULT_TREE = {
  id: 'root',
  name: 'kernelcode',
  type: 'folder',
  isOpen: true,
  children: [
    {
      id: 'src',
      name: 'src',
      type: 'folder',
      isOpen: true,
      children: [
        { id: 'welcome-js', name: 'welcome.js', type: 'file', language: 'javascript' },
        { id: 'index-html', name: 'index.html', type: 'file', language: 'html' },
        { id: 'style-css', name: 'style.css', type: 'file', language: 'css' },
        { id: 'app-js', name: 'app.js', type: 'file', language: 'javascript' },
      ]
    },
    { id: 'package-json', name: 'package.json', type: 'file', language: 'json' },
    { id: 'readme-md', name: 'README.md', type: 'file', language: 'markdown' },
  ]
};

export const useStore = create((set, get) => ({
  // ===== TABS & FILES =====
  files: DEFAULT_FILES,
  openTabs: ['welcome-js'],
  activeTabId: 'welcome-js',
  
  openFile: (fileId) => {
    const { openTabs } = get();
    if (!openTabs.includes(fileId)) {
      set({ openTabs: [...openTabs, fileId] });
    }
    set({ activeTabId: fileId });
  },
  
  closeTab: (fileId) => {
    const { openTabs, activeTabId } = get();
    const newTabs = openTabs.filter(id => id !== fileId);
    let newActive = activeTabId;
    if (activeTabId === fileId) {
      const idx = openTabs.indexOf(fileId);
      newActive = newTabs[Math.min(idx, newTabs.length - 1)] || null;
    }
    set({ openTabs: newTabs, activeTabId: newActive });
  },
  
  updateFileContent: (fileId, content) => {
    set(state => ({
      files: state.files.map(f => f.id === fileId ? { ...f, content, isDirty: true } : f)
    }));
  },
  
  saveFile: (fileId) => {
    set(state => ({
      files: state.files.map(f => f.id === fileId ? { ...f, isDirty: false } : f)
    }));
  },
  
  createFile: (name, parentId = null) => {
    const ext = name.split('.').pop();
    const langMap = { js: 'javascript', jsx: 'javascript', ts: 'typescript', tsx: 'typescript',
      html: 'html', css: 'css', scss: 'scss', json: 'json', md: 'markdown', py: 'python',
      rs: 'rust', go: 'go', java: 'java', cpp: 'cpp', c: 'c', cs: 'csharp',
      php: 'php', rb: 'ruby', sh: 'shell', yaml: 'yaml', yml: 'yaml', xml: 'xml',
      sql: 'sql', graphql: 'graphql', vue: 'html', svelte: 'html' };
    const id = `file-${Date.now()}`;
    const newFile = { id, name, path: `/${name}`, language: langMap[ext] || 'plaintext', content: '', isDirty: false };
    set(state => ({ files: [...state.files, newFile] }));
    get().openFile(id);
    return id;
  },
  
  getActiveFile: () => {
    const { files, activeTabId } = get();
    return files.find(f => f.id === activeTabId) || null;
  },

  // ===== FILE TREE =====
  fileTree: DEFAULT_TREE,
  
  toggleFolder: (folderId) => {
    const toggle = (node) => {
      if (node.id === folderId) return { ...node, isOpen: !node.isOpen };
      if (node.children) return { ...node, children: node.children.map(toggle) };
      return node;
    };
    set(state => ({ fileTree: toggle(state.fileTree) }));
  },

  // ===== LAYOUT =====
  sidebarWidth: 240,
  panelHeight: 200,
  showSidebar: true,
  showPanel: true,
  showPreview: false,
  activePanel: 'terminal',
  activeSidebarPanel: 'explorer',
  showMinimap: true,
  wordWrap: 'off',
  fontSize: 14,
  zenMode: false,
  
  toggleSidebar: () => set(state => ({ showSidebar: !state.showSidebar })),
  togglePanel: () => set(state => ({ showPanel: !state.showPanel })),
  togglePreview: () => set(state => ({ showPreview: !state.showPreview })),
  toggleMinimap: () => set(state => ({ showMinimap: !state.showMinimap })),
  toggleWordWrap: () => set(state => ({ wordWrap: state.wordWrap === 'off' ? 'on' : 'off' })),
  toggleZenMode: () => set(state => ({ zenMode: !state.zenMode })),
  setActivePanel: (panel) => set({ activePanel: panel }),
  setActiveSidebarPanel: (panel) => set({ activeSidebarPanel: panel }),
  setSidebarWidth: (w) => set({ sidebarWidth: w }),
  setPanelHeight: (h) => set({ panelHeight: h }),
  setFontSize: (size) => set({ fontSize: size }),

  // ===== THEMES =====
  currentTheme: 'vs-dark',
  currentFont: FONT_OPTIONS[0],
  customTheme: null,
  
  setTheme: (themeId) => {
    applyTheme(themeId);
    set({ currentTheme: themeId });
  },
  
  setFont: (fontOption) => {
    document.documentElement.style.setProperty('--font-editor', fontOption.value);
    set({ currentFont: fontOption });
  },
  
  setCustomTheme: (vars) => {
    applyTheme(null, vars);
    set({ currentTheme: 'custom', customTheme: vars });
  },

  // ===== COMMAND PALETTE =====
  showCommandPalette: false,
  setShowCommandPalette: (v) => set({ showCommandPalette: v }),
  
  // ===== THEME BUILDER =====
  showThemeBuilder: false,
  setShowThemeBuilder: (v) => set({ showThemeBuilder: v }),
  
  // ===== SEARCH =====
  showSearch: false,
  searchQuery: '',
  replaceQuery: '',
  setShowSearch: (v) => set({ showSearch: v }),
  setSearchQuery: (q) => set({ searchQuery: q }),
  setReplaceQuery: (q) => set({ replaceQuery: q }),
  
  // ===== GIT =====
  gitBranch: 'main',
  gitStatus: { added: 2, modified: 3, deleted: 0 },
  
  // ===== NOTIFICATIONS =====
  notifications: [],
  addNotification: (msg, type = 'info') => {
    const id = Date.now();
    set(state => ({ notifications: [...state.notifications, { id, msg, type }] }));
    setTimeout(() => {
      set(state => ({ notifications: state.notifications.filter(n => n.id !== id) }));
    }, 3000);
  },
  
  // ===== CURSOR =====
  cursorPosition: { line: 1, column: 1 },
  setCursorPosition: (pos) => set({ cursorPosition: pos }),
  
  // ===== SELECTION =====
  selectedText: '',
  setSelectedText: (text) => set({ selectedText: text }),
}));
