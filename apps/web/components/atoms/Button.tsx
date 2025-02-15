import Link from "next/link";

import { cn } from "@ui/lib/utils";

interface ButtonProps {
  size?: "default" | "large";
  color?: "default" | "blue" | "pink" | "yellow" | "youtube" | null;
  href?: string;
  targetBlank?: boolean;
  className?: string;
  onClick?: (_event: React.MouseEvent<HTMLElement>) => void;
  typeSubmit?: boolean;
  value?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  size,
  color,
  href,
  targetBlank,
  className: classNameProp,
  onClick,
  typeSubmit,
  value,
  disabled,
  children,
}) => {
  color = color === undefined || color === "default" ? "blue" : color;

  const className = cn(
    "cursor-pointer font-bold py-2 px-4 rounded-md text-md box-content margin-0 leading-normal block w-fit flex flex-row items-center justify-center gap-2 text-base",
    {
      "bg-blue-500 hover:bg-blue-400 outline-blue-500/50 text-black":
        color === "blue" && !disabled,
      "bg-pink-500 hover:bg-pink-400 outline-pink-500/50 text-black":
        color === "pink" && !disabled,
      "bg-yellow-500 hover:bg-yellow-400 outline-yellow-500/50 text-black":
        color === "yellow" && !disabled,
      "bg-[#cc0000] hover:bg-[#990000] outline-[#cc000088] text-white":
        color === "youtube" && !disabled,
      "text-2xl py-3 px-6": size === "large",
      "cursor-not-allowed bg-slate-600 text-slate-100 focus:outline-hidden focus:scale-100 hover:shadow-none":
        disabled,
      "transition-all ease-out duration-100 hover:shadow focus:outline active:outline-3 outline-offset-2 focus:scale-95":
        !disabled,
    },
    classNameProp,
  );

  const commonProps = {
    className,
    onClick,
    children,
    value,
  };

  if (href) {
    const targetBlankProps = {
      target: "_blank",
      rel: "noopener noreferrer",
    };

    return (
      <Link
        href={href}
        {...commonProps}
        {...(targetBlank ? targetBlankProps : {})}
      />
    );
  }

  if (typeSubmit) {
    return <input {...commonProps} type="submit" />;
  }

  return <button {...commonProps} />;
};
