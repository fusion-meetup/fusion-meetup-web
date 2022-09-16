import clsx from "clsx";

interface FormFieldLabel extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const FormFieldLabel: React.FC<FormFieldLabel> = ({ ...props }) => {
  return (
    <label
      {...props}
      className={clsx(
        props.className,
        "text-sm font-medium opacity-60 block pb-1"
      )}
    />
  );
};
