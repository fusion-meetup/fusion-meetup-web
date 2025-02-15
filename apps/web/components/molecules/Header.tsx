import { HomeButton } from "../atoms/HomeButton";
import { SiteMenu } from "./SiteMenu";

export const Header = () => {
  return (
    <header className="fixed z-10 flex w-full flex-row justify-between bg-slate-800/40 shadow-md backdrop-blur">
      <HomeButton />

      <div className="relative pr-2">
        <SiteMenu />
      </div>
    </header>
  );
};
