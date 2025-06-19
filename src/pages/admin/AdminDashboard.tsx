import StatBox from '../../components/admin/StatBox'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Genel Bakış</h1>
      <div className="flex flex-wrap gap-6">
        <StatBox title="Toplam Şube" value={5} icon="🏢" />
        <StatBox title="Toplam Çalışan" value={42} icon="👥" />
        <StatBox title="Bugünkü Sipariş" value={128} icon="🧾" />
        <StatBox title="Kritik Stoklar" value={3} icon="⚠️" />
      </div>
    </div>
  )
}