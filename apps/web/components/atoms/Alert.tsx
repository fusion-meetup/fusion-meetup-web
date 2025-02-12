import { CircleCheckIcon, InfoIcon, TriangleAlertIcon } from "lucide-react";

import { cn } from "@ui/lib/utils";

interface AlertProps {
  type: "success" | "error" | "info";
  className?: string;
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  type,
  className: classNameProp,
  children,
}) => {
  const className = cn(
    "w-full p-4 rounded-md",
    {
      "bg-green-500 bg-opacity-10 border border-green-700 text-green-100":
        type === "success",
      "bg-red-500 bg-opacity-10 border border-red-700 text-red-100":
        type === "error",
      "bg-blue-500 bg-opacity-10 border border-blue-700 text-blue-100":
        type === "info",
    },
    "flex flex-row gap-2",
    classNameProp,
  );

  return (
    <div className={className}>
      <div className="pt-[1px] text-xl">{alertIcons[type]}</div>
      <div>{children}</div>
    </div>
  );
};

const alertIcons = {
  success: <CircleCheckIcon size="1.25em" />,
  error: <TriangleAlertIcon size="1.25em" />,
  info: <InfoIcon size="1.25em" />,
};
