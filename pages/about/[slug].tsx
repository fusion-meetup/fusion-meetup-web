import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { SanityContent } from "../../components/atoms/SanityContent";
import { SanityImage } from "../../components/atoms/SanityImage";
import { TeamMemberCard } from "../../components/molecules/MeetTheTeam";
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
    <Layout title={`${teamMember.name} – Team Member`} className="px-4">
      <TeamMemberCard teamMember={teamMember} />
      <SanityImage
        image={teamMember.image}
        alt={`Profile photo for ${teamMember.name}`}
        layout="fill"
        objectFit="cover"
      />
      {JSON.stringify(teamMember.image.asset._ref)}
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
