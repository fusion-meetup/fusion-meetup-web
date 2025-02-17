import { PortableText } from "@portabletext/react";

import type { Content } from "@fusion/sanity/types";

import { Heading } from "./Heading";
import { SanityImage } from "./SanityImage";

interface SanityContentProps {
  content?: Content;
}

export const SanityContent: React.FC<SanityContentProps> = ({ content }) => {
  if (!content) return null;

  return (
    <div className="sanity-content flex flex-col gap-4">
      {content.map((item, i) => {
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
                    <blockquote className="border-l-4 border-slate-700 pl-2 md:pl-3">
                      {children}
                    </blockquote>
                  ),
                },
              }}
            />
          );
        } else {
          return (
            <div key={`${item._type}-${i}`}>
              <SanityImage image={item} alt="Image" layout="intrinsic" />
            </div>
          );
        }
      })}
    </div>
  );
};
