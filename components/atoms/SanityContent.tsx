import { PortableText } from "@portabletext/react";

import { sanityImageUrlBuilder } from "../../lib/cms";
import { Heading } from "./Heading";

interface ContentItem {
  _type: "block" | "image";
  [key: string]: any;
  children?: ContentItem[];
}

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
          const image = sanityImageUrlBuilder.image(item).url() as string;

          // TODO: Replace img with SanityImage

          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${item._type}-${i}`}
              src={image}
              alt={item.alt || "Image"}
              loading="lazy"
            />
          );
        }
      })}
    </div>
  );
};
