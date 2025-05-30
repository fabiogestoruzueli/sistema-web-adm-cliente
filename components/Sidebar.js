import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 h-screen text-white flex flex-col fixed left-0 top-0">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">ADM</div>
      <nav className="flex-1 flex flex-col gap-2 p-4">
        <Link href="/admin/dashboard">Dashboard</Link>
        <Link href="/admin/clientes">Clientes</Link>
        <Link href="/admin/contratos">Contratos</Link>
        <Link href="/admin/planos">Planos</Link>
        <Link href="/admin/financeiro">Financeiro</Link>
        <Link href="/admin/usuarios">Usuários</Link>
      </nav>
    </aside>
  );
}
