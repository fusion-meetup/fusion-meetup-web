import type { GetStaticProps, NextPage } from "next";
import dayjs from "dayjs";
import clsx from "clsx";

import { BlogPost } from "../../../types/cms/Blog";
import { getBlogPostBySlug, getBlogPostsSlugs } from "../../../lib/cms/queries";
import { Layout } from "../../../components/organisms/Layout";
import { SanityContent } from "../../../components/atoms/SanityContent";
import { BlogAuthor } from "../../../components/blog/BlogAuthor";
import { BlogPostHeader } from "../../../components/blog/BlogPostHeader";

interface BlogPostPageProps {
  blogPost?: BlogPost;
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ blogPost }) => {
  if (!blogPost) return null;

  return (
    <Layout title={`${blogPost.title} – Blog`}>
      <BlogPostHeader blogPost={blogPost} />

      <div className="relative z-0 max-w-[640px] xl:max-w-[800px] mx-auto p-4">
        <div className="py-6">
          <div
            className={clsx(
              "p-4 pl-5 pr-6 rounded-lg flex flex-row items-center justify-between gap-4 flex-wrap",
              "shadow bg-white dark:bg-slate-800 dark:border-2 dark:border-slate-500"
            )}
          >
            {blogPost.author ? (
              <BlogAuthor teamMember={blogPost.author} enableTwitterLink />
            ) : null}
            Published on {dayjs(blogPost.publishedAt).format("Do MMMM, YYYY")}
          </div>
        </div>

        <div className="pt-4 pb-16">
          <SanityContent value={blogPost.body} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async (
  context
) => {
  const blogPost = await getBlogPostBySlug(
    context.params?.slug as string | undefined
  );

  if (!blogPost) return { notFound: true };

  return {
    props: {
      blogPost,
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getBlogPostsSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default BlogPostPage;
