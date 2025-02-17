import { notFound } from "next/navigation";

import { getCodeOfConduct } from "@fusion/sanity/queries";

import { Heading } from "@/components/atoms/Heading";
import { SanityContent } from "@/components/atoms/SanityContent";
import { Layout } from "@/components/organisms/Layout";

const CodeOfConduct = async () => {
  const codeOfConduct = await getCodeOfConduct();

  if (!codeOfConduct) notFound();

  return (
    <Layout title="About">
      <div className="mx-auto max-w-[800px] p-4">
        <Heading level={1} className="py-6">
          {codeOfConduct.title}
        </Heading>

        <div className="leading-loose">
          <SanityContent content={codeOfConduct.content} />
        </div>
      </div>
    </Layout>
  );
};

export default CodeOfConduct;
