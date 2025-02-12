"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

import { FaChevronRight } from "react-icons/fa";

import { cn } from "@ui/lib/utils";

interface BreadcrumbsProps {
  params?: { [key: string]: string };
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  params = {},
  className,
}) => {
  const pathname = usePathname();
  const routerParams = useParams();

  const paths = pathname.split("/").filter((e) => e);
  const paramsReversed = Object.entries(routerParams).reduce(
    (acc, [key, value]) => {
      if (Array.isArray(value)) return acc;
      return { ...acc, [value]: key };
    },
    {} as Record<string, string>,
  );

  const linksAndText = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join("/")}`;

    const text = Object.entries({ ...routerParams, ...params }).reduce(
      (text, [key, value]) => {
        if (Array.isArray(value)) return text;
        return (
          paramsReversed[text] ? `[${paramsReversed[text]}]` : text
        ).replace(`[${key}]`, value);
      },
      path,
    );

    return { href, text: capitaliseFirstLetter(text) };
  });

  linksAndText.unshift({ href: "/", text: "Home" });

  return (
    <div className={cn("flex items-center gap-3 truncate", className)}>
      {linksAndText.map(({ text, href }, index) => (
        <React.Fragment key={href}>
          {index !== 0 ? (
            <div className="text-sm opacity-70">
              <FaChevronRight />
            </div>
          ) : null}

          <Link
            href={href}
            key={href}
            className={cn("link capitalize", {
              "truncate text-ellipsis": index === linksAndText.length - 1,
            })}
          >
            {text}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

const capitaliseFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
