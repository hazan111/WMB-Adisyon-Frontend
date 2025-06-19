import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { GarsonPage } from './pages/GarsonPage'

import AdminPage from './pages/admin/AdminPage'
import Dashboard from './pages/admin/AdminDashboard'
import { EmployeesPage } from './pages/admin/EmployeesPage'
import { BranchesPage } from './pages/admin/BranchesPage'
import { ReportsPage } from './pages/admin/ReportsPage'
import { StockPage } from './pages/admin/StockPage'
import { Layout } from './Layout'
import RolesPage from './pages/RolesPage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/garson" element={<GarsonPage />} />
          <Route path="/roles" element={<RolesPage />} />
          
          {/* Admin Routes */}

          <Route path="/admin" element={<AdminPage />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<EmployeesPage />} />
            <Route path="branches" element={<BranchesPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="stock" element={<StockPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
