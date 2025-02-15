"use client";

import React, { ReactNode } from "react";

import { cn } from "@ui/lib/utils";

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
        "transition-bg relative flex h-[100vh] max-h-80 w-full flex-col items-center justify-center md:max-h-96",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="aurora" />
      </div>

      {children}
    </div>
  );
};
