import { notFound } from "next/navigation";

import type { GetBlogPostBySlugQueryResult } from "@fusion/sanity/types";

import { Heading } from "../atoms/Heading";
import { SanityImage } from "../atoms/SanityImage";

interface BlogPostHeaderProps {
  blogPost: GetBlogPostBySlugQueryResult;
}

export const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ blogPost }) => {
  if (!blogPost) return notFound();

  const alt = `Image for blog post: ${blogPost.title}`;

  return (
    <>
      <div className="relative -mb-16 hidden h-[420px] overflow-hidden md:block">
        {blogPost.mainImage ? (
          <div className="absolute -bottom-4 -left-4 -right-4 -top-4 opacity-30">
            <SanityImage
              image={blogPost.mainImage}
              alt={alt}
              layout="fill"
              objectFit="cover"
              quality={1}
              className="blur"
            />
          </div>
        ) : null}

        <div className="absolute bottom-0 left-0 right-0 top-0 mx-auto grid max-w-[900px] items-center gap-6 p-4 md:grid-cols-[3fr_2fr] lg:grid-cols-[2fr_1fr] xl:max-w-[1000px]">
          <Heading level={1} className="break-words">
            {blogPost.title}
          </Heading>

          <div>
            {blogPost.mainImage ? (
              <SanityImage
                image={blogPost.mainImage}
                alt={alt}
                className="rounded"
              />
            ) : null}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[640px] flex-col gap-6 p-4 pb-0 md:hidden xl:max-w-[800px]">
        {blogPost.mainImage ? (
          <div className="sm:max-w-[320px]">
            <SanityImage
              image={blogPost.mainImage}
              alt={alt}
              className="rounded"
            />
          </div>
        ) : null}

        <Heading level={1} className="break-words">
          {blogPost.title}
        </Heading>
      </div>
    </>
  );
};
