import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";

import { BlogPost } from "../../types/cms/Blog";
import { Button } from "../atoms/Button";
import { BlogCard } from "../blog/BlogCard";

export const BlogPostsOverview: React.FC<{ blogPosts: BlogPost[] }> = ({ blogPosts }) => {
  return (
    <div className="flex flex-col items-end gap-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(0, 3).map((post, i) => (
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
        More Posts <FaArrowRight />
      </Button>
    </div>
  );
};
