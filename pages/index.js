export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Sistema Web - ADM & Cliente</h1>
        <p className="mb-8">Escolha:<br />
          <a href="/admin/dashboard" className="text-blue-600 underline mx-2">Painel ADM</a>
          |
          <a href="/cliente/dashboard" className="text-blue-600 underline mx-2">Painel Cliente</a>
        </p>
      </div>
    </div>
  );
}
