import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col fixed">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">ADM</div>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col gap-2 p-4">
          <NavigationMenuItem>
            <a href="/admin/dashboard" className="hover:underline">Dashboard</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/admin/clientes" className="hover:underline">Clientes</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/admin/contratos" className="hover:underline">Contratos</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/admin/planos" className="hover:underline">Planos</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/admin/financeiro" className="hover:underline">Financeiro</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/admin/usuarios" className="hover:underline">Usuários</a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
}
