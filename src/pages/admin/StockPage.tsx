import { StockTable } from '../../components/admin/StockTable'

export function StockPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Stok Takibi</h1>
      <StockTable />
    </div>
  )
}