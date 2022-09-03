import type { NextPage } from "next";

import { Layout } from "../components/organisms/Layout";

const NotFoundPage: NextPage = () => (
  <Layout>
    <div className="container mx-auto p-4">
      <div className="py-24">
        <h1 className="text-9xl font-bold text-center py-4">
          <span className="text-blue">4</span>
          <span className="text-pink">0</span>
          <span className="text-yellow">4</span>
        </h1>

        <p className="text-xl text-center">Oops! Page not found</p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
