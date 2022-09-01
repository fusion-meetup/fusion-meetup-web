import type { GetStaticProps, NextPage } from "next";

import { SanityTeamMember, TeamMember } from "../types/cms/TeamMember";
import { cms } from "../lib/cms";
import { mapSanityTeamMember } from "../lib/cms/mappers";
import { Layout } from "../components/organisms/Layout";
import { MeetTheTeam } from "../components/molecules/MeetTheTeam";

interface AboutPageProps {
  team: TeamMember[];
}

const AboutPage: NextPage<AboutPageProps> = ({ team }) => (
  <Layout>
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold py-4">About Fusion</h1>
      <p className="py-4">Cool meetup</p>

      <MeetTheTeam team={team} />
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const sanityTeamMembers: SanityTeamMember[] = await cms.fetch(
    `*[_type == "teamMember"]`
  );

  const team = sanityTeamMembers.map(mapSanityTeamMember);

  return {
    props: {
      team,
    },
  };
};

export default AboutPage;
