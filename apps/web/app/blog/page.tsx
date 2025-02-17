import { notFound } from "next/navigation";

import { getBlogPosts } from "@fusion/sanity/queries";

import { Heading } from "@/components/atoms/Heading";
import { BlogCard } from "@/components/blog/BlogCard";
import { Layout } from "@/components/organisms/Layout";

const Blog = async () => {
  const blogPosts = await getBlogPosts();

  if (!blogPosts) notFound();

  return (
    <Layout title="Blog">
      <div className="container mx-auto p-4">
        <Heading level={2} className="py-4">
          Blog Posts
        </Heading>

        <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard post={post} key={post._id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
