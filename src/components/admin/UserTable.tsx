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
]

export function UserTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white border-2 border-slate-300 rounded-md shadow-md">
        <thead className="bg-slate-100">
          <tr>
            <th className="text-left p-4 text-sm font-semibold text-slate-800 border-b-2 border-slate-300">İsim</th>
            <th className="text-left p-4 text-sm font-semibold text-slate-800 border-b-2 border-slate-300">E-posta</th>
            <th className="text-left p-4 text-sm font-semibold text-slate-800 border-b-2 border-slate-300">Rol</th>
            <th className="text-left p-4 text-sm font-semibold text-slate-800 border-b-2 border-slate-300">Şube</th>
            <th className="text-left p-4 text-sm font-semibold text-slate-800 border-b-2 border-slate-300">Durum</th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((user, i) => (
            <tr key={user.id} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} transition`}>
              <td className="p-4 text-sm text-slate-800 border-b border-slate-200">{user.name}</td>
              <td className="p-4 text-sm text-slate-800 border-b border-slate-200">{user.email}</td>
              <td className="p-4 text-sm text-slate-800 border-b border-slate-200">{user.role}</td>
              <td className="p-4 text-sm text-slate-800 border-b border-slate-200">{user.branch}</td>
              <td className={`p-4 text-sm font-semibold border-b border-slate-200 ${user.status === 'Aktif' ? 'text-green-600' : 'text-gray-400'}`}>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
