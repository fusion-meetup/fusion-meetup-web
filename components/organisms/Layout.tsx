import Head from "next/head";

import { Header } from "../molecules/Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
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
        <Header />

        {children}

        <Footer />
      </div>
    </>
  );
};
