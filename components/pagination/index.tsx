// "use client";
// import { useState } from "react";
import Link from "next/link";

export default function Pagination({ total }: { total: number }) {
  const pagingList = Array.from({ length: Math.ceil(total / 10) });
  // const [current, setCurrent] = useState(1);
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {"<"}
            </a>
          </li>
          {pagingList.map((_, index) => (
            <li key={index}>
              <Link
                href={`/clients?skip=${index + 1}`}
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {index + 1}
              </Link>
            </li>
          ))}

          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {">"}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
