import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import './Panel.css';

const PANEL_TABS = ['TERMINAL', 'PROBLEMS', 'OUTPUT', 'DEBUG CONSOLE'];

function TerminalPanel() {
  const [history, setHistory] = useState([
    { type: 'output', text: '🚀 KernelCode Terminal — PowerShell' },
    { type: 'output', text: 'Type commands below. (Simulated environment)' },
    { type: 'output', text: '' },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const prompt = 'PS C:\\kernelcode> ';

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim();
    const newHistory = [...history, { type: 'prompt', text: prompt + trimmed }];
    
    let output = '';
    const parts = trimmed.split(' ');
    const base = parts[0]?.toLowerCase();
    
    switch (base) {
      case 'help': output = 'Available: ls, dir, pwd, echo, cls, clear, node --version, npm --version, git status, whoami, date, cat'; break;
      case 'ls': case 'dir': output = 'index.html    style.css    app.js    welcome.js    package.json    README.md'; break;
      case 'pwd': output = 'C:\\kernelcode'; break;
      case 'whoami': output = 'kernelcode\\developer'; break;
      case 'date': output = new Date().toLocaleString(); break;
      case 'echo': output = parts.slice(1).join(' ') || ''; break;
      case 'node': if (parts[1] === '--version') output = 'v20.11.0'; else output = 'Node.js REPL not available in browser'; break;
      case 'npm': if (parts[1] === '--version') output = '10.2.0'; else output = `npm ${parts.slice(1).join(' ')} — (simulated)`; break;
      case 'git':
        if (parts[1] === 'status') output = 'On branch main\nChanges not staged for commit:\n  modified:   app.js\n  modified:   style.css\nUntracked files:\n  new-feature.js';
        else if (parts[1] === 'log') output = 'commit a1b2c3d (HEAD -> main)\nAuthor: Developer <dev@kernelcode.io>\nDate:   ' + new Date().toDateString() + '\n\n    Initial commit';
        else output = `git ${parts.slice(1).join(' ')} — (simulated)`;
        break;
      case 'cls': case 'clear':
        setHistory([{ type: 'output', text: '🚀 KernelCode Terminal' }]);
        setInput('');
        return;
      case '': output = ''; break;
      default: output = `'${base}' is not recognized as a command. Type 'help' for commands.`;
    }

    if (output) newHistory.push({ type: 'output', text: output });
    setHistory(newHistory);
    setCmdHistory(prev => [trimmed, ...prev]);
    setHistIdx(-1);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { handleCommand(input); }
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIdx = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(newIdx);
      setInput(cmdHistory[newIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIdx = Math.max(histIdx - 1, -1);
      setHistIdx(newIdx);
      setInput(newIdx === -1 ? '' : cmdHistory[newIdx] || '');
    }
  };

  return (
    <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-output">
        {history.map((line, i) => (
          <div key={i} className={`terminal-line terminal-${line.type}`}>
            {line.text.split('\n').map((l, j) => <div key={j}>{l || '\u00a0'}</div>)}
          </div>
        ))}
        <div className="terminal-input-row">
          <span className="terminal-prompt">{prompt}</span>
          <input
            ref={inputRef}
            className="terminal-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

function ProblemsPanel() {
  const { files } = useStore();
  const problems = [
    { file: 'app.js', line: 12, col: 5, type: 'warning', msg: "Expected '===' but got '=='" },
    { file: 'style.css', line: 34, col: 1, type: 'info', msg: 'Consider using CSS variables' },
  ];
  return (
    <div style={{ padding: '8px', fontFamily: 'var(--font-editor)', fontSize: '12px' }}>
      {problems.map((p, i) => (
        <div key={i} style={{ display: 'flex', gap: '8px', padding: '4px 0', alignItems: 'flex-start', borderBottom: '1px solid var(--border)' }}>
          <span style={{ color: p.type === 'warning' ? 'var(--warning)' : 'var(--info)' }}>
            {p.type === 'warning' ? '⚠' : 'ℹ'}
          </span>
          <div>
            <div style={{ color: 'var(--text-primary)' }}>{p.msg}</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>{p.file}:{p.line}:{p.col}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Panel() {
  const { panelHeight, setPanelHeight, activePanel, setActivePanel } = useStore();
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e) => {
    setDragging(true);
    const startY = e.clientY;
    const startH = panelHeight;
    const onMove = (e) => setPanelHeight(Math.max(80, Math.min(600, startH + startY - e.clientY)));
    const onUp = () => { setDragging(false); window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  return (
    <div className="panel" style={{ height: panelHeight }}>
      <div className={`resize-handle resize-handle-horizontal ${dragging ? 'active' : ''}`} onMouseDown={handleMouseDown} />
      <div className="panel-header">
        <div className="panel-tabs">
          {PANEL_TABS.map(tab => (
            <button
              key={tab}
              className={`panel-tab ${activePanel === tab.toLowerCase().replace(' ', '-') ? 'active' : ''}`}
              onClick={() => setActivePanel(tab.toLowerCase().replace(' ', '-'))}
            >
              {tab}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '4px', padding: '0 8px' }}>
          <button style={{ color: 'var(--text-secondary)', fontSize: '14px', padding: '2px 6px' }}>+</button>
          <button style={{ color: 'var(--text-secondary)', fontSize: '14px', padding: '2px 6px' }}>⊡</button>
        </div>
      </div>
      <div className="panel-body">
        {activePanel === 'terminal' && <TerminalPanel />}
        {activePanel === 'problems' && <ProblemsPanel />}
        {activePanel === 'output' && <div style={{ padding: '8px', color: 'var(--text-secondary)', fontSize: '12px' }}>No output to display.</div>}
        {activePanel === 'debug-console' && <div style={{ padding: '8px', color: 'var(--text-secondary)', fontSize: '12px' }}>Debugger not attached.</div>}
      </div>
    </div>
  );
}
