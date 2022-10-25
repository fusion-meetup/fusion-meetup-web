/* eslint-disable react/no-unknown-property */
import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";

export const config = { runtime: "experimental-edge" };

const fontUrl = new URL("./Inter-Bold.otf", import.meta.url);
const font = fetch(fontUrl).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await font;

  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || " ";
  const description = searchParams.get("description");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img
          src="https://meetup.thefusionhub.co.uk/fusion-og-bg.png"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            lineHeight: 2,
            whiteSpace: "pre-wrap",
          }}
        />

        <div
          tw="absolute flex flex-col justify-start p-4 pb-10"
          style={{
            top: 360,
            bottom: 30,
            left: 60,
            right: 50,
            whiteSpace: "pre-wrap",
            fontFamily: '"Inter"',
          }}
        >
          <div tw="flex flex-1" style={{ fontSize: titleSize(title.length) }}>
            {title}
          </div>

          {description ? (
            <div tw="flex opacity-60" style={{ fontSize: 38 }}>
              {description}
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}

const titleSize = (titleLength: number): number => {
  let size = 80;

  if (titleLength > 16) {
    size = 50;
  }
  if (titleLength > 72) {
    size = 40;
  }
  if (titleLength > 96) {
    size = 30;
  }

  return size;
};
