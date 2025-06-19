
export function GarsonPage() {
  return (
    <div className="bg-custom-gradient min-h-screen flex items-center justify-center">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-10 w-full max-w-3xl text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Garson Sayfası</h1>

        {/* Örnek içerik */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
            <p>Masa 1</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
            <p>Masa 2</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
            <p>Masa 3</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
            <p>Masa 4</p>
          </div>
        </div>
      </div>
    </div>
  )
}
