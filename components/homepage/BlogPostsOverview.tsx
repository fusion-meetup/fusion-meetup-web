import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";

import { BlogPost } from "../../types/cms/Blog";
import { Button } from "../atoms/Button";
import { BlogCard } from "../blog/BlogCard";

export const BlogPostsOverview: React.FC<{ threeBlogPosts: BlogPost[] }> = ({
  threeBlogPosts,
}) => {
  return (
    <div className="flex flex-col gap-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {threeBlogPosts.slice(0, 3).map((post, i) => (
          <BlogCard
            post={post}
            key={post.key}
            className={clsx({
              "hidden sm:block": i === 1,
              "hidden lg:block": i === 2,
            })}
          />
        ))}
      </div>

      <Button href="/blog" color="pink">
        More posts <FaArrowRight />
      </Button>
    </div>
  );
};
