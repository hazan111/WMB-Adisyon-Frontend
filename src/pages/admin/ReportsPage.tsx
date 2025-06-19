import StatBox from '../../components/admin/StatBox'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

const weeklyData = [
  { day: 'Pzt', orders: 25 },
  { day: 'Sal', orders: 40 },
  { day: 'Çar', orders: 35 },
  { day: 'Per', orders: 30 },
  { day: 'Cum', orders: 55 },
  { day: 'Cmt', orders: 60 },
  { day: 'Paz', orders: 45 },
]

const topProducts = [
  { id: 1, name: 'Lahmacun', sold: 130 },
  { id: 2, name: 'Ayran', sold: 110 },
  { id: 3, name: 'Künefe', sold: 95 },
  { id: 4, name: 'Pide', sold: 80 },
  { id: 5, name: 'Su', sold: 72 },
]

export function ReportsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Raporlar</h1>

      <div className="flex flex-wrap gap-6 mb-8">
        <StatBox title="Toplam Satış (₺)" value={99999} icon="💰" />
        <StatBox title="Toplam Sipariş" value={215} icon="🧾" />
        <StatBox title="Ortalama Sipariş (₺)" value={15.9} icon="📊" />
      </div>

      <div className="bg-white border-2 border-slate-200 rounded-xl p-4 mb-8 shadow">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Haftalık Sipariş Dağılımı</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="orders" stroke="#2563eb" strokeWidth={3} dot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">En Çok Satılan Ürünler</h2>
        <table className="w-full border-collapse">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-3 text-slate-600 text-sm font-semibold border-b-2 border-slate-300">Ürün</th>
              <th className="text-left p-3 text-slate-600 text-sm font-semibold border-b-2 border-slate-300">Satış Adedi</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((p, i) => (
              <tr key={p.id} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                <td className="p-3 text-slate-800 text-sm border-b border-slate-200">{p.name}</td>
                <td className="p-3 text-slate-800 text-sm border-b border-slate-200">{p.sold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
