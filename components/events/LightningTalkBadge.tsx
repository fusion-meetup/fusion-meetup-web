import clsx from "clsx";
import { BsLightningFill } from "react-icons/bs";

interface LightningTalkBadgeProps {
  basic?: boolean;
}

export const LightningTalkBadge: React.FC<LightningTalkBadgeProps> = ({
  basic,
}) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-1 text-sm font-bold",
        {
          "w-max py-[2px] px-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-black":
            !basic,
        },
        { "text-yellow-600 dark:text-yellow-400": basic }
      )}
    >
      <BsLightningFill /> Lightning Talk
    </div>
  );
};
