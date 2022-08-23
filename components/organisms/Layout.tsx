import Head from "next/head";
import { FC, ReactNode } from "react";

import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>
          Fusion Meetup -{" "}
          {title || "A quarterly tech meetup held in Birmingham city centre"}
        </title>
        <meta
          name="description"
          content="Fusion Meetup: A quarterly tech meetup held in Birmingham city centre"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-slate-100">
        <div className="container mx-auto p-4">{children}</div>

        <Footer />
      </div>
    </>
  );
};
