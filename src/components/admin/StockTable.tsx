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
]

export function StockTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white border-2 border-slate-300 rounded-md shadow-md">
        <thead className="bg-slate-100">
          <tr>
            <th className="text-left p-4 text-sm font-semibold text-slate-800 border-b-2 border-slate-300">Ürün</th>
            <th className="text-left p-4 text-sm font-semibold text-slate-800 border-b-2 border-slate-300">Kategori</th>
            <th className="text-left p-4 text-sm font-semibold text-slate-800 border-b-2 border-slate-300">Stok</th>
            <th className="text-left p-4 text-sm font-semibold text-slate-800 border-b-2 border-slate-300">Kritik Seviye</th>
            <th className="text-left p-4 text-sm font-semibold text-slate-800 border-b-2 border-slate-300">Durum</th>
          </tr>
        </thead>
        <tbody>
          {dummyStock.map((item, i) => {
            const isCritical = item.quantity <= item.criticalLevel
            return (
              <tr key={item.id} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} transition`}>
                <td className="p-4 text-sm text-slate-800 border-b border-slate-200">{item.name}</td>
                <td className="p-4 text-sm text-slate-800 border-b border-slate-200">{item.category}</td>
                <td className="p-4 text-sm text-slate-800 border-b border-slate-200">{item.quantity}</td>
                <td className="p-4 text-sm text-slate-800 border-b border-slate-200">{item.criticalLevel}</td>
                <td className={`p-4 text-sm font-semibold border-b border-slate-200 ${isCritical ? 'text-red-500' : 'text-green-600'}`}>{isCritical ? 'Kritik' : 'Yeterli'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}