import Link from "next/link";

export default function Pagination({ total }: { total: number }) {
  const pagingList = Array.from({ length: Math.ceil(total / 10) });
  const pageIndex = Object.fromEntries(
    new URLSearchParams(window.location.search)
  );

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              data-testid="arrow_left"
              className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {"<"}
            </a>
          </li>
          {pagingList.map((_, index) => (
            <li key={index} data-testid="paging_element">
              <Link
                href={`/clients?skip=${index + 1}&status=all`}
                className={`px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  Number(pageIndex?.skip) == index + 1
                    ? "bg-gray-300"
                    : "bg-white"
                } `}
              >
                {index + 1}
              </Link>
            </li>
          ))}

          <li>
            <a
              href="#"
              data-testid="arrow_right"
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
