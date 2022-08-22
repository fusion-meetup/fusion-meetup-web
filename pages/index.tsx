import type { NextPage } from "next";
import Head from "next/head";

import { Socials } from "../components/socials";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Fusion Meetup - Quarterly tech meetup help in Birmingham city centre</title>
      <meta
        name="description"
        content="Quarterly tech meetup help in Birmingham city centre"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Welcome to Fusion Meetup</h1>

      <p>Bla bla bla</p>
    </main>

    <footer>
      <Socials />
    </footer>
  </div>
);

export default Home;
