import Image from "next/image";
import { Suspense } from "react";

import { ContactForm } from "@/components/organisms/ContactForm";
import { Layout } from "@/components/organisms/Layout";
import fusionContactIcon from "@/public/fusion-contact-icon.png";

const ContactPage = () => {
  return (
    <Layout title="Contact the Fusion Team">
      <div className="mx-auto max-w-[640px] p-4 pt-8 xl:max-w-[800px]">
        <Image
          src={fusionContactIcon}
          alt="Fusion Contact Icon"
          width={128}
          height={128}
        />

        <Suspense fallback="Loading...">
          <ContactForm />
        </Suspense>
      </div>
    </Layout>
  );
};

export default ContactPage;
