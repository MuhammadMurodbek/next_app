import { create } from "zustand";
const useSidebarRoutes = create(() => ({
  routes: [
    { name: "Clients", path: "/clients" },
    { name: "User", path: "/users" },
  ],
  // changeRoutes: () =>
  //   set((state: { color: string }) => ({
  //     color: state.color === "white" ? "#212529" : "white",
  //   })),
}));
export default useSidebarRoutes;
