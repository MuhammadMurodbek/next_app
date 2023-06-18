"use client";
import BreadCrumb from "@app/components/breadcrumb";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function EditClient({ data }: { data: any }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: data });
  const formSubmit = async (data: any) => {
    data.avatar = "https://i.pravatar.cc/150?u=a042581ssd";
    data.userId = 1;
    try {
      const res = await fetch("/api/update_client", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        router.back();
        router.refresh();
      }
    } catch {
      console.log("error");
    }
  };
  return (
    <>
      <BreadCrumb
        path={[
          { name: "Clients", road: "/clients?skip=1&status=all" },
          { name: data.full_name, road: `/clients/${data.id}` },
          { name: "Edit", road: "/clients/id/edit" },
        ]}
      />
      <section className="bg-white dark:bg-gray-900 ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="w-full d-flex justify-content-center">
              <img
                className="rounded-full w-50 h-50 mx-auto"
                src="https://i.pravatar.cc/150?u=a042581ssd"
                alt="image description"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  className="cursor-not-allowed bg-gray-50 border border-gray-100 text-gray-400 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  {...register("full_name", { required: true, disabled: true })}
                />
                {errors.full_name && (
                  <p
                    id="outlined_error_help"
                    className="mt-2 text-xs text-red-600 dark:text-red-400"
                  >
                    <span className="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="brand"
                  className="cursor-not-allowed bg-gray-50 border border-gray-100 text-gray-400 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product brand"
                  {...register("organization", {
                    required: true,
                    disabled: true,
                  })}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mail
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="cursor-not-allowed bg-gray-50 border border-gray-100 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@nextjs.com"
                    {...register("mail", { required: true, disabled: true })}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Status
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  {...register("status", { required: true })}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="item-weight"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="item-weight"
                  className="cursor-not-allowed bg-gray-50 border border-gray-100 text-gray-400 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="+"
                  {...register("phone_number", {
                    required: true,
                    disabled: true,
                  })}
                />
              </div>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save client
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
