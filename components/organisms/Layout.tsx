import clsx from "clsx";
import Head from "next/head";

import { Header } from "../molecules/Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  withHero?: boolean;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  withHero,
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
        <Header />

        <main className={clsx(className, "pb-8", { "pt-12": !withHero })}>
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};
