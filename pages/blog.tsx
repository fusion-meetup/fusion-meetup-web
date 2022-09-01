import type { GetStaticProps, NextPage } from "next";
import dayjs from "dayjs";

import { BlogPost, SanityBlogPost } from "../types/cms/Blog";
import { cms } from "../lib/cms";
import { mapSanityBlogPost } from "../lib/cms/mappers";
import { Layout } from "../components/organisms/Layout";
import { Heading } from "../components/atoms/Heading";
import { SanityContent } from "../components/atoms/SanityContent";

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
            className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p>{dayjs(post.publishedAt).format("Do MMMM, YYYY")}</p>
              {/* <SanityContent value={post.body} /> */}
            </div>
          </a>
        ))}
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const blogPostsSanity: SanityBlogPost[] = await cms.fetch(
    `*[_type == "blogPost"]{ ..., author->, 'slug': slug.current}`
  );

  const blogPosts = blogPostsSanity.map(mapSanityBlogPost);

  return {
    props: {
      blogPosts,
    },
  };
};

export default BlogPage;
