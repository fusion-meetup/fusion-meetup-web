import { forwardRef } from "react";
import clsx from "clsx";

type InputProps = Partial<
  React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
> & {
  multiLine?: boolean;
};

export const Input = forwardRef<any, InputProps>(
  ({ multiLine = false, ...props }, ref) => {
    const className = clsx(
      props.className,
      "w-full px-4 py-2 border border-gray-300 rounded-md",
      "focus:outline-none focus:ring focus:ring-blue focus:border-transparent",
      "dark:bg-slate-800 dark:border-slate-700 dark:text-white",
      multiLine ? "h-40" : "h-12"
    );

    if (multiLine) {
      return <textarea ref={ref} {...props} className={className} />;
    }

    return <input ref={ref} {...props} className={className} />;
  }
);

Input.displayName = "Input";
