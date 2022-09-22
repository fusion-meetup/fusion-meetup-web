import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { FaChevronRight } from "react-icons/fa";

interface BreadcrumbsProps {
  params?: { [key: string]: string };
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  params = {},
  className,
}) => {
  const router = useRouter();

  const pathNames = router.pathname.split("/").filter((e) => e);
  const paths = router.asPath.split("/").filter((e) => e);

  const linksAndText = pathNames.map((pathElement, index) => {
    const href = `/${paths.slice(0, index + 1).join("/")}`;

    const text = Object.entries(params).reduce((text, [key, value]) => {
      return text.replace(`[${key}]`, value);
    }, capitaliseFirstLetter(pathElement));

    return { href, text };
  });

  linksAndText.unshift({ href: "/", text: "Home" });

  return (
    <div className={clsx(className, "flex gap-3 items-center truncate")}>
      {linksAndText.map(({ text, href }, index) => (
        <React.Fragment key={href}>
          {index !== 0 ? (
            <div className="text-sm opacity-70">
              <FaChevronRight />
            </div>
          ) : null}

          <Link href={href} key={href}>
            <a
              className={clsx("link capitalize", {
                "truncate text-ellipsis": index === linksAndText.length - 1,
              })}
            >
              {text}
            </a>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

const capitaliseFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
