import type { GetStaticProps, NextPage } from "next";

import { CodeOfConduct } from "../types/cms/CodeOfConduct";
import { getCodeOfConduct } from "../lib/cms/queries";
import { Layout } from "../components/organisms/Layout";
import { Heading } from "../components/atoms/Heading";
import { SanityContent } from "../components/atoms/SanityContent";

interface CodeOfConductPageProps {
  codeOfConduct: CodeOfConduct;
}

const CodeOfConductPage: NextPage<CodeOfConductPageProps> = ({
  codeOfConduct,
}) => (
  <Layout title="About">
    <div className="max-w-[800px] mx-auto p-4">
      <Heading level={1} className="py-6">
        {codeOfConduct.title}
      </Heading>

      <div className="leading-loose">
        <SanityContent value={codeOfConduct.content} />
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<
  CodeOfConductPageProps
> = async () => {
  const codeOfConduct = await getCodeOfConduct();

  return {
    props: {
      codeOfConduct,
    },
  };
};

export default CodeOfConductPage;
