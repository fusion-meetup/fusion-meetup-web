import clsx from "clsx";
import Head from "next/head";

import { Header } from "../molecules/Header";
import { Footer } from "./Footer";
import { Hero } from "../molecules/Hero";

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

      <div
        className={clsx("min-h-screen flex flex-col", {
          "background-fusion-colours": fancyBackground === "colours",
        })}
      >
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
