import clsx from "clsx";
import { MdWarning, MdInfo, MdCheckCircle } from "react-icons/md";

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
  const className = clsx(
    classNameProp,
    "w-full p-4 rounded-md",
    {
      "bg-green-500 bg-opacity-10 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-100":
        type === "success",
      "bg-red-500 bg-opacity-10 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-100":
        type === "error",
      "bg-blue-500 bg-opacity-10 border border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-100":
        type === "info",
    },
    "flex flex-row gap-2"
  );

  return (
    <div className={className}>
      <div className="text-xl pt-[1px]">{alertIcons[type]}</div>
      <div>{children}</div>
    </div>
  );
};

const alertIcons = {
  success: <MdCheckCircle />,
  error: <MdWarning />,
  info: <MdInfo />,
};
