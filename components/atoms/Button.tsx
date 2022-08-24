import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "large";
}

export const Button: React.FC<ButtonProps> = ({ size, ...props }) => {
  return (
    <button
      className={clsx(
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md",
        props.className,
        { "text-2xl py-3 px-6": size === "large" }
      )}
      {...props}
    />
  );
};
