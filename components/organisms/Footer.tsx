import { FC } from "react";

import { Socials } from "../molecules/Socials";

export const Footer: FC = () => {
  return (
    <footer className="bg-slate-200">
      <div className="container mx-auto p-4 grid grid-cols-2 gap-4">
        <div className="text-slate-600">© Fusion</div>

        <div className="flex flex-row items-center justify-end">
          <Socials />
        </div>
      </div>
    </footer>
  );
};
