interface Branch {
  id: number;
  name: string;
  location: string;
  employeeCount: number;
  status: 'Aktif' | 'Pasif';
}

const dummyBranches: Branch[] = [
  { id: 1, name: 'Hacıseyfettin Şubesi', location: 'Bursa', employeeCount: 12, status: 'Aktif' },
  { id: 2, name: 'Akçağlayan Şubesi', location: 'Bursa', employeeCount: 8, status: 'Aktif' },
  { id: 3, name: 'Yenibağlar Şubesi', location: 'Bursa', employeeCount: 5, status: 'Pasif' },
];

export default function BranchTable() {
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
            <th style={thStyle}>Şube Adı</th>
            <th style={thStyle}>Konum</th>
            <th style={thStyle}>Personel</th>
            <th style={thStyle}>Durum</th>
          </tr>
        </thead>
        <tbody>
          {dummyBranches.map((branch, i) => (
            <tr
              key={branch.id}
              style={{
                ...rowStyle,
                backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb',
              }}
            >
              <td style={tdStyle}>{branch.name}</td>
              <td style={tdStyle}>{branch.location}</td>
              <td style={tdStyle}>{branch.employeeCount}</td>
              <td
                style={{
                  ...tdStyle,
                  color: branch.status === 'Aktif' ? 'green' : 'gray',
                  fontWeight: 600,
                }}
              >
                {branch.status}
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
