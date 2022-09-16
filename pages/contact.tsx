import type { NextPage } from "next";

import { Layout } from "../components/organisms/Layout";
import { ReCaptchaProvider } from "../components/providers/ReCaptchaProvider";
import { ContactForm } from "../components/organisms/ContactForm";

interface ContactPageProps {}

const ContactPage: NextPage<ContactPageProps> = () => {
  return (
    <ReCaptchaProvider>
      <Layout title="Contact the Fusion Team">
        <ContactForm />
      </Layout>
    </ReCaptchaProvider>
  );
};

export default ContactPage;
