import Clients from "./Client";

async function getPosts({
  skip,
  status,
}: {
  skip: string | string[] | undefined;
  status: string | string[] | undefined;
}) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/get_clients_list?skip=${skip}&status=${status}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default async function ClientsComponent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | Date | undefined | any };
}) {
  const data = await getPosts({
    skip: searchParams?.skip,
    status: searchParams?.status,
  });

  return <Clients data={data} />;
}
