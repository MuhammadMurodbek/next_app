"use client";
import useSidebarRoutes from "@app/store/sidebar";
import Nav from "@app/components/navs";
type Props = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: Props) {
  const { routes } = useSidebarRoutes();
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {routes?.map((item, index: number) => (
              <Nav key={index} name={item.name} path={item.path} />
            ))}
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">{children}</div>
      </div>
    </>
  );
}
