import type { NextApiRequest, NextApiResponse } from "next";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

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

  if (!secret) {
    return res.status(401).json({ message: "Missing SANITY_WEBHOOK_SECRET" });
  }

  const signature = req.headers[SIGNATURE_HEADER_NAME] as string | undefined;
  const body = await readBody(req);

  if (!signature) {
    return res
      .status(401)
      .json({ message: `Missing Sanity signature header (${SIGNATURE_HEADER_NAME})` });
  }

  if (!isValidSignature(body, signature, secret)) {
    res.status(401).json({ message: "Invalid signature" });
    return;
  }

  const reqBody = JSON.parse(body);
  const cmsType = reqBody.type;

  try {
    switch (cmsType) {
      case "teamMember":
        await res.revalidate(`/about`);
        return res.json({ message: `Revalidated "${cmsType}"`, reqBody });
      case "blogPost":
        await res.revalidate(`/blog`);
        await res.revalidate(`/blog/post/${reqBody.slug}`);
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

async function readBody(readable: any) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}
