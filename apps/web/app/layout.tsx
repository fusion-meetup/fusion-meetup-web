import "@fusion/ui/globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import isBetween from "dayjs/plugin/isBetween";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";

dayjs.extend(advancedFormat);
dayjs.extend(isTomorrow);
dayjs.extend(isToday);
dayjs.extend(isBetween);

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Fusion Meetup",
  description: "Fusion Meetup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>{children}</body>
    </html>
  );
}
