import { UserTable } from '../../components/admin/UserTable'

export function EmployeesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Çalışanlar</h1>
      <UserTable />
    </div>
  )
}
