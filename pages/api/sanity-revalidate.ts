import { isValidRequest } from "@sanity/webhook";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const secret = process.env.SANITY_WEBHOOK_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    return res.status(401).json({ message: "Must be a POST request" });
  }

  if (!secret) {
    return res.status(401).json({ message: "Missing SANITY_WEBHOOK_SECRET" });
  }

  if (!isValidRequest(req, secret)) {
    return res.status(401).json({ message: "Invalid signature" });
  }

  console.log("req.body :", req.body);

  const cmsType = req.body.type;

  try {
    switch (cmsType) {
      case "teamMember":
        await res.revalidate(`/about`);
        return res.json({ message: `Revalidated "${cmsType}"` });
      case "blogPost":
        await res.revalidate(`/blog`);
        await res.revalidate(`/blog/post/${req.body.slug}`);
        return res.json({ message: `Revalidated "${cmsType}"` });
      case "blogCategory":
        await res.revalidate(`/blog`);
        // TODO: Revalidate all blog posts with this category
        return res.json({ message: `Revalidated "${cmsType}"` });
    }

    return res.json({ message: "No managed type" });
  } catch (err) {
    return res.status(500).send({ message: "Error revalidating" });
  }
}
