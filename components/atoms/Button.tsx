import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  size?: "default" | "large";
  color?: "default" | "blue" | "pink" | "yellow" | "youtube" | null;
  href?: string;
  targetBlank?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  typeSubmit?: boolean;
  value?: string;
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
  children,
}) => {
  color = color === undefined || color === "default" ? "blue" : color;

  const className = clsx(
    "box-content margin-0 leading-normal items-center block w-fit cursor-pointer",
    "flex flex-row justify-center gap-2 text-base",
    {
      "bg-blue-500 hover:bg-blue-400 outline-blue-500/50 text-black":
        color === "blue",
      "bg-pink-500 hover:bg-pink-400 outline-pink-500/50 text-black":
        color === "pink",
      "bg-yellow-500 hover:bg-yellow-400 outline-yellow-500/50 text-black":
        color === "yellow",
      "bg-[#cc0000] hover:bg-[#990000] outline-[#cc000088] text-white":
        color === "youtube",
    },
    "transition-all ease-out duration-100 py-2 px-4 rounded-md font-bold text-md hover:shadow",
    "focus:outline active:outline outline-3 outline-offset-2 focus:scale-95",
    classNameProp,
    { "text-2xl py-3 px-6": size === "large" }
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
