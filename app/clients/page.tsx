import Clients from "./Client";

async function getPosts(skip: string | string[] | undefined) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/get_clients_list?skip=${skip}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default async function ClientsComponent({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getPosts(searchParams.skip);
  return <Clients data={data} />;
}
