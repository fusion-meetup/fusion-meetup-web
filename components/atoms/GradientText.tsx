import clsx from "clsx";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        "text-transparent bg-clip-text bg-gradient-to-r",
        "from-blue-700 to-pink-700 dark:from-blue-500 dark:to-pink-400",
        "font-semibold w-max"
      )}
    >
      {children}
    </div>
  );
};
