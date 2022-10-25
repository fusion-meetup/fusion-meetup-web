import { useCallback, useEffect, useState } from "react";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { MdBackspace } from "react-icons/md";

import {
  ContactFormType,
  ContactFormValues,
  contactOptions,
} from "../../lib/contact";
import { Heading } from "../atoms/Heading";
import { Input } from "../atoms/Input";
import { Select } from "../atoms/Select";
import { Button } from "../atoms/Button";
import { Alert } from "../atoms/Alert";
import { FormFieldLabel } from "../atoms/FormFieldLabel";
import fusionHeart from "../../public/fusion-heart.png";

export const ContactForm: React.FC = () => {
  const router = useRouter();

  const [submitSuccess, setSubmitSuccess] = useState<boolean | undefined>();
  const [sendingFormResult, setSendingFormResult] = useState<boolean>(false);

  const { register, handleSubmit, setValue, reset } =
    useForm<ContactFormValues>({
      defaultValues: {
        name: "",
        email: "",
        type: "general",
        message: "",
        query: "",
      },
    });

  const contactFormSubmit = useCallback(async (data: ContactFormValues) => {
    try {
      setSendingFormResult(true);

      const response = await axios.post<ApiContactResponse>(
        "/api/contact",
        data
      );
      setSubmitSuccess(response.data.success);
    } catch (e) {
      setSubmitSuccess(false);
    } finally {
      setSendingFormResult(false);
    }
  }, []);

  // Set contact type using URL query if set
  useEffect(() => {
    if (contactOptions.find((co) => co.value === router.query.t)) {
      setValue("type", router.query.t as ContactFormType);
    }
  }, [router.isReady, setValue, router.query.t]);

  return (
    <>
      <Heading level={2}>Contact the Fusion Team</Heading>

      <div className="flex flex-row flex-wrap items-center gap-1 py-4">
        <p className="w-full">
          This contact form goes directly to the Fusion team
        </p>
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
              {...register("name", { required: true })}
              placeholder="Arthur Dent"
              disabled={sendingFormResult}
            />
          </div>

          {/* Bot field */}
          <div className="hidden">
            <FormFieldLabel htmlFor="query">Query</FormFieldLabel>
            <Input
              {...register("query")}
              placeholder="Tell us more"
              disabled={sendingFormResult}
            />
          </div>

          <div>
            <FormFieldLabel htmlFor="email">Email</FormFieldLabel>
            <Input
              {...register("email", { required: true })}
              type="email"
              placeholder="arthur@dent.io"
              disabled={sendingFormResult}
            />
          </div>

          <div>
            <FormFieldLabel htmlFor="type">Subject</FormFieldLabel>
            <Select
              {...register("type", { required: true })}
              options={contactOptions}
              disabled={sendingFormResult}
            />
          </div>

          <div>
            <FormFieldLabel htmlFor="type">Message</FormFieldLabel>
            <Input
              multiLine
              {...register("message", { required: true })}
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
              <Button
                typeSubmit
                value="Submit"
                color="pink"
                className="px-16"
              />
            )}
          </div>
        </form>
      ) : (
        <div className="py-4 flex flex-col gap-8">
          <Alert type="success">
            Contact form sent! Thanks for getting in touch
          </Alert>

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
    </>
  );
};

type ApiContactResponse = {
  success: boolean;
  message: string;
};
