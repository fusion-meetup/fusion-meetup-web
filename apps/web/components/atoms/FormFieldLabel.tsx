import { cn } from "@ui/lib/utils";

interface FormFieldLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const FormFieldLabel: React.FC<FormFieldLabelProps> = ({ ...props }) => {
  return (
    <label
      {...props}
      className={cn(
        "block pb-1 text-sm font-medium opacity-60",
        props.className,
      )}
    />
  );
};
