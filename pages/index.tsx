import type { NextPage } from "next";

import { Layout } from "../components/organisms/Layout";
import { Hero } from "../components/molecules/Hero";
import { Button } from "../components/atoms/Button";
import { Heading } from "../components/atoms/Heading";

const Home: NextPage = () => (
  <Layout withHero>
    <Hero />

    <div className="container mx-auto p-4">
      <Heading level={1} className="py-4">
        Fusion Meetup
      </Heading>

      <p className="pb-2">
        A quarterly tech meetup held in Birmingham city centre
      </p>

      <div className="flex flex-row gap-4 flex-wrap pb-12 py-2">
        <Button>Blue button</Button>
        <Button color="pink">Pink button</Button>
        <Button color="yellow">Yellow button</Button>
      </div>
    </div>
  </Layout>
);

export default Home;
