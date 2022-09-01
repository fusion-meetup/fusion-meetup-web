import clsx from "clsx";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  className: classNameProp,
  children,
}) => {
  const className = clsx(
    "font-bold",
    {
      "text-5xl": level === 1,
      "text-4xl": level === 2,
      "text-3xl": level === 3,
      "text-2xl": level === 4,
      "text-xl": level === 5,
      "text-lg": level === 5,
    },
    classNameProp
  );

  const Element = `h${level}` as keyof JSX.IntrinsicElements;

  return <Element className={className}>{children}</Element>;
};
