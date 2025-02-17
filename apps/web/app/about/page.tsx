import { notFound } from "next/navigation";

import { getAboutFusionInfo, getTeamMembers } from "@fusion/sanity/queries";

import { AboutFusion } from "@/components/homepage/AboutFusion";
import { MeetTheTeam } from "@/components/molecules/MeetTheTeam";
import { SponsorFusion } from "@/components/molecules/SponsorFusion";
import { Layout } from "@/components/organisms/Layout";

const About = async () => {
  const [team, about] = await Promise.all([
    getTeamMembers(),
    getAboutFusionInfo(),
  ]);

  if (!about) notFound();

  return (
    <Layout title="About">
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-8">
          <AboutFusion about={about} bigTitle />
          <MeetTheTeam team={team} />
          <SponsorFusion />
        </div>
      </div>
    </Layout>
  );
};

export default About;
