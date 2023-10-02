import type { GetStaticProps, NextPage } from "next";

import { TeamMember } from "../../types/cms/TeamMember";
import { AboutFusionInfo } from "../../types/cms/AboutFusionInfo";
import { getAboutFusionInfo, getTeamMembers } from "../../lib/cms/queries";
import { Layout } from "../../components/organisms/Layout";
import { MeetTheTeam } from "../../components/molecules/MeetTheTeam";
import { AboutFusion } from "../../components/homepage/AboutFusion";

interface AboutPageProps {
  team: TeamMember[];
  about: AboutFusionInfo;
}

const AboutPage: NextPage<AboutPageProps> = ({ team, about }) => (
  <Layout title="About">
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-8">
        <AboutFusion about={about} bigTitle />

        <MeetTheTeam team={team} />
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const [team, about] = await Promise.all([
    getTeamMembers(),
    getAboutFusionInfo(),
  ]);

  return {
    props: {
      team,
      about,
    },
  };
};

export default AboutPage;
