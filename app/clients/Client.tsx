"use client";

import Pagination from "@app/components/pagination";
import ListItems from "@app/components/list-items";
import ListColumn from "@app/components/list-columns";
import useColumns from "@app/store/table-columns";
import { useRouter } from "next/navigation";
import DatePicker from "@app/components/datepicker";

export default function Clients({ data }: { data: any }) {
  const { columns } = useColumns();
  const router = useRouter();
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
          <div>
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => router.push("/clients/create")}
            >
              Add client
            </button>
          </div>

          <DatePicker />
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <div>Id</div>
                </div>
              </th>
              {columns?.map((item, index: number) => (
                <ListColumn key={index} title={item.name} />
              ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data[1]?.map((item: any, index: number) => (
                <ListItems key={index} data={item} />
              ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <Pagination total={data[0]} />
      </div>
    </>
  );
}
