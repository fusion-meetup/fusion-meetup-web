import React, { ReactNode } from "react";

import { cn } from "../../lib/cn";

interface AuroraHeroProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const AuroraHero = ({
  className,
  children,
  ...props
}: AuroraHeroProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-[100vh] max-h-80 md:max-h-96 items-center justify-center transition-bg w-full",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_3%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]",
            "[--dark-gradient:repeating-linear-gradient(100deg,black_0%,black_7%,var(--transparent)_10%,var(--transparent)_12%,black_16%)]",
            "[--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--pink-400)_20%,var(--blue-300)_20%,var(--yellow-200)_25%,var(--blue-400)_30%)]",
            "[background-image:var(--white-gradient),var(--aurora)]",
            "[background-image:var(--dark-gradient),var(--aurora)]",
            "[background-size:300%,_200%]",
            "[background-position:50%_50%,50%_50%]",
            "filter blur-[16px]",
            'after:content-[""] after:absolute after:inset-0 after:bg-blue-500 after:[background-image:var(--white-gradient),var(--aurora)]',
            "after:[background-image:var(--dark-gradient),var(--aurora)]",
            "after:[background-size:200%,_100%] ",
            "after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference",
            "pointer-events-none",
            "absolute -inset-[10px] opacity-50",
            "[mask-image:radial-gradient(ellipse_at_55%_-50%,var(--slate-900)_10%,var(--transparent)_65%)]"
          )}
        />
      </div>

      {children}
    </div>
  );
};
