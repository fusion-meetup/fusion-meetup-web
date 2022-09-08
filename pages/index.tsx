import type { NextPage } from "next";

import { Layout } from "../components/organisms/Layout";
import { Button } from "../components/atoms/Button";
import { Heading } from "../components/atoms/Heading";

const Home: NextPage = () => (
  <Layout withHero>
    <div className="container mx-auto p-4">
      <Heading level={1} className="py-4">
        Fusion Meetup
      </Heading>

      <p className="pb-2">A quarterly tech meetup held in Birmingham city centre</p>

      <div className="py-16">
        <Heading level={3} className="pb-4 text-center">
          Temporary Links
        </Heading>

        <div className="flex flex-row gap-4 flex-wrap justify-center">
          <Button href="/blog">Blog</Button>

          <Button href="/events" color="pink">
            Events
          </Button>

          <Button href="/about" color="yellow">
            About
          </Button>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
