import clsx from "clsx";

interface HeadingProps {
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children?: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  className: classNameProp,
  children,
}) => {
  const className = clsx(
    "font-bold break-words",
    {
      "text-6xl md:text-7xl": level === 0,
      "text-4xl md:text-5xl": level === 1,
      "text-3xl md:text-4xl": level === 2,
      "text-2xl md:text-3xl": level === 3,
      "text-xl md:text-2xl": level === 4,
      "text-lg md:text-xl": level === 5,
      "text-md md:text-lg": level === 5,
    },
    classNameProp
  );

  const Element = `h${level || 1}` as keyof JSX.IntrinsicElements;

  return <Element className={className}>{children}</Element>;
};
