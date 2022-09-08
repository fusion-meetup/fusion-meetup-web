import type { GetStaticProps, NextPage } from "next";

import { BlogPost } from "../../../types/cms/Blog";
import { Layout } from "../../../components/organisms/Layout";
import { Heading } from "../../../components/atoms/Heading";
import { SanityContent } from "../../../components/atoms/SanityContent";
import { getBlogPostBySlug, getBlogPostsSlugs } from "../../../lib/cms/queries";

interface BlogPostPageProps {
  blogPost?: BlogPost;
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ blogPost }) => {
  if (!blogPost) return null;

  return (
    <Layout title={`${blogPost.title} – Blog`}>
      <div className="max-w-[640px] xl:max-w-[800px] mx-auto p-4">
        <div className="py-6">
          <Heading level={1}>{blogPost.title}</Heading>
        </div>

        <div className="pt-4 pb-16">
          <SanityContent value={blogPost.body} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async (context) => {
  const blogPost = await getBlogPostBySlug(context.params?.slug as string | undefined);

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
    fallback: true,
  };
};

export default BlogPostPage;
