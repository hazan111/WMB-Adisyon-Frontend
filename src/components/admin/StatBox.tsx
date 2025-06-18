interface StatBoxProps {
  title: string;
  value: number;
  icon?: React.ReactNode;
}

export default function StatBox({ title, value, icon }: StatBoxProps) {
  return (
    <div
      style={{
        flex: '1 1 240px',
        backgroundColor: '#ffffff',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '2px solid #e2e8f0', // ✅ daha belirgin border
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)', // ✅ daha fark edilir gölge
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget.style.borderColor = '#2563eb');
        (e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 99, 235, 0.15)');
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.style.borderColor = '#e2e8f0');
        (e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.06)');
      }}
    >
      <div style={{ fontSize: '2.2rem' }}>{icon}</div>
      <div style={{ fontSize: '1rem', color: '#475569' }}>{title}</div>
      <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1e293b' }}>
        {value}
      </div>
    </div>
  );
}
