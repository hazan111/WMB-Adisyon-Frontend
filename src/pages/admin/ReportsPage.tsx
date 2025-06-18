import StatBox from '../../components/admin/StatBox';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const weeklyData = [
  { day: 'Pzt', orders: 25 },
  { day: 'Sal', orders: 40 },
  { day: 'Çar', orders: 35 },
  { day: 'Per', orders: 30 },
  { day: 'Cum', orders: 55 },
  { day: 'Cmt', orders: 60 },
  { day: 'Paz', orders: 45 },
];

const topProducts = [
  { id: 1, name: 'Lahmacun', sold: 130 },
  { id: 2, name: 'Ayran', sold: 110 },
  { id: 3, name: 'Künefe', sold: 95 },
  { id: 4, name: 'Pide', sold: 80 },
  { id: 5, name: 'Su', sold: 72 },
];

export default function ReportsPage() {
  return (
    <div>
      <h1 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '1.5rem' }}>Raporlar</h1>

      {/* StatBox'lar */}
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <StatBox title="Toplam Satış (₺)" value={99999} icon="💰" />
        <StatBox title="Toplam Sipariş" value={215} icon="🧾" />
        <StatBox title="Ortalama Sipariş (₺)" value={15.9} icon="📊" />
      </div>

      {/* Grafik */}
      <div
        style={{
          backgroundColor: '#fff',
          border: '2px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1rem',
          marginBottom: '2rem',
          boxShadow: '0 4px 12px rgb(0, 0, 0)',
        }}
      >
        <h2 style={{ marginBottom: '1rem', color: '#1e293b' }}>Haftalık Sipariş Dağılımı</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* En Çok Satanlar */}
      <div
        style={{
          backgroundColor: '#fff',
          border: '2px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1.25rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        }}
      >
        <h2 style={{ marginBottom: '1rem', color: '#1e293b' }}>En Çok Satılan Ürünler</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f8fafc' }}>
            <tr>
              <th style={thStyle}>Ürün</th>
              <th style={thStyle}>Satış Adedi</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((p, i) => (
              <tr key={p.id} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                <td style={tdStyle}>{p.name}</td>
                <td style={tdStyle}>{p.sold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: '0.75rem',
  fontWeight: '600',
  fontSize: '0.95rem',
  color: '#475569',
  borderBottom: '2px solid #cbd5e1',
  textAlign: 'left' as const,
};

const tdStyle = {
  padding: '0.75rem',
  fontSize: '0.95rem',
  color: '#1e293b',
  borderBottom: '1px solid #e2e8f0',
};
