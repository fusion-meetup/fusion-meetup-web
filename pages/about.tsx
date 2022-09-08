import type { GetStaticProps, NextPage } from "next";

import { TeamMember } from "../types/cms/TeamMember";
import { Layout } from "../components/organisms/Layout";
import { MeetTheTeam } from "../components/molecules/MeetTheTeam";
import { getTeamMembers } from "../lib/cms/queries";

interface AboutPageProps {
  team: TeamMember[];
}

const AboutPage: NextPage<AboutPageProps> = ({ team }) => (
  <Layout title="About">
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold py-4">About Fusion</h1>
      <p className="py-4">Cool meetup</p>

      <MeetTheTeam team={team} />
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const team = await getTeamMembers();

  return {
    props: {
      team,
    },
  };
};

export default AboutPage;
