import clsx from "clsx";
import { forwardRef } from "react";

interface SelectOption {
  label: string;
  value: string;
}

type SelectProps = Partial<React.SelectHTMLAttributes<HTMLSelectElement>> & {
  options: SelectOption[];
};

export const Select = forwardRef<any, SelectProps>(({ options, ...props }, ref) => {
  const className = clsx(
    props.className,
    "w-full h-12 px-3 py-3 border border-gray-300 rounded-md",
    "focus:outline-none focus:ring focus:ring-blue focus:border-transparent",
    "bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  );

  return (
    <select ref={ref} {...props} className={className}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = "Select";
