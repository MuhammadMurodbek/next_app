"use client";
import BreadCrumb from "@app/components/breadcrumb";
import Toast from "@app/components/toastify";
import { ClientResponseType } from "@app/types/client-response-type";
import Link from "next/link";

export default function ShowClient({ data }: { data: ClientResponseType }) {
  console.log(data);
  return (
    <>
      <Toast />
      <BreadCrumb
        path={[
          { name: "Clients", road: "/clients?skip=1&status=all" },
          { name: data.full_name, road: "/clients/id" },
        ]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-9 gap-2">
        <div className="text-center my-auto">
          <img
            src={data.avatar}
            alt="avatar"
            className="mx-auto rounded-md mb-8"
          />
          <Link
            href={`${data.id}/edit`}
            className="btn btn-primary py-2.5 px-14 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Edit
          </Link>
        </div>
        <div className="text-left">
          <div className="mt-20 text-center sm:text-left border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              {data?.full_name}
              {/* <span className="font-light text-gray-500">22</span> */}
            </h1>
            <p className="font-light text-gray-600 mt-3">
              <strong>Contact: </strong>
              {data?.mail}
            </p>
            <p className="mt-8 text-gray-500">
              <strong>Organization:</strong> {data?.organization}
            </p>
            <p className="mt-2 text-gray-500">
              <strong>Assigned user:</strong> {data?.Users?.full_name}
            </p>
          </div>
          <div className="mt-12 flex text-center md:text-left">
            <strong className="mr-2">Status: </strong>
            {data.status == "active" ? (
              <span className="bg-green-300 text-white px-1 rounded-md">
                {String(data?.status)}
              </span>
            ) : (
              <span className="bg-red-400 text-white px-1 rounded-md">
                {String(data?.status)}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
