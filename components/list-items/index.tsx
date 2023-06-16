import Avatar from "../avatar";
export default function ListItems({ data }: { data: any }) {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <div>12</div>
          </div>
        </td>
        <th
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <Avatar
            url={
              "https://www.shutterstock.com/image-photo/expression-people-concept-smiling-man-260nw-672107746.jpg"
            }
          />
          <div className="pl-3">
            <div className="text-base font-semibold">
              {data?.full_name || "no data"}
            </div>
            <div className="font-normal text-gray-500">
              {data?.mail || "no data"}
            </div>
          </div>
        </th>
        <td className="px-6 py-4">{data?.organization || "no data"}</td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
            Online
          </div>
        </td>
        <td className="px-6 py-4">
          <a
            href={`/clients/${data?.id}`}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Read more..
          </a>
        </td>
      </tr>
    </>
  );
}
