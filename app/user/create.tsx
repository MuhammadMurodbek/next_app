"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "@app/types/form-handler";
import Toast from "@app/components/toastify";

export default function SetUser() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formSubmit: SubmitHandler<FormValues | {}> = async (data: any) => {
    data.avatar = "https://i.pravatar.cc/150?u=a042581ssd";
    try {
      const res = await fetch("/api/add_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Successfully created !");
        localStorage.setItem("user", JSON.stringify(await res.json()));
        router.push("/clients?skip=1&status=all");
      }
    } catch {
      toast.warning("Something went wrong !");
    }
  };
  return (
    <>
      <Toast />
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type user name"
                  {...register("full_name", { required: true })}
                />
                {errors?.full_name && (
                  <p
                    id="outlined_error_help"
                    className="mt-2 text-xs text-red-600 dark:text-red-400"
                  >
                    Full name is a required field.
                  </p>
                )}
              </div>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save user
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
