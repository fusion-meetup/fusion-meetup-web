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
  title: pageTitle,
  withHero,
  fancyBackground,
  className,
}) => {
  const description =
    "Fusion is a Birmingham-based tech meetup, bringing the community together over great food for a social evening of tech talks aimed to inspire and educate";

  return (
    <>
      <Head>
        <title>{`Fusion Meetup – ${pageTitle || description}`}</title>
        <meta name="description" content={`Fusion Meetup: ${description}`} />
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
