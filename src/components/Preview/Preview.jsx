import React, { useRef, useEffect } from 'react';
import { useStore } from '../../store/useStore';

export default function Preview() {
  const { files, activeTabId } = useStore();
  const iframeRef = useRef(null);

  const htmlFile = files.find(f => f.language === 'html');
  const cssFile = files.find(f => f.language === 'css' || f.name.endsWith('.css'));
  const jsFile = files.find(f => (f.language === 'javascript') && !f.name.includes('welcome'));

  const buildPreview = () => {
    const html = htmlFile?.content || '<h1 style="font-family:sans-serif;text-align:center;margin-top:40px;color:#667eea">No HTML file found</h1>';
    const css = cssFile?.content || '';
    const js = jsFile?.content || '';
    
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
* { box-sizing: border-box; }
${css}
</style>
</head>
<body>
${html.includes('<body') ? html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || html : html}
<script>
try { ${js} } catch(e) { console.error(e); }
</script>
</body>
</html>`;
  };

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(buildPreview());
        doc.close();
      }
    }
  }, [files]);

  return (
    <div style={{
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      borderLeft: '1px solid var(--border)',
      background: '#fff',
      flexShrink: 0
    }}>
      <div style={{
        padding: '6px 12px',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border)',
        fontSize: '12px',
        color: 'var(--text-secondary)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span>👁</span>
        <span>Live Preview</span>
        <button
          onClick={() => iframeRef.current && (() => {
            const doc = iframeRef.current.contentDocument;
            doc.open(); doc.write(buildPreview()); doc.close();
          })()}
          style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--text-accent)' }}
        >
          ↺ Refresh
        </button>
      </div>
      <iframe
        ref={iframeRef}
        title="Live Preview"
        style={{ flex: 1, border: 'none', width: '100%' }}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}
