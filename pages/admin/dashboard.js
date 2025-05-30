import Sidebar from '../../components/Sidebar';

export default function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard do ADM</h1>
        <p>Bem-vindo ao painel administrativo.</p>
      </main>
    </div>
  );
}
