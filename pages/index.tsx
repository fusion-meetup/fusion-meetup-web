import type { NextPage } from "next";

import { Layout } from "../components/organisms/Layout";
import { Hero } from "../components/molecules/Hero";
import { Button } from "../components/atoms/Button";

const Home: NextPage = () => (
  <Layout>
    <main>
      <Hero />

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold py-2">Welcome to Fusion Meetup</h1>

        <p className="pb-2">real good tech meetup</p>

        <Button>Get tickets</Button>
      </div>
    </main>
  </Layout>
);

export default Home;
