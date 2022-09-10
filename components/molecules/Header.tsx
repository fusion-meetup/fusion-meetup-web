import { HomeButton } from "../atoms/HomeButton";

export const Header = () => {
  return (
    // TODO: Transparent at top of page?
    <header className="fixed w-screen backdrop-blur bg-white dark:bg-slate-800 bg-opacity-80 dark:bg-opacity-40 z-10 shadow-sm dark:shadow-md">
      <HomeButton />
    </header>
  );
};
