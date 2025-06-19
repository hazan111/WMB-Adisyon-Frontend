export function StatBox({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 shadow-lg w-full max-w-xs">
      <h3 className="text-sm text-gray-200 font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

// ✅ Sidebar.tsx (minimal redesign, glass + spacing)
export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-60 bg-white/10 border-r border-white/20 backdrop-blur-lg shadow-lg p-6 flex flex-col gap-4">
      <h2 className="text-white text-xl font-bold mb-4">WMB Panel</h2>
      <nav className="flex flex-col gap-2">
        <a className="text-white/90 hover:text-white transition" href="/admin/dashboard">Dashboard</a>
        <a className="text-white/90 hover:text-white transition" href="/admin/employees">Çalışanlar</a>
        <a className="text-white/90 hover:text-white transition" href="/admin/branches">Şubeler</a>
        <a className="text-white/90 hover:text-white transition" href="/admin/stock">Stok</a>
        <a className="text-white/90 hover:text-white transition" href="/admin/reports">Raporlar</a>
      </nav>
    </aside>
  );
}