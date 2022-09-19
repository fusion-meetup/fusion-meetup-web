import { PortableText } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { Heading } from "./Heading";
import { SanityImage } from "./SanityImage";

type ContentItem =
  | {
      _type: "block" | "image";
      [key: string]: any;
      children?: ContentItem[];
    }
  | (SanityImageSource & { _type: "image" });

interface SanityContentProps {
  value: ContentItem[];
}

export const SanityContent: React.FC<SanityContentProps> = ({ value }) => {
  if (!value) return null;

  return (
    <div className="flex flex-col gap-4 sanity-content">
      {value.map((item, i) => {
        if (item._type === "block") {
          return (
            <PortableText
              key={`${item._type}-${i}`}
              value={item}
              components={{
                block: {
                  h1: ({ children }) => <Heading level={2}>{children}</Heading>,
                  h2: ({ children }) => <Heading level={3}>{children}</Heading>,
                  h3: ({ children }) => <Heading level={4}>{children}</Heading>,
                  h4: ({ children }) => <Heading level={5}>{children}</Heading>,
                  h5: ({ children }) => <Heading level={6}>{children}</Heading>,
                  blockquote: ({ children }) => (
                    <blockquote className="pl-2 md:pl-3 border-l-4 border-slate-300 dark:border-slate-700">
                      {children}
                    </blockquote>
                  ),
                },
              }}
            />
          );
        } else {
          return (
            <SanityImage
              key={`${item._type}-${i}`}
              image={item}
              alt="Image"
              layout="responsive"
            />
          );
        }
      })}
    </div>
  );
};
