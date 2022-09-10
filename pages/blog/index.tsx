import type { GetStaticProps, NextPage } from "next";

import { BlogPost } from "../../types/cms/Blog";
import { Layout } from "../../components/organisms/Layout";
import { Heading } from "../../components/atoms/Heading";
import { getBlogPosts } from "../../lib/cms/queries";
import { BlogCard } from "../../components/blog/BlogCard";

interface BlogPageProps {
  blogPosts: BlogPost[];
}

const BlogPage: NextPage<BlogPageProps> = ({ blogPosts }) => (
  <Layout title="Blog">
    <div className="container mx-auto p-4">
      <Heading level={2} className="py-4">
        Blog Posts
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        {blogPosts.map((post) => (
          <BlogCard post={post} key={post.key} />
        ))}
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const blogPosts = await getBlogPosts();

  return {
    props: {
      blogPosts,
    },
  };
};

export default BlogPage;
