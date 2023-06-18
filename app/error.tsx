"use client";

import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const handleBackRoute = () => {
    router.push("/clients?skip=1&status=all");
    router.refresh();
  };
  return (
    <div>
      <div className="min-h-full bg-orange-100 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 rounded-md">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="bg-gradient-to-br from-pink-400 to-cyan-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              {error?.name || "Error name"}
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  {String(error.message || "error message").toUpperCase()}
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Please check the URL in the address bar and try again.
                </p>
                <p className="mt-1 text-base text-gray-500">
                  {String(error?.stack || "Error stack").substring(0, 100) +
                    "..."}
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <button onClick={reset}>
                  <a className="inline-flex items-center rounded-md  border-transparent  bg-gradient-to-br from-pink-400 to-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gradient-to-br hover:from-pink-600 hover:to-cyan-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                    Try again
                  </a>
                </button>
                <button onClick={handleBackRoute}>
                  <a className="inline-flex items-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-black hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                    Go back home
                  </a>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
