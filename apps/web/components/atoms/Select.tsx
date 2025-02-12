import { forwardRef } from "react";

import { cn } from "@ui/lib/utils";

interface SelectOption {
  label: string;
  value: string;
}

type SelectProps = Partial<React.SelectHTMLAttributes<HTMLSelectElement>> & {
  options: SelectOption[];
};

export const Select = forwardRef<any, SelectProps>(
  ({ options, ...props }, ref) => {
    const className = cn(
      "w-full h-12 px-3 py-3 border rounded-md focus:outline-none focus:ring focus:ring-blue focus:border-transparent bg-slate-800 border-slate-700 text-white disabled:opacity-50 disabled:cursor-not-allowed",
      props.className,
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
  },
);

Select.displayName = "Select";
