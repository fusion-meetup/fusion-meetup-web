import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "large";
  color?: "default" | "blue" | "pink" | "yellow";
}

export const Button: React.FC<ButtonProps> = ({ size, color, ...props }) => {
  color = !color || color === "default" ? "blue" : color;

  return (
    <button
      className={clsx(
        {
          "bg-blue-600 hover:bg-blue-700 outline-blue-600/50 text-white":
            color === "blue",
          "bg-pink-600 hover:bg-pink-700 outline-pink-600/50 text-white":
            color === "pink",
          "bg-yellow-500 hover:bg-yellow-300 outline-yellow-500/50 text-black":
            color === "yellow",
        },
        "transition-all duration-100 py-2 px-4 rounded-md font-bold ",
        "focus:outline active:outline outline-3 outline-offset-2",
        props.className,
        { "text-2xl py-3 px-6": size === "large" }
      )}
      {...props}
    />
  );
};
