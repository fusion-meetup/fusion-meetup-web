import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowDown,
  Calendar,
  Check,
  Lightbulb,
  LoaderCircle,
  MapPin,
} from "lucide-react";

import { FusionHackLogo } from "../components/atoms/FusionHackLogo";
import { AuroraHero } from "../components/molecules/AuroraHero";
import { Footer } from "../components/organisms/Footer";
import { HomeButton } from "../components/atoms/HomeButton";
import { Input } from "../components/atoms/Input";
import { Button } from "../components/atoms/Button";

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

              <h1 className="hidden" aria-hidden="true">
                FusionHack
              </h1>
            </div>
          </AuroraHero>
        </header>

        <main className="relative w-full">
          <div className="w-full max-w-4xl mx-auto px-8 flex flex-col gap-20 pb-20">
            <section className="flex flex-col gap-8 items-center">
              <div className="h-8 -mt-4 rounded-full mx-auto bg-slate-800/50 flex items-center px-2.5 gap-3 border border-slate-700 shadow text-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-200 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
                Under construction! Stay tuned...
              </div>

              <h2 className="text-3xl md:text-5xl leading-tight text-center text-pretty">
                FusionHack is a 24hr hackathon* for the Birmingham tech
                community
              </h2>

              <p className="text-center leading-tight text-balance opacity-50 text-sm">
                *hackathons are collaborative events where participants learn,
                build, and share fun code projects!
              </p>
            </section>

            <section>
              <HackDetails />
            </section>

            <section>
              <div className="bg-slate-950/30 rounded-xl border-2 border-slate-800 p-8 flex flex-col items-center gap-6">
                <div className="flex flex-col gap-2 items-center">
                  <p className="text-center text-balance max-w-2xl">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    We're currently working out all the details to make
                    FusionHack awesome!
                  </p>

                  <p className="text-center text-balance text-2xl font-semibold text-blue-400">
                    Sign up for updates{" "}
                    <ArrowDown size="1.25em" className="inline-block" />
                  </p>
                </div>

                <HackMailingSignUp />
              </div>
            </section>
          </div>
        </main>

        <Footer noBg className="backdrop-blur-sm border-t-2 border-slate-800" />
      </div>
    </>
  );
};

export default ContactPage;

const HackDetails: React.FC = () => {
  const details = [
    {
      question: "When?",
      answer: "Autumn 2024 – more specific date TBD",
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {details.map(({ icon: Icon, question, answer }, i) => (
        <div key={question} className="flex flex-col gap-2">
          <h2 className="text-2xl flex items-center gap-2">
            <Icon size={24} className={colors[i % 3]} /> {question}
          </h2>

          <p className="opacity-50 text-pretty">{answer}</p>
        </div>
      ))}
    </div>
  );
};

const HackMailingSignUp: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    defaultValues: { email: "" },
    resolver: zodResolver(z.object({ email: z.string().email() })),
  });

  const onSubmit = async (data: { email: string }) => {
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to sign up");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 max-w-md w-full mx-auto">
      {status === "loading" ? (
        <LoaderCircle className="animate-spin" />
      ) : status === "success" ? (
        <p>
          <Check className="text-green-500 inline-block" /> Signed up!
        </p>
      ) : (
        <>
          <div className="flex w-full gap-4">
            <Input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email address"
              className="flex-1"
            />

            <Button className="shrink-0" onClick={handleSubmit(onSubmit)}>
              Sign up
            </Button>
          </div>

          {status === "error" ? (
            <p className="text-red-500">Failed to sign up</p>
          ) : errors.email ? (
            <p className="text-red-500">Please enter a valid email address</p>
          ) : null}
        </>
      )}
    </div>
  );
};
