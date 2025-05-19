import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const links = [
  { to: '/admin/dashboard', label: 'Genel Bakış' },
  { to: '/admin/employees', label: 'Çalışanlar' },
  { to: '/admin/branches', label: 'Şubeler' },
  { to: '/admin/reports', label: 'Raporlar' },
  { to: '/admin/stock', label: 'Stok' },
];

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
}) {
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <aside
      style={{
        position: 'fixed',
        top: 0,
        left: isOpen || window.innerWidth >= 768 ? 0 : '-100%',
        width: '240px',
        height: '100vh',
        background: '#1e293b',
        color: '#fff',
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'left 0.3s ease-in-out',
        zIndex: 1000,
      }}
    >
      <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Yönetim
      </h2>

      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          onClick={() => setIsOpen(false)}
          style={{
            color: location.pathname === link.to ? '#60a5fa' : '#fff',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            backgroundColor:
              location.pathname === link.to ? '#334155' : 'transparent',
            transition: '0.2s',
          }}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  );
}
