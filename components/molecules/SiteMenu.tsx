import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { IoMenu } from "react-icons/io5";

export const SiteMenu = () => {
  const menuRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (!menuRef.current) return;

    function handleClick(e: any) {
      if (!(menuRef.current as any).contains(e.target)) setMenuIsOpen(false);
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [menuRef]);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Events", href: "/events" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const mobileMenu = () => {
    if (!menuIsOpen) return;

    return (
      <div
        className={clsx(
          "absolute -top-2 right-0 z-10 rounded-lg overflow-hidden bg-white dark:bg-slate-800",
          "min-w-[180px] flex flex-col shadow-xl border-2 border-slate-300 dark:border-slate-700"
        )}
      >
        {menuItems.map(({ title, href }, i) => (
          <Link
            href={href}
            key={href}
            onClick={() => setMenuIsOpen(false)}
            className={clsx(
              "px-4 py-2 text-sm hover:bg-slate-200 dark:hover:bg-slate-700 text-lg",
              { "border-t-2 border-slate-300 dark:border-slate-700": i > 0 }
            )}
          >
            {title}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="hidden md:flex h-full flex-row items-center gap-4 pr-2">
        {menuItems.map(({ title, href }) => (
          <Link
            href={href}
            key={href}
            className="hover:underline underline-offset-4"
          >
            {title}
          </Link>
        ))}
      </div>

      <div className="h-full md:hidden" ref={menuRef}>
        <button
          className={clsx(
            "h-full w-12 flex items-center justify-center text-4xl",
            "transition-colors duration-200 focus:text-blue-700"
          )}
          onClick={() => setMenuIsOpen((x) => !x)}
          aria-label="Menu button"
        >
          <IoMenu />
        </button>

        <div className="relative">{mobileMenu()}</div>
      </div>
    </>
  );
};
