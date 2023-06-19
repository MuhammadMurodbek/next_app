// import Clients from "./clients/page";
"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/user");
  return <main>s</main>;
}
