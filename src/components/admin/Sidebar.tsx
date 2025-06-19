import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/admin/dashboard', label: 'Genel Bakış' },
  { to: '/admin/employees', label: 'Çalışanlar' },
  { to: '/admin/branches', label: 'Şubeler' },
  { to: '/admin/reports', label: 'Raporlar' },
  { to: '/admin/stock', label: 'Stok' },
]

export default function Sidebar() {
  const location = useLocation()
  return (
    <aside className="w-60 h-screen bg-slate-800 text-white p-8 flex flex-col gap-4 shadow-lg fixed top-0 left-0">
      <h2 className="text-xl font-bold mb-6">Yönetim</h2>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`px-4 py-2 rounded-lg transition ${
            location.pathname === link.to
              ? 'bg-slate-700 text-blue-400'
              : 'hover:bg-slate-700 text-white'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  )
}