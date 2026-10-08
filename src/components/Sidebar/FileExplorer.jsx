import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import './Sidebar.css';

const LANG_ICONS = {
  javascript: '🟨', jsx: '⚛️', typescript: '🔷', tsx: '⚛️',
  html: '🟧', css: '🟦', scss: '🟣', json: '📋',
  markdown: '📝', python: '🐍', rust: '🦀', go: '🐹',
  java: '☕', cpp: '➕', c: '🔵', csharp: '🟩', php: '🐘',
  ruby: '💎', shell: '🖥️', yaml: '📄', xml: '📄', sql: '🗄️',
  default: '📄'
};

const FOLDER_ICON = { open: '📂', closed: '📁' };

function TreeNode({ node, depth = 0 }) {
  const { openFile, toggleFolder, createFile } = useStore();
  const [showInput, setShowInput] = useState(false);
  const [newName, setNewName] = useState('');

  const icon = node.type === 'folder'
    ? (node.isOpen ? FOLDER_ICON.open : FOLDER_ICON.closed)
    : (LANG_ICONS[node.language] || LANG_ICONS.default);

  const handleClick = () => {
    if (node.type === 'folder') toggleFolder(node.id);
    else openFile(node.id);
  };

  const handleNewFile = (e) => {
    e.stopPropagation();
    setShowInput(true);
    setNewName('');
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (newName.trim()) createFile(newName.trim());
    setShowInput(false);
  };

  return (
    <div>
      <div
        className="tree-node"
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
        onClick={handleClick}
      >
        {node.type === 'folder' && (
          <span className="tree-arrow">{node.isOpen ? '▾' : '▸'}</span>
        )}
        <span className="tree-icon">{icon}</span>
        <span className="tree-name">{node.name}</span>
        {node.type === 'folder' && (
          <button className="tree-action" onClick={handleNewFile} title="New File">+</button>
        )}
      </div>
      {showInput && (
        <form onSubmit={handleCreate} style={{ paddingLeft: `${(depth+1) * 12 + 8}px`, padding: '4px 8px' }}>
          <input
            autoFocus
            value={newName}
            onChange={e => setNewName(e.target.value)}
            onBlur={() => setShowInput(false)}
            placeholder="filename.js"
            style={{ width: '100%', fontSize: '12px' }}
          />
        </form>
      )}
      {node.type === 'folder' && node.isOpen && node.children && (
        node.children.map(child => <TreeNode key={child.id} node={child} depth={depth + 1} />)
      )}
    </div>
  );
}

export default function FileExplorer() {
  const { fileTree, createFile } = useStore();

  return (
    <div className="sidebar-panel">
      <div className="sidebar-title">
        Explorer
        <button className="sidebar-action-btn" onClick={() => createFile('new-file.js')} title="New File">+</button>
      </div>
      <div className="sidebar-content">
        <style>{`
          .tree-node {
            display: flex;
            align-items: center;
            gap: 4px;
            height: 22px;
            cursor: pointer;
            padding-right: 8px;
            font-size: 13px;
            color: var(--text-primary);
            position: relative;
          }
          .tree-node:hover { background: var(--bg-hover); }
          .tree-arrow { font-size: 10px; color: var(--text-secondary); width: 12px; flex-shrink: 0; }
          .tree-icon { font-size: 13px; flex-shrink: 0; }
          .tree-name { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .tree-action {
            display: none;
            font-size: 14px;
            color: var(--icon-color);
            padding: 0 4px;
            margin-left: auto;
            border-radius: 3px;
          }
          .tree-node:hover .tree-action { display: flex; }
          .tree-action:hover { background: var(--bg-selected); color: var(--text-bright); }
        `}</style>
        <TreeNode node={fileTree} depth={0} />
      </div>
    </div>
  );
}
