import clsx from "clsx";

interface CharCountProps {
  value: string | undefined;
  max: number;
}

export const CharCount: React.FC<CharCountProps> = ({ value, max }) => {
  const count = value?.length || 0;

  if (count < max * 0.8) return null;

  return (
    <div
      className={clsx(
        "bg-white shadow-md dark:bg-slate-700",
        "text-sm px-2 rounded-full",
        {
          "text-amber-500 font-bold": count > max * 0.9 && max > count,
          "text-red-500 font-bold": count >= max,
        }
      )}
    >
      {count} / {max} characters
    </div>
  );
};
