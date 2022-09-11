import type { GetStaticProps, NextPage } from "next";

import { TeamMember } from "../types/cms/TeamMember";
import { Layout } from "../components/organisms/Layout";
import { MeetTheTeam } from "../components/molecules/MeetTheTeam";
import { getTeamMembers } from "../lib/cms/queries";
import { Heading } from "../components/atoms/Heading";

interface AboutPageProps {
  team: TeamMember[];
}

const AboutPage: NextPage<AboutPageProps> = ({ team }) => (
  <Layout title="About">
    <div className="container mx-auto p-4">
      <Heading level={1} className="py-6">
        About Fusion
      </Heading>

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
