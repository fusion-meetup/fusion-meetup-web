import type { NextPage } from "next";

import { Layout } from "../components/organisms/Layout";

const TestPage: NextPage = () => (
  <Layout>
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold py-4">About Fusion</h1>
      <p className="py-4">Cool meetup</p>
    </div>
  </Layout>
);

export default TestPage;
