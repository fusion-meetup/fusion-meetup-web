import Image from "next/image";

import { Socials } from "../molecules/Socials";
import fusionHeart from "../../public/fusion-heart.png";

export const Footer: React.FC = () => {
  return (
    <footer className="z-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mt-auto">
      <div className="container mx-auto p-4 flex flex-row flex-wrap gap-x-4">
        <div className="flex flex-row flex-wrap items-center gap-1 py-2">
          Made with
          <Image
            alt="Fusion heart"
            src={fusionHeart}
            layout="fixed"
            width={20}
            height={20}
          />
          by Fusion in Birmingham
        </div>

        <div className="ml-auto flex flex-row items-center justify-end">
          <Socials />
        </div>
      </div>
    </footer>
  );
};
