import { notFound } from "next/navigation";

import dayjs from "dayjs";

import { getBlogPostBySlug, getBlogPostsSlugs } from "@fusion/sanity/queries";

import { SanityContent } from "@/components/atoms/SanityContent";
import { BlogAuthor } from "@/components/blog/BlogAuthor";
import { BlogPostHeader } from "@/components/blog/BlogPostHeader";
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";
import { Layout } from "@/components/organisms/Layout";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const BlogPostPage = async (props: BlogPostPageProps) => {
  const { slug } = await props.params;

  const blogPost = await getBlogPostBySlug(slug);

  if (!blogPost) notFound();

  return (
    <Layout title={`${blogPost.title} – Blog`}>
      <BlogPostHeader blogPost={blogPost} />

      <div className="relative z-0 mx-auto max-w-[640px] p-4 xl:max-w-[800px]">
        <div className="flex flex-col gap-10 py-6">
          <div className="flex flex-row flex-wrap items-center justify-between gap-4 rounded-lg border-2 border-slate-500 bg-slate-800 p-4 pr-6 pl-5 shadow">
            {blogPost.author ? (
              <BlogAuthor teamMember={blogPost.author} enableTwitterLink />
            ) : null}
            Published on {dayjs(blogPost.publishedAt).format("Do MMMM, YYYY")}
          </div>

          <Breadcrumbs params={{ slug: blogPost.title ?? "Untitled" }} />

          <div className="pb-16">
            <SanityContent content={blogPost.body} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function generateStaticParams() {
  const slugs = await getBlogPostsSlugs();
  return slugs.filter(Boolean).map((slug) => ({ slug }));
}

export default BlogPostPage;
