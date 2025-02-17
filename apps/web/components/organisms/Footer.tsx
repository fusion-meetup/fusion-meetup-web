import Image from "next/legacy/image";

import { cn } from "@ui/lib/utils";

import { Socials } from "../molecules/Socials";

interface FooterProps extends React.HTMLProps<HTMLDivElement> {
  noBg?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  className,
  noBg,
  ...props
}) => {
  return (
    <footer
      {...props}
      className={cn(
        "z-2 mt-auto",
        { "bg-slate-800 text-slate-300": !noBg },
        className,
      )}
    >
      <div className="container mx-auto flex flex-row flex-wrap gap-x-4 p-4">
        <div className="flex flex-row flex-wrap items-center gap-1 py-2">
          Made with
          <Image
            alt="Fusion heart"
            src="/fusion-heart.png"
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
