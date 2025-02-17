import { Layout } from "@/components/organisms/Layout";

const NotFoundPage = () => (
  <Layout title="404">
    <div className="container mx-auto p-4">
      <div className="py-24">
        <h1 className="py-4 text-center text-9xl font-bold">
          <span className="text-blue">4</span>
          <span className="text-pink">0</span>
          <span className="text-yellow">4</span>
        </h1>
        <p className="text-center text-xl">Oops! Page not found</p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
