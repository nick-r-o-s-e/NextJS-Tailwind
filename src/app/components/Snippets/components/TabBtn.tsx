type Props = {
  name: string;
  active: boolean;
  onClick: () => void;
};

function TabBtn({ name, active, onClick }: Props) {
  return (
    <li>
      <a href="#code-snippets">
        <button
          onClick={onClick}
          className={`inline-block duration-200 px-4 py-[0.85rem] rounded-t-lg ${
            active
              ? "text-gray-800 bg-gray-100 active dark:bg-[#313640] dark:text-gray-200"
              : "bg-[#c3c6cc] text-gray-600 dark:text-gray-400   dark:bg-[#1d2329] hover:text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          } `}
        >
          {name}
        </button>
      </a>
    </li>
  );
}

export default TabBtn;
