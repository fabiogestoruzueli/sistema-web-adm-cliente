import Tabs from '../../components/Tabs';

export default function ClienteDashboard() {
  return (
    <div>
      <Tabs />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard do Cliente</h1>
        <p>Bem-vindo ao painel do cliente. Escolha uma aba acima.</p>
      </main>
    </div>
  );
}
