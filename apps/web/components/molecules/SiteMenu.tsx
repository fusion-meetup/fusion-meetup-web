"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { IoMenu } from "react-icons/io5";

import { cn } from "@ui/lib/utils";

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
      <div className="absolute -top-2 right-0 z-10 flex min-w-[180px] flex-col overflow-hidden rounded-lg border-2 border-slate-700 bg-slate-800 shadow-xl">
        {menuItems.map(({ title, href }, i) => (
          <Link
            href={href}
            key={href}
            onClick={() => setMenuIsOpen(false)}
            className={cn("px-4 py-2 text-lg hover:bg-slate-700", {
              "border-t-2 border-slate-700": i > 0,
            })}
          >
            {title}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="hidden h-full flex-row items-center gap-4 pr-2 md:flex">
        {menuItems.map(({ title, href }) => (
          <Link
            href={href}
            key={href}
            className="underline-offset-4 hover:underline"
          >
            {title}
          </Link>
        ))}
      </div>

      <div className="h-full md:hidden" ref={menuRef}>
        <button
          className="flex h-full w-12 items-center justify-center text-4xl transition-colors duration-200 focus:text-blue-700"
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
