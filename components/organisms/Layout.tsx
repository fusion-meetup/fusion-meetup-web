import { useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";

import { Header } from "../molecules/Header";
import { Footer } from "./Footer";
import fusionColoursBackground from "../../public/fusion-colours-background.png";
import { Hero } from "../molecules/Hero";
import { getBlogPostsSlugs } from "../../lib/cms/queries";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  withHero?: boolean;
  fancyBackground?: "colours";
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  withHero,
  fancyBackground,
  className,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    if (window.location.hostname !== "localhost") return;

    const surprise = async () => {
      const slugs = await getBlogPostsSlugs();
      if (!slugs.includes("surprise")) return;

      setTimeout(() => {
        router.push("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      }, 10000);
    };

    surprise();
  }, [router, router.isReady]);

  return (
    <>
      <Head>
        <title>
          {`Fusion Meetup – ${
            title || "A quarterly tech meetup held in Birmingham city centre"
          }`}
        </title>
        <meta
          name="description"
          content="Fusion Meetup: A quarterly tech meetup held in Birmingham city centre"
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        {fancyBackground === "colours" && (
          <div
            className={clsx("absolute top-12 left-0 w-full", {
              "sm:top-0 md:-top-16 lg:-top-24 xl:-top-32": !withHero,
            })}
          >
            <Image
              src={fusionColoursBackground}
              alt="background image"
              width={512}
              height={741}
              layout="responsive"
              className={clsx("w-full blur-lg opacity-70 md:opacity-40", {
                "opacity-25 md:opacity-25": withHero,
              })}
            />
          </div>
        )}

        {withHero ? <Hero /> : null}

        <Header />

        <main
          className={clsx(className, "relative z-1 pb-8", {
            "pt-12": !withHero,
            "-mt-8": withHero,
          })}
        >
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};
