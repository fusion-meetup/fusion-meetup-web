import { HomeButton } from "../atoms/HomeButton";

export const Header = () => {
  return (
    <header className="fixed w-screen backdrop-blur-sm bg-white dark:bg-slate-900 bg-opacity-60 dark:bg-opacity-40 z-10 shadow-sm">
      <HomeButton />
    </header>
  );
};
