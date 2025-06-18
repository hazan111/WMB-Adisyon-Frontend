import StatBox from '../../components/admin/StatBox';

export default function Dashboard() {
  return (
    <div>
      <h1 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '1rem' }}>Genel Bakış</h1>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <StatBox title="Toplam Şube" value={5} icon="🏢" />
        <StatBox title="Toplam Çalışan" value={42} icon="👥" />
        <StatBox title="Bugünkü Sipariş" value={128} icon="🧾" />
        <StatBox title="Kritik Stoklar" value={3} icon="⚠️" />
      </div>
    </div>
  );
}
