import { create } from "zustand";
const useSidebarRoutes = create(() => ({
  routes: [
    { name: "Setting user", path: "/user" },
    { name: "Clients", path: "/clients?skip=1&status=all" },
  ],
}));
export default useSidebarRoutes;
