import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'

export default function AdminPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-60 p-8 bg-slate-100 min-h-screen w-full">
        <div className="bg-white rounded-xl p-8 shadow-md">
          <Outlet />
        </div>
      </main>
    </div>
  )
}