import { forwardRef } from "react";

import { cn } from "@ui/lib/utils";

type InputProps = Partial<
  React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
> & {
  multiLine?: boolean;
};

export const Input = forwardRef<any, InputProps>(
  ({ multiLine = false, ...props }, ref) => {
    const className = cn(
      "w-full px-4 py-2 h-12 border rounded-md focus:outline-none focus:ring focus:ring-blue focus:border-transparent bg-slate-800 border-slate-700 text-white disabled:opacity-50 disabled:cursor-not-allowed focus:placeholder-transparent placeholder:opacity-75",
      multiLine ? "h-40" : "h-12",
      props.className,
    );

    if (multiLine) {
      return <textarea ref={ref} {...props} className={className} />;
    }

    return <input ref={ref} {...props} className={className} />;
  },
);

Input.displayName = "Input";
