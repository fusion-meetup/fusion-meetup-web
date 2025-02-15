import Link from "next/link";

import dayjs from "dayjs";
import { FaStar } from "react-icons/fa";

import { GetBlogPostBySlugQueryResult } from "@fusion/sanity/types";

import { cn } from "@ui/lib/utils";

import { SanityImage } from "../atoms/SanityImage";
import { BlogAuthor } from "./BlogAuthor";

interface BlogCardProps {
  post: GetBlogPostBySlugQueryResult;
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, className }) => {
  if (!post?.slug?.current) return null;

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className={cn(
        "group overflow-hidden rounded-xl bg-slate-800 shadow-lg hover:ring-4 hover:ring-pink-400",
        className,
      )}
    >
      <div className="flex h-full flex-col gap-2">
        <div className="relative h-40 w-full">
          <SanityImage
            image={post.mainImage!}
            alt={`Image for ${post.title}`}
            layout="fill"
            objectFit="cover"
          />

          {post.featured ? (
            <div className="bg-yellow absolute top-2 right-2 flex items-center gap-1 rounded px-1 text-sm font-bold text-slate-800">
              Featured{" "}
              <span className="text-xs">
                <FaStar />
              </span>
            </div>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col justify-between gap-6 p-6 pt-2">
          <h2 className="text-2xl font-bold break-words group-hover:text-pink-400">
            {post.title}
          </h2>

          <div className="flex flex-col gap-4">
            {post.author ? <BlogAuthor teamMember={post.author} /> : null}
            <p>{dayjs(post.publishedAt).format("Do MMMM, YYYY")}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
