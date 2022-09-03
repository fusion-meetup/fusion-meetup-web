import type { GetStaticProps, NextPage } from "next";
import dayjs from "dayjs";

import { BlogPost } from "../../types/cms/Blog";
import { Layout } from "../../components/organisms/Layout";
import { Heading } from "../../components/atoms/Heading";
import { getBlogPosts } from "../../lib/cms/queries";

interface BlogPageProps {
  blogPosts: BlogPost[];
}

const BlogPage: NextPage<BlogPageProps> = ({ blogPosts }) => (
  <Layout>
    <div className="container mx-auto p-4">
      <Heading level={2} className="py-4">
        Blog Posts
      </Heading>

      <div className="flex flex-col gap-4 py-4">
        {blogPosts.map((post) => (
          <a
            key={post.key}
            href={`/blog/post/${post.slug}`}
            className="group bg-white dark:bg-slate-800 rounded-lg shadow-sm dark:shadow-md p-6 border-2 border-transparent hover:border-pink-600 dark:hover:border-pink-400"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold group-hover:text-pink-600 dark:group-hover:text-pink-400">
                {post.title}
              </h2>
              <p>{dayjs(post.publishedAt).format("Do MMMM, YYYY")}</p>
            </div>
          </a>
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
