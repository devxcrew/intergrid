import React, { useState, useEffect } from 'react';

// Mock types until connected to API definitions
type LabDocumentMock = { id: string, name: string };

export function LabWorkspace({ draftId }: { draftId: string }) {
  const [draft, setDraft] = useState<LabDocumentMock | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock fetch for independent testing
    setTimeout(() => {
      setDraft({ id: draftId, name: 'Untitled Lab Document' });
      setLoading(false);
    }, 500);
  }, [draftId]);

  if (loading) return <div>Loading Lab Workspace...</div>;

  return (
    <div className="lab-workspace" style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      <aside className="lab-tree" style={{ width: '250px', borderRight: '1px solid #e5e5e5', padding: '1rem', overflowY: 'auto' }}>
        <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#666' }}>Component Tree</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0' }}>
          <li style={{ padding: '0.5rem', backgroundColor: '#f0f0f0', borderRadius: '4px', marginBottom: '0.5rem', cursor: 'pointer' }}>
            Root Container
          </li>
          <li style={{ padding: '0.5rem 0.5rem 0.5rem 1.5rem', cursor: 'pointer' }}>
            Header Section
          </li>
          <li style={{ padding: '0.5rem 0.5rem 0.5rem 1.5rem', cursor: 'pointer' }}>
            Hero Banner
          </li>
        </ul>
      </aside>
      
      <main className="lab-preview" style={{ flex: 1, backgroundColor: '#fafafa', display: 'flex', flexDirection: 'column' }}>
        <header style={{ padding: '1rem', borderBottom: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{draft?.name}</h2>
          <div>
            <button style={{ marginRight: '0.5rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>Desktop</button>
            <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Mobile</button>
          </div>
        </header>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div className="canvas" style={{ width: '100%', maxWidth: '800px', height: '600px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <p style={{ color: '#999' }}>Live Preview Canvas</p>
          </div>
        </div>
      </main>
      
      <aside className="lab-inspector" style={{ width: '300px', borderLeft: '1px solid #e5e5e5', padding: '1rem', overflowY: 'auto' }}>
        <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#666' }}>Visual Inspector</h3>
        
        <div style={{ marginTop: '1.5rem' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>Typography</h4>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.85rem' }}>Font Family</label>
            <select style={{ padding: '0.4rem' }}>
              <option>Inter</option>
              <option>Roboto</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>Colors</h4>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.85rem' }}>Background</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="color" defaultValue="#ffffff" />
              <input type="text" defaultValue="#ffffff" style={{ flex: 1, padding: '0.4rem' }} />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
