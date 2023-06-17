import Clients from "./Client";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/get_clients_list`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ClientsComponent() {
  const data = await getPosts();
  return <Clients data={data} />;
}
