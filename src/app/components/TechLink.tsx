import Link from "next/link";

type Props = {
  name: string;
  version?: string;
  iconClassName: string;
  href: string;
  iconHref: string;
};

function TechLink({ name, version, href, iconHref, iconClassName }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className="duration-150 flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-300/70 hover:bg-gray-400/50 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
    >
      <img className={iconClassName} src={iconHref} alt={`${name}-tech-icon`} />

      <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
      {version && (
        <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
          {version}
        </span>
      )}
    </Link>
  );
}

export default TechLink;
