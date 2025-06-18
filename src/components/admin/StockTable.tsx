interface StockItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  criticalLevel: number;
}

const dummyStock: StockItem[] = [
  { id: 1, name: 'Lahmacun', category: 'Yemek', quantity: 40, criticalLevel: 20 },
  { id: 2, name: 'Ayran', category: 'İçecek', quantity: 15, criticalLevel: 20 },
  { id: 3, name: 'Su', category: 'İçecek', quantity: 5, criticalLevel: 10 },
  { id: 4, name: 'Künefe', category: 'Tatlı', quantity: 0, criticalLevel: 5 },
];

export default function StockTable() {
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
            <th style={thStyle}>Ürün</th>
            <th style={thStyle}>Kategori</th>
            <th style={thStyle}>Stok</th>
            <th style={thStyle}>Kritik Seviye</th>
            <th style={thStyle}>Durum</th>
          </tr>
        </thead>
        <tbody>
          {dummyStock.map((item, i) => {
            const isCritical = item.quantity <= item.criticalLevel;

            return (
              <tr key={item.id} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                <td style={tdStyle}>{item.name}</td>
                <td style={tdStyle}>{item.category}</td>
                <td style={tdStyle}>{item.quantity}</td>
                <td style={tdStyle}>{item.criticalLevel}</td>
                <td
                  style={{
                    ...tdStyle,
                    color: isCritical ? 'red' : 'green',
                    fontWeight: 600,
                  }}
                >
                  {isCritical ? 'Kritik' : 'Yeterli'}
                </td>
              </tr>
            );
          })}
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
