import { create } from "zustand";
const useSidebarRoutes = create(() => ({
  routes: [
    { name: "Clients", path: "/clients?skip=1&status=all" },
    { name: "User", path: "/users" },
  ],
}));
export default useSidebarRoutes;
