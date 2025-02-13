import axios from "axios";

import { ContactFormType, ContactFormValues, contactOptions } from ".";

const webhookUrlBase = "https://discord.com/api/webhooks/1015964225438498817";

const embedColours: { [_type in ContactFormType]: number } = {
  general: 3447003,
  talkSubmission: 15277667,
  sponsorship: 15844367,
  question: 3066993,
  feedback: 1146986,
};

const contactFormValuesToEmbed = (values: ContactFormValues) => ({
  title: "Contact Form",
  description: "New contact form submission",
  color: embedColours[values.type] || embedColours.general,
  fields: [
    { name: "Name", value: values.name },
    { name: "Email", value: values.email },
    {
      name: "Type",
      value:
        contactOptions.find((co) => co.value === values.type)?.label ||
        values.type,
    },
    { name: "Message", value: values.message },
  ],
});

export const sendContactForm = async (
  data: ContactFormValues,
  webhookSecret: string,
): Promise<boolean> => {
  const body = {
    embeds: [contactFormValuesToEmbed(data)],
  };

  const url = `${webhookUrlBase}/${webhookSecret}`;

  try {
    await axios.post(url, body);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
