import clsx from "clsx";

import { BlogPost } from "../../types/cms/Blog";
import { Heading } from "../atoms/Heading";
import { SanityImage } from "../atoms/SanityImage";

interface BlogPostHeaderProps {
  blogPost: BlogPost;
}

export const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ blogPost }) => {
  const alt = `Image for blog post: ${blogPost.title}`;

  return (
    <>
      <div className="hidden relative md:block h-[420px] overflow-hidden -mb-16">
        {blogPost.mainImage ? (
          <div className="absolute -top-4 -left-4 -right-4 -bottom-4 opacity-30">
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

        <div
          className={clsx(
            "absolute top-0 left-0 right-0 bottom-0",
            "max-w-[900px] xl:max-w-[1000px] mx-auto p-4",
            "grid md:grid-cols-[3fr_2fr] lg:grid-cols-[2fr_1fr] items-center gap-6"
          )}
        >
          <Heading level={1} className="break-words">
            {blogPost.title}
          </Heading>

          <div>
            {blogPost.mainImage ? (
              <SanityImage
                image={blogPost.mainImage}
                alt={alt}
                className="rounded"
                priority
              />
            ) : null}
          </div>
        </div>
      </div>

      <div className="md:hidden max-w-[640px] xl:max-w-[800px] mx-auto p-4 pb-0 flex flex-col gap-6">
        {blogPost.mainImage ? (
          <div className="sm:max-w-[320px]">
            <SanityImage
              image={blogPost.mainImage}
              alt={alt}
              className="rounded"
              priority
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
