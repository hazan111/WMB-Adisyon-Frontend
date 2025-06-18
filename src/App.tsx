import Home from './pages/HomePage';
import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import GarsonPage from './pages/GarsonPage';
import AdminPage from './pages/admin/AdminPage';
import Dashboard from './pages/admin/AdminDashboard';
import EmployeesPage from './pages/admin/EmployeesPage';
import BranchesPage from './pages/admin/BranchesPage';
import ReportsPage from './pages/admin/ReportsPage';
import StockPage from './pages/admin/StockPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/garson" element={<GarsonPage />} />

        {/* 👇 Admin route'ları nested olacak şekilde */}
        <Route path="/admin" element={<AdminPage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<EmployeesPage />} />
          <Route path="branches" element={<BranchesPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="stock" element={<StockPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
