import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  size?: "default" | "large";
  color?: "default" | "blue" | "pink" | "yellow";
  href?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  size,
  color,
  href,
  className: classNameProp,
  onClick,
  children,
}) => {
  color = !color || color === "default" ? "blue" : color;

  const className = clsx(
    {
      "bg-blue-600 hover:bg-blue-700 outline-blue-600/50 text-white": color === "blue",
      "bg-pink-600 hover:bg-pink-700 outline-pink-600/50 text-white": color === "pink",
      "bg-yellow-500 hover:bg-yellow-300 outline-yellow-500/50 text-black":
        color === "yellow",
    },
    "transition-all ease-out duration-100 py-2 px-4 rounded-md font-bold ",
    "focus:outline active:outline outline-3 outline-offset-2",
    "focus:scale-95",
    classNameProp,
    { "text-2xl py-3 px-6": size === "large" }
  );

  const commonProps = {
    className,
    onClick,
    children,
  };

  if (href)
    return (
      <Link href={href} passHref>
        <a {...commonProps} />
      </Link>
    );

  return <button {...commonProps} />;
};
