import type { NextPage } from "next";
import Image from "next/image";

import { Layout } from "../components/organisms/Layout";
import { ContactForm } from "../components/organisms/ContactForm";
import fusionContactIcon from "../public/fusion-contact-icon.png";

interface ContactPageProps {}

const ContactPage: NextPage<ContactPageProps> = () => {
  return (
    <Layout title="Contact the Fusion Team">
      <div className="max-w-[640px] xl:max-w-[800px] mx-auto p-4 pt-8">
        <Image
          src={fusionContactIcon}
          alt="Fusion Contact Icon"
          width={128}
          height={128}
        />

        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactPage;
