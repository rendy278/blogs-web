import Link from "next/link";
import clsx from "clsx";
const Linkitem = ({ route, label, isActive, footer }) => {
  return (
    <div>
      <Link
        href={route}
        className={clsx(
          "px-3 py-1",
          isActive && !footer && "bg-sky-400 text-white rounded-xl",
          footer && isActive && "text-sky-400 rounded-none bg-transparent link"
        )}
      >
        {label}
      </Link>
    </div>
  );
};

export default Linkitem;
