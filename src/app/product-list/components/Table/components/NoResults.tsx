function NoResults() {
  return (
    <tr className="flex top-0 justify-center pt-24 absolute w-full h-full z-[1]">
      <td className="flex flex-col items-center gap-4 w-full h-full border-b-[none]">
        <svg
          className=" w-16 h-16 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>

        <h2 className="text-2xl">No results found...</h2>
      </td>
    </tr>
  );
}

export default NoResults;
