import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "@next/font/google";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import isTomorrow from "dayjs/plugin/isTomorrow";
import isToday from "dayjs/plugin/isToday";
import isBetween from "dayjs/plugin/isBetween";

import "../styles/globals.css";

dayjs.extend(advancedFormat);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isBetween);

const inter = Inter();

const FusionMeetupWeb = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        property="og:image"
        content="https://meetup.thefusionhub.co.uk/fusion-og-image.jpg"
      />
      <meta
        name="google-site-verification"
        content="qy8sddOqx6p3UYWX9At1Gvhe-Yh9FajmFGRe73Jq7zE"
      />
    </Head>

    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  </>
);

export default FusionMeetupWeb;
