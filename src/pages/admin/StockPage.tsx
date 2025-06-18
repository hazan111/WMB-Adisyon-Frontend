import StockTable from '../../components/admin/StockTable';

export default function StockPage() {
  return (
    <div>
      <h1 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '1rem' }}>
        Stok Takibi
      </h1>
      <StockTable />
    </div>
  );
}
