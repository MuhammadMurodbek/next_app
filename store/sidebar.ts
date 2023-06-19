import { create } from "zustand";
const useSidebarRoutes = create(() => ({
  routes: [
    { name: "Setting user", path: "/" },
    { name: "Clients", path: "/clients?skip=1&status=all" },
  ],
}));
export default useSidebarRoutes;
