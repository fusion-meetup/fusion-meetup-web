import type { NextApiRequest, NextApiResponse } from "next";

import { ContactFormValues } from "../../lib/contact";
import { sendContactForm } from "../../lib/contact/discord";

type RequestData = ContactFormValues;

type ApiContactResponse = {
  success: boolean;
  message: string;
};

const webhookSecret = process.env.DISCORD_WEBHOOK_SECRET as string | undefined;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiContactResponse>
) {
  if (req.method !== "POST") {
    return res
      .status(401)
      .json({ success: false, message: "Method not allowed" });
  }

  if (!webhookSecret) {
    return res
      .status(500)
      .json({ success: false, message: "Missing webhook secret" });
  }

  const reqBody: RequestData = req.body;

  try {
    const result = await sendContactForm(reqBody, webhookSecret);
    if (result) {
      return res.status(200).json({ success: true, message: "Success" });
    } else {
      return res
        .status(500)
        .json({ success: false, message: "Error sending message" });
    }
  } catch (err) {
    return res.status(500).send({ success: false, message: "Unknown error" });
  }
}
