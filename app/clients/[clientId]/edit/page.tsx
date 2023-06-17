import BreadCrumb from "@app/components/breadcrumb";
import EditClient from "./edit";

async function getPosts(clientId: string) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/show_client_info?clientId=${clientId}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default async function Edit({
  params,
}: {
  params: { clientId: string };
}) {
  const data = await getPosts(params.clientId);
  return (
    <div>
      <BreadCrumb />
      <EditClient data={data} />
    </div>
  );
}
