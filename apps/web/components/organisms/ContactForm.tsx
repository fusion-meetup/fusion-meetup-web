"use client";

import Image from "next/legacy/image";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import { MdBackspace } from "react-icons/md";

import {
  ContactFormType,
  ContactFormValues,
  contactOptions,
} from "../../lib/contact";
import fusionHeart from "../../public/fusion-heart.png";
import { Alert } from "../atoms/Alert";
import { Button } from "../atoms/Button";
import { CharCount } from "../atoms/CharCount";
import { FormFieldLabel } from "../atoms/FormFieldLabel";
import { Heading } from "../atoms/Heading";
import { Input } from "../atoms/Input";
import { Select } from "../atoms/Select";

const MAX_MESSAGE_LENGTH = 1000;

export const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();
  const prefillType = searchParams?.get("t") ?? null;

  const [submitSuccess, setSubmitSuccess] = useState<boolean | undefined>();
  const [sendingFormResult, setSendingFormResult] = useState<boolean>(false);
  const [showMessageTooLongError, setShowMessageTooLongError] =
    useState<boolean>(false);

  const { register, handleSubmit, setValue, reset, watch } =
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
    if (data.message.length > MAX_MESSAGE_LENGTH) {
      setShowMessageTooLongError(true);
      return;
    }
    setShowMessageTooLongError(false);

    try {
      setSendingFormResult(true);

      const response = await axios.post<ApiContactResponse>(
        "/api/contact",
        data,
      );
      setSubmitSuccess(response.data.success);
    } catch (e) {
      console.error(e);
      setSubmitSuccess(false);
    } finally {
      setSendingFormResult(false);
    }
  }, []);

  // Set contact type using URL query if set
  useEffect(() => {
    if (prefillType && contactOptions.find((co) => co.value === prefillType)) {
      setValue("type", prefillType as ContactFormType);
    }
  }, [prefillType, setValue]);

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

          <div className="relative">
            <FormFieldLabel htmlFor="type">Message</FormFieldLabel>
            <Input
              multiLine
              {...register("message", { required: true })}
              placeholder="Hi Fusion team!"
              disabled={sendingFormResult}
            />

            <div className="absolute right-4 bottom-4">
              <CharCount value={watch("message")} max={MAX_MESSAGE_LENGTH} />
            </div>
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

          {showMessageTooLongError ? (
            <Alert type="error">
              Your message is too long – please shorten it to{" "}
              {MAX_MESSAGE_LENGTH} characters or less
            </Alert>
          ) : null}

          <div className="flex flex-row items-center justify-end gap-8">
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
        <div className="flex flex-col gap-8 py-4">
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
