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

      <div className="bg-slate-900 text-white min-h-screen">
        <header>
          <AuroraHero>
            <div className="max-w-xl w-full px-8 mx-auto -mt-4">
              <FusionHackLogo className="w-full" />
            </div>
          </AuroraHero>
        </header>

        <main className="relative w-full">
          <div className="h-16 -mt-16 bg-gradient-to-b from-transparent to-slate-900" />

          <div className="max-w-4xl mx-auto px-4 md:px-8 text-pretty flex flex-col gap-2">
            <h1 className="text-3xl md:text-5xl leading-tight text-center">
              FusionHack is a 24hr hackathon for the Birmingham tech community
            </h1>

            <section className="py-16">
              <HackFaqs />
            </section>
          </div>
        </main>

        <footer className="w-full flex px-4 md:px-8 items-center h-16">
          <Image
            alt="Fusion heart"
            src={fusionHeart}
            layout="fixed"
            width={20}
            height={20}
          />
        </footer>
      </div>
    </>
  );
};

export default ContactPage;

interface HackFaqsProps {}

export const HackFaqs: React.FC<HackFaqsProps> = ({}) => {
  const faqs = [
    {
      question: "When?",
      answer: "We don't know yet",
    },
    {
      question: "Where?",
      answer: "Not sure",
    },
    {
      question: "What?",
      answer: "Yes",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">FAQs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {faqs.map(({ question, answer }) => (
          <div key={question} className="flex flex-col gap-2">
            <h2 className="text-2xl">{question}</h2>
            <p className="opacity-50">{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
