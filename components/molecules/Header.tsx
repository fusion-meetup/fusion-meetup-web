import clsx from "clsx";

import { HomeButton } from "../atoms/HomeButton";
import { SiteMenu } from "./SiteMenu";

export const Header = () => {
  return (
    // TODO: Transparent at top of page?
    <header
      className={clsx(
        "fixed z-10 w-screen backdrop-blur z-10 shadow-sm dark:shadow-md",
        "bg-slate-100 dark:bg-slate-800 bg-opacity-80 dark:bg-opacity-40",
        "flex flex-row justify-between"
      )}
    >
      <HomeButton />

      <div className="pr-2 relative">
        <SiteMenu />
      </div>
    </header>
  );
};
