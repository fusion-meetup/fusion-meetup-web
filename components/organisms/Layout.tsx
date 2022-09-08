import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";

import { Header } from "../molecules/Header";
import { Footer } from "./Footer";
import fusionColoursBackground from "../../public/fusion-colours-background.png";

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
          {`Fusion Meetup - ${
            title || "A quarterly tech meetup held in Birmingham city centre"
          }`}
        </title>
        <meta
          name="description"
          content="Fusion Meetup: A quarterly tech meetup held in Birmingham city centre"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-slate-100 dark:bg-slate-900 dark:text-white min-h-screen flex flex-col">
        {fancyBackground === "colours" && (
          <div className="absolute top-12 sm:top-0 md:-top-16 lg:-top-24 xl:-top-32 left-0 w-full">
            <Image
              src={fusionColoursBackground}
              alt="background image"
              width={512}
              height={741}
              layout="responsive"
              className="w-full blur-lg opacity-50 md:opacity-30"
            />
          </div>
        )}

        <Header />

        <main className={clsx(className, "relative z-1 pb-8", { "pt-12": !withHero })}>
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};
