import type { NextApiRequest, NextApiResponse } from "next";

import { ContactFormValues } from "../../lib/contact";
import { sendContactForm } from "../../lib/contact/discord";
import { verifyReCaptcha } from "../../lib/recaptcha/verifyReCaptcha";

interface RequestData extends ContactFormValues {
  reCaptchaToken: string;
}

type ApiContactResponse = {
  success: boolean;
  message: string;
};

const webhookSecret = process.env.DISCORD_WEBHOOK_SECRET as string | undefined;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiContactResponse>
) {
  if (req.method !== "POST") return r(res, 401, "Method not allowed");
  if (!webhookSecret) return r(res, 500, "Missing webhook secret");

  const reqBody: RequestData = req.body;

  const validReCaptcha = await verifyReCaptcha(reqBody.reCaptchaToken);
  if (!validReCaptcha) return r(res, 401, "Invalid reCaptcha token");

  try {
    const result = await sendContactForm(reqBody, webhookSecret);
    if (result) {
      return r(res, 200, "Success");
    } else {
      return r(res, 500, "Error sending message");
    }
  } catch (err) {
    return r(res, 500, "Unknown error");
  }
}

// Generate response function
const r = (
  res: NextApiResponse<ApiContactResponse>,
  statusCode: number,
  message: string
) => res.status(statusCode).json({ success: statusCode < 300, message });
