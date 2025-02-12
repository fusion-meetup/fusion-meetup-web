import Head from "next/head";

import { ArrowDown, Calendar, Lightbulb, MapPin } from "lucide-react";

import { HomeButton } from "@/components/atoms/HomeButton";
import { FusionHackLogo } from "@/components/hack/FusionHackLogo";
import { HackMailingSignUp } from "@/components/hack/HackMailingSignUp";
import { AuroraHero } from "@/components/molecules/AuroraHero";
import { Footer } from "@/components/organisms/Footer";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>FusionHack</title>
        <meta
          name="description"
          content="FusionHack: Coming soon to a Birmingham near you 👀"
        />
      </Head>

      <div className="absolute left-0 top-0 z-10">
        <HomeButton />
      </div>

      <div className="flex min-h-screen flex-col bg-slate-900 text-white bg-grid-slate-800/50">
        <header>
          <AuroraHero>
            <div className="mx-auto -mt-4 w-full max-w-xl px-8">
              <FusionHackLogo className="w-full" />

              <h1 className="hidden" aria-hidden="true">
                FusionHack
              </h1>
            </div>
          </AuroraHero>
        </header>

        <main className="relative w-full">
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-20 px-8 pb-20">
            <section className="flex flex-col items-center gap-8">
              <div className="mx-auto -mt-4 flex h-8 items-center gap-3 rounded-full border border-slate-700 bg-slate-800/50 px-2.5 text-sm shadow">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-200 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-500"></span>
                </span>
                Under construction! Stay tuned...
              </div>

              <h2 className="text-pretty text-center text-3xl leading-tight md:text-5xl">
                FusionHack is a 24hr hackathon* for the Birmingham tech
                community
              </h2>

              <p className="text-balance text-center text-sm leading-tight opacity-50">
                *hackathons are collaborative events where participants learn,
                build, and share fun code projects!
              </p>
            </section>

            <section>
              <HackDetails />
            </section>

            <section>
              <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-slate-800 bg-slate-950/30 p-8">
                <div className="flex flex-col items-center gap-2">
                  <p className="max-w-2xl text-balance text-center">
                    We're currently working out all the details to make
                    FusionHack awesome!
                  </p>

                  <p className="text-balance text-center text-2xl font-semibold text-blue-400">
                    Sign up for updates{" "}
                    <ArrowDown size="1.25em" className="inline-block" />
                  </p>
                </div>

                <HackMailingSignUp />
              </div>
            </section>
          </div>
        </main>

        <Footer noBg className="border-t-2 border-slate-800 backdrop-blur-sm" />
      </div>
    </>
  );
};

export default ContactPage;

const HackDetails: React.FC = () => {
  const details = [
    {
      question: "When?",
      answer: "2025 – more specific date TBD",
      icon: Calendar,
    },
    {
      question: "Where?",
      answer: "Birmingham – more specific venue TBD",
      icon: MapPin,
    },
    {
      question: "What?",
      answer: "A 24hr hackathon – more specific plan TBD",
      icon: Lightbulb,
    },
  ];

  const colors = ["text-blue-500", "text-pink-400", "text-yellow-200"];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {details.map(({ icon: Icon, question, answer }, i) => (
        <div key={question} className="flex flex-col gap-2">
          <h2 className="flex items-center gap-2 text-2xl">
            <Icon size={24} className={colors[i % 3]} /> {question}
          </h2>

          <p className="text-pretty opacity-50">{answer}</p>
        </div>
      ))}
    </div>
  );
};
