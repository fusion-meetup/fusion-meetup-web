import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  reqBody?: any;
  headers?: any;
};

const secret = process.env.SANITY_WEBHOOK_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    return res.status(401).json({ message: "Must be a POST request" });
  }

  if (!secret) return res.status(401).json({ message: "Missing SANITY_WEBHOOK_SECRET" });

  const webhookSecretHeader = req.headers["sanity-webhook-secret"];
  if (!webhookSecretHeader) {
    return res.status(401).json({ message: "Missing webhook secret header" });
  }

  // TODO: Use @sanity/webhook functions to verify the request
  // Tried this but couldn't get it to work, so for now just comparing a secret header as-below
  if (secret !== webhookSecretHeader) {
    res.status(401).json({ message: "Invalid signature" });
    return;
  }

  const reqBody = req.body;
  const cmsType = reqBody._type;

  try {
    switch (cmsType) {
      case "teamMember":
        await res.revalidate(`/about`);
        return res.json({ message: `Revalidated "${cmsType}"`, reqBody });
      case "event":
        await res.revalidate(`/events`);
        await res.revalidate(`/events/${reqBody.slug?.current}`);
        return res.json({ message: `Revalidated "${cmsType}"`, reqBody });
      case "blogPost":
        await res.revalidate(`/blog`);
        await res.revalidate(`/blog/post/${reqBody.slug?.current}`);
        return res.json({ message: `Revalidated "${cmsType}"`, reqBody });
      case "blogCategory":
        await res.revalidate(`/blog`);
        // TODO: Revalidate all blog posts with this category
        return res.json({ message: `Revalidated "${cmsType}"`, reqBody });
    }

    return res.json({ message: "No managed type", reqBody });
  } catch (err) {
    return res.status(500).send({ message: "Error revalidating", reqBody });
  }
}
