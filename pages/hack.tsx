import type { NextPage } from "next";
import Head from "next/head";

import { FusionHackLogo } from "../components/atoms/FusionHackLogo";
import { AuroraHero } from "../components/molecules/AuroraHero";
import { Footer } from "../components/organisms/Footer";
import { HomeButton } from "../components/atoms/HomeButton";

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

      <div className="absolute top-0 left-0 z-10">
        <HomeButton />
      </div>

      <div className="bg-slate-900 bg-grid-slate-800/50 text-white min-h-screen flex flex-col">
        <header>
          <AuroraHero>
            <div className="max-w-xl w-full px-8 mx-auto -mt-4">
              <FusionHackLogo className="w-full" />
            </div>
          </AuroraHero>
        </header>

        <main className="relative w-full">
          <div className="w-full max-w-4xl mx-auto px-8 text-pretty flex flex-col gap-8">
            <div className="h-8 -mt-4 rounded-full mx-auto bg-slate-800/50 flex items-center px-2.5 gap-3 border border-slate-700 shadow text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
              Under construction! Stay tuned...
            </div>

            <h1 className="text-3xl md:text-5xl leading-tight text-center">
              FusionHack is a 24hr hackathon for the Birmingham tech community
            </h1>

            <section className="py-16">
              <HackFaqs />
            </section>
          </div>
        </main>

        <Footer />
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
