import type { GetStaticProps, NextPage } from "next";
import { SanityContent } from "../../components/atoms/SanityContent";
import { Layout } from "../../components/organisms/Layout";
import {
  getTeamMemberBySlug,
  getTeamMembersSlugs,
} from "../../lib/cms/queries";

interface TeamMemberPageProps {
  teamMember: any;
}

const TeamMemberPage: NextPage<TeamMemberPageProps> = ({ teamMember }) => {
  return (
    <Layout title={`${teamMember.name} – Blog`}>
      {JSON.stringify(teamMember)}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<TeamMemberPageProps> = async (
  context
) => {
  const teamMember = await getTeamMemberBySlug(
    context.params?.slug as string | undefined
  );

  if (!teamMember) return { notFound: true };

  return {
    props: {
      teamMember,
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getTeamMembersSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default TeamMemberPage;
