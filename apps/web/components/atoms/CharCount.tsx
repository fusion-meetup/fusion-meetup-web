import { cn } from "@ui/lib/utils";

interface CharCountProps {
  value: string | undefined;
  max: number;
}

export const CharCount: React.FC<CharCountProps> = ({ value, max }) => {
  const count = value?.length || 0;

  if (count < max * 0.8) return null;

  return (
    <div
      className={cn("rounded-full bg-slate-700 px-2 text-sm shadow-md", {
        "font-bold text-amber-500": count > max * 0.9 && max > count,
        "font-bold text-red-500": count >= max,
      })}
    >
      {count} / {max} characters
    </div>
  );
};
