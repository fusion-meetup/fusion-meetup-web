import Script from "next/script";
import React from "react";

interface TitoProps {
  titoLink: string | undefined | null;
}

export const Tito: React.FC<TitoProps> = ({ titoLink }) => {
  const eventId = titoLink
    ? new URL(String(titoLink)).pathname.substring(1)
    : null;
  if (!eventId) {
    return <></>;
  }
  return (
    <>
      <Script id="tito-js" src="https://js.tito.io/v2" strategy="lazyOnload" />
      <div className="rounded-xl bg-white dark:bg-slate-600 bg-opacity-50 dark:bg-opacity-50">
        <div className="text-xl md:text-2xl text-center p-2 font-bold">
          Get tickets
        </div>
        {React.createElement("tito-widget", { event: eventId })}
      </div>
    </>
  );
};
