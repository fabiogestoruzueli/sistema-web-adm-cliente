import { useRouter } from 'next/router';

export default function Tabs() {
  const router = useRouter();
  const tabs = [
    { label: "Dashboard", path: "/cliente/dashboard" },
    { label: "Preencher Resultados", path: "/cliente/resultados" },
    { label: "Plataformas", path: "/cliente/plataformas" },
    { label: "Seguidores", path: "/cliente/seguidores" },
    { label: "Relatórios", path: "/cliente/relatorios" },
  ];

  return (
    <div className="flex border-b bg-gray-50">
      {tabs.map(tab => (
        <button
          key={tab.path}
          className={`px-6 py-3 ${router.pathname === tab.path ? 'border-b-2 border-blue-600 font-bold' : ''}`}
          onClick={() => router.push(tab.path)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
