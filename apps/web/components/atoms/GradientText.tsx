import { cn } from "@ui/lib/utils";

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
      className={cn(
        "w-max bg-gradient-to-r from-blue-500 to-pink-400 bg-clip-text font-semibold text-transparent",
        className,
      )}
    >
      {children}
    </div>
  );
};
