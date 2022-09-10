import clsx from "clsx";

import { Heading } from "../../atoms/Heading";

export interface EventsPageHeaderProps {
  children: React.ReactNode;
}

export const EventsPageHeader: React.FC<EventsPageHeaderProps> = ({ children }) => {
  return (
    <div className="pt-6 px-4">
      <div className="relative">
        <div
          className={clsx(
            "h-20 -mb-7 rounded-xl opacity-25",
            "bg-gradient-to-b from-white from-blue to-transparent"
          )}
        />

        <Heading
          level={4}
          className="absolute top-2 left-4 right-0 text-slate-500 dark:text-slate-300"
        >
          {children}
        </Heading>
      </div>
    </div>
  );
};
