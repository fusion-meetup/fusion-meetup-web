import { FC } from "react";

import { Socials } from "../molecules/Socials";

export const Footer: FC = () => {
  return (
    <footer className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
      <div className="container mx-auto p-4 grid grid-cols-2 gap-4">
        <div>© Fusion</div>

        <div className="flex flex-row items-center justify-end">
          <Socials />
        </div>
      </div>
    </footer>
  );
};
