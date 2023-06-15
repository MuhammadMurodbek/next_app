import { create } from "zustand";
const useColumns = create(() => ({
  columns: [
    { name: "Name" },
    { name: "Organization" },
    { name: "Status" },
    { name: "Action" },
  ],
  // changeRoutes: () =>
  //   set((state: { color: string }) => ({
  //     color: state.color === "white" ? "#212529" : "white",
  //   })),
}));
export default useColumns;
