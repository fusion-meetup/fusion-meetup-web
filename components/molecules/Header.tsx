import { HomeButton } from "../atoms/HomeButton";

export const Header = () => {
  return (
    <header className="fixed w-screen backdrop-blur-sm bg-white bg-opacity-60 z-10 shadow-sm">
      <HomeButton />
    </header>
  );
};
