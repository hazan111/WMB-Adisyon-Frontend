// src/pages/admin/AdminPage.tsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/admin/Sidebar';

export default function AdminPage() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main
        style={{
          marginLeft: '240px',
          padding: '2rem',
          backgroundColor: '#f1f5f9',
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}
