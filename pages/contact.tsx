import type { NextPage } from "next";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";

import { ContactFormValues, contactOptions } from "../lib/contact";
import { Layout } from "../components/organisms/Layout";
import { Heading } from "../components/atoms/Heading";
import { Input } from "../components/atoms/Input";
import { Select } from "../components/atoms/Select";
import { Button } from "../components/atoms/Button";
import fusionHeart from "../public/fusion-heart.png";

// TODO: Recaptcha

interface ContactPageProps {}

const ContactPage: NextPage<ContactPageProps> = () => {
  const { register, handleSubmit } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      type: "general",
      message: "",
    },
  });

  const contactFormSubmit = async (data: ContactFormValues) => {
    // TODO: Error handling and success state
    await axios.post("/api/contact", data);
  };

  return (
    <Layout>
      <div className="max-w-[640px] xl:max-w-[800px] mx-auto p-4 pt-10">
        <Heading level={2}>Contact the Fusion Team</Heading>

        <div className="flex flex-row flex-wrap items-center gap-1 py-4">
          <p>This contact form goes directly to the Fusion team</p>
          <p>We aim to reply via email as soon as possible</p>
          <Image
            alt="Fusion heart"
            src={fusionHeart}
            layout="fixed"
            width={20}
            height={20}
            className="inline-block"
          />
        </div>

        <form
          onSubmit={handleSubmit(contactFormSubmit)}
          className="flex flex-col gap-8 py-6"
        >
          <Input {...register("name")} placeholder="Arthur Dent" />

          <Input {...register("email")} type="email" placeholder="arthur@dent.io" />

          <Select {...register("type")} options={contactOptions} />

          <Input multiLine {...register("message")} placeholder="Message" />

          <div className="flex flex-row justify-end">
            <Button typeSubmit value="Submit" color="pink" className="px-16" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
