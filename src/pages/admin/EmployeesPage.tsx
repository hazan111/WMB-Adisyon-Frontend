import UserTable from '../../components/admin/UserTable';

export default function EmployeesPage() {
  return (
    <div>
      <h1 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '1rem' }}>Çalışanlar</h1>
      <UserTable />
    </div>
  );
}
