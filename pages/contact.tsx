import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { MdBackspace } from "react-icons/md";

import { ContactFormType, ContactFormValues, contactOptions } from "../lib/contact";
import { Layout } from "../components/organisms/Layout";
import { Heading } from "../components/atoms/Heading";
import { Input } from "../components/atoms/Input";
import { Select } from "../components/atoms/Select";
import { Button } from "../components/atoms/Button";
import { Alert } from "../components/atoms/Alert";
import { FormFieldLabel } from "../components/atoms/FormFieldLabel";
import fusionHeart from "../public/fusion-heart.png";
import fusionContactIcon from "../public/fusion-contact-icon.png";

// TODO: Recaptcha

interface ContactPageProps {}

const ContactPage: NextPage<ContactPageProps> = () => {
  const router = useRouter();

  const [submitSuccess, setSubmitSuccess] = useState<boolean | undefined>(undefined);
  const [sendingFormResult, setSendingFormResult] = useState<boolean>(false);

  const { register, handleSubmit, setValue, reset } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      type: "general",
      message: "",
    },
  });

  const contactFormSubmit = async (data: ContactFormValues) => {
    try {
      setSendingFormResult(true);
      const response = await axios.post<ApiContactResponse>("/api/contact", data);
      setSubmitSuccess(response.data.success);
    } catch (e) {
      setSubmitSuccess(false);
    } finally {
      setSendingFormResult(false);
    }
  };

  useEffect(() => {
    if (contactOptions.find((co) => co.value === router.query.t)) {
      setValue("type", router.query.t as ContactFormType);
    }
  }, [router.isReady, setValue, router.query.t]);

  return (
    <Layout title="Contact the Fusion Team">
      <div className="max-w-[640px] xl:max-w-[800px] mx-auto p-4 pt-8">
        <Image
          src={fusionContactIcon}
          alt="Fusion Contact Icon"
          width={128}
          height={128}
        />

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

        {submitSuccess !== true ? (
          <form
            onSubmit={handleSubmit(contactFormSubmit)}
            className="flex flex-col gap-6 py-4"
          >
            <div>
              <FormFieldLabel htmlFor="name">Name</FormFieldLabel>
              <Input
                {...register("name")}
                placeholder="Arthur Dent"
                disabled={sendingFormResult}
              />
            </div>

            <div>
              <FormFieldLabel htmlFor="email">Email</FormFieldLabel>
              <Input
                {...register("email")}
                type="email"
                placeholder="arthur@dent.io"
                disabled={sendingFormResult}
              />
            </div>

            <div>
              <FormFieldLabel htmlFor="type">Subject</FormFieldLabel>
              <Select
                {...register("type")}
                options={contactOptions}
                disabled={sendingFormResult}
              />
            </div>

            <div>
              <FormFieldLabel htmlFor="type">Message</FormFieldLabel>
              <Input
                multiLine
                {...register("message")}
                placeholder="Hi Fusion team!"
                disabled={sendingFormResult}
              />
            </div>

            {submitSuccess === false ? (
              <Alert type="error">
                Something went wrong – please try again, or shoot us a message on{" "}
                <a
                  href="https://twitter.com/thefusion_hub"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>{" "}
                if this seems to be broken!
              </Alert>
            ) : null}

            <div className="flex flex-row justify-end items-center gap-8">
              {sendingFormResult ? (
                <div className="opacity-50">Sending...</div>
              ) : (
                <Button typeSubmit value="Submit" color="pink" className="px-16" />
              )}
            </div>
          </form>
        ) : (
          <div className="py-4 flex flex-col gap-8">
            <Alert type="success">Contact form sent! Thanks for getting in touch</Alert>

            <Button
              color="blue"
              onClick={() => {
                reset();
                setSubmitSuccess(undefined);
              }}
            >
              <MdBackspace />
              Reset
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ContactPage;

type ApiContactResponse = {
  success: boolean;
  message: string;
};
