interface Branch {
  id: number
  name: string
  location: string
  employeeCount: number
  status: 'Aktif' | 'Pasif'
}

const dummyBranches: Branch[] = [
  { id: 1, name: 'Hacıseyfettin Şubesi', location: 'Bursa', employeeCount: 12, status: 'Aktif' },
  { id: 2, name: 'Akçağlayan Şubesi', location: 'Bursa', employeeCount: 8, status: 'Aktif' },
  { id: 3, name: 'Yenibağlar Şubesi', location: 'Bursa', employeeCount: 5, status: 'Pasif' },
]

export function BranchTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white border-2 border-slate-300 rounded-md shadow-md">
        <thead className="bg-slate-100">
          <tr>
            <th className="text-left p-4 text-slate-800 text-sm font-semibold border-b-2 border-slate-300">Şube Adı</th>
            <th className="text-left p-4 text-slate-800 text-sm font-semibold border-b-2 border-slate-300">Konum</th>
            <th className="text-left p-4 text-slate-800 text-sm font-semibold border-b-2 border-slate-300">Personel</th>
            <th className="text-left p-4 text-slate-800 text-sm font-semibold border-b-2 border-slate-300">Durum</th>
          </tr>
        </thead>
        <tbody>
          {dummyBranches.map((branch, i) => (
            <tr key={branch.id} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} transition`}>
              <td className="p-4 text-sm text-slate-800 border-b border-slate-200">{branch.name}</td>
              <td className="p-4 text-sm text-slate-800 border-b border-slate-200">{branch.location}</td>
              <td className="p-4 text-sm text-slate-800 border-b border-slate-200">{branch.employeeCount}</td>
              <td className={`p-4 text-sm font-semibold border-b border-slate-200 ${branch.status === 'Aktif' ? 'text-green-600' : 'text-gray-400'}`}>{branch.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
