import type { GetStaticProps, NextPage } from "next";

import { BlogPost, SanityBlogPost } from "../../../types/cms/Blog";
import { cms } from "../../../lib/cms";
import { mapSanityBlogPost } from "../../../lib/cms/mappers";
import { Layout } from "../../../components/organisms/Layout";
import { Heading } from "../../../components/atoms/Heading";
import { SanityContent } from "../../../components/atoms/SanityContent";

interface BlogPostPageProps {
  blogPost?: BlogPost;
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ blogPost }) => {
  if (!blogPost) return null;

  return (
    <Layout>
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

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async (
  context
) => {
  const sanityBlogPost: SanityBlogPost = await cms.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      ...,
      author->,
      'slug': slug.current,
    }`,
    { slug: context.params?.slug }
  );

  return {
    props: {
      blogPost: mapSanityBlogPost(sanityBlogPost),
    },
  };
};

export const getStaticPaths = async () => {
  const paths: string[] = await cms.fetch(
    `*[_type == "blogPost" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export default BlogPostPage;
