import Head from "next/head";

import { cn } from "@ui/lib/utils";

import { Header } from "../molecules/Header";
import { Hero } from "../molecules/Hero";
import { Footer } from "./Footer";

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
        className={cn("flex min-h-screen flex-col", {
          "background-fusion-colours": fancyBackground === "colours",
        })}
      >
        {withHero ? <Hero /> : null}

        <Header />

        <main
          className={cn(className, "z-1 relative pb-8", {
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
