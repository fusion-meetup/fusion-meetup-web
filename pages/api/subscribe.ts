import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_KEY?.split("-")[1],
});

const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  } else if (!MAILCHIMP_AUDIENCE_ID) {
    return res.status(500).json({ error: "Mailchimp audience ID not set" });
  }

  const parse = z.object({ email: z.string().email() }).safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error });

  const { email } = parse.data;

  try {
    await mailchimp.lists.addListMember(MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log("error", error);

    return res
      .status(500)
      .json({ success: false, error: "Failed to subscribe to mailing list" });
  }
};

export default handler;
