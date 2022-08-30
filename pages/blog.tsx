import type { GetStaticProps, NextPage } from "next";
import dayjs from "dayjs";

import { cms } from "../lib/cms";
import { mapSanityBlogPost } from "../lib/cms/mappers";
import { Layout } from "../components/organisms/Layout";
import { BlogPost, SanityBlogPost } from "../types/cms/Blog";

interface BlogPageProps {
  blogPosts: BlogPost[];
}

const BlogPage: NextPage<BlogPageProps> = ({ blogPosts }) => (
  <Layout>
    <div className="container mx-auto p-4">
      {blogPosts.map((post) => (
        <div key={post.key}>
          <h1 className="text-2xl font-bold py-4">{post.title}</h1>
          <p>{dayjs(post.publishedAt).format("Do MMMM, YYYY")}</p>
        </div>
      ))}
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const blogPostsSanity: SanityBlogPost[] = await cms.fetch(`*[_type == "blogPost"]`);

  const blogPosts = blogPostsSanity.map(mapSanityBlogPost);

  return {
    props: {
      blogPosts,
    },
  };
};

export default BlogPage;
