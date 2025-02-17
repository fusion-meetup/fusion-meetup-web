import { BsLightningFill } from "react-icons/bs";

import { cn } from "@ui/lib/utils";

interface LightningTalkBadgeProps {
  basic?: boolean;
}

export const LightningTalkBadge: React.FC<LightningTalkBadgeProps> = ({
  basic,
}) => {
  return (
    <div
      className={cn("flex items-center gap-1 text-sm font-bold", {
        "w-max rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 px-2 py-[2px] text-black":
          !basic,
        "text-yellow-400": basic,
      })}
    >
      <BsLightningFill /> Lightning Talk
    </div>
  );
};
