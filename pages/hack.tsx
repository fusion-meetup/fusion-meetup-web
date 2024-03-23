import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";

import { FusionHackLogo } from "../components/atoms/FusionHackLogo";
import fusionHeart from "../public/fusion-heart.png";
import { AuroraHero } from "../components/molecules/AuroraHero";

interface ContactPageProps {}

const ContactPage: NextPage<ContactPageProps> = () => {
  return (
    <>
      <Head>
        <title>FusionHack</title>
        <meta
          name="description"
          content="FusionHack: Coming soon to a Birmingham near you 👀"
        />
      </Head>

      <div>
        <AuroraHero>
          <div className="max-w-xl w-full px-8 mx-auto">
            <FusionHackLogo className="w-full" />
          </div>
        </AuroraHero>

        <div className="absolute bottom-8 left-0 right-0 flex items-center gap-1 justify-center">
          <p>coming soon 👀</p>

          <Image
            alt="Fusion heart"
            src={fusionHeart}
            layout="fixed"
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
