import type { AppProps } from "next/app";
import Head from "next/head";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import "../styles/globals.css";

dayjs.extend(advancedFormat);

const FusionMeetupWeb = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Component {...pageProps} />
  </>
);

export default FusionMeetupWeb;
