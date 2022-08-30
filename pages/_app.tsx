import type { AppProps } from "next/app";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import "../styles/globals.css";

dayjs.extend(advancedFormat);

const FusionMeetupWeb = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default FusionMeetupWeb;
