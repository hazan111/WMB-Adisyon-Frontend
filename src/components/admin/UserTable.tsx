interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  branch: string;
  status: 'Aktif' | 'Pasif';
}

const dummyUsers: User[] = [
  { id: 1, name: 'Alper Aslan', email: 'aslanalper2516@gmail.com', role: 'Köle1', branch: 'Bursa', status: 'Aktif' },
  { id: 2, name: 'Omer Safa Aksu', email: 'safaaksu510@gmail.com', role: 'Köle2', branch: 'İstanbul', status: 'Aktif' },
  { id: 3, name: 'Hasan Zengin', email: 'hhasanhh125@gmail.com', role: 'Köle3', branch: 'Balıkesir', status: 'Pasif' },
];

export default function UserTable() {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: '#fff',
          border: '2px solid #cbd5e1',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        }}
      >
        <thead style={{ backgroundColor: '#f1f5f9' }}>
          <tr>
            <th style={thStyle}>İsim</th>
            <th style={thStyle}>E-posta</th>
            <th style={thStyle}>Rol</th>
            <th style={thStyle}>Şube</th>
            <th style={thStyle}>Durum</th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((user, i) => (
            <tr
              key={user.id}
              style={{
                ...rowStyle,
                backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb', // zebra çizgisi
              }}
            >
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.role}</td>
              <td style={tdStyle}>{user.branch}</td>
              <td style={{ ...tdStyle, color: user.status === 'Aktif' ? 'green' : 'gray' }}>
                {user.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: '1rem',
  fontWeight: '600',
  fontSize: '0.95rem',
  color: '#1e293b',
  borderBottom: '2px solid #cbd5e1',
  textAlign: 'left' as const,
};

const tdStyle = {
  padding: '1rem',
  fontSize: '0.95rem',
  color: '#1e293b',
  borderBottom: '1px solid #e2e8f0',
};

const rowStyle = {
  transition: 'background-color 0.2s ease-in-out',
  cursor: 'default',
};
