import ShowClient from "./show";

async function getPosts(clientId: string) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/show_client_info?clientId=${clientId}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default async function ClientsComponent({
  params,
}: {
  params: { clientId: string };
}) {
  const data = await getPosts(params.clientId);
  // throw new Error("error handle");
  return <ShowClient data={data} />;
}
