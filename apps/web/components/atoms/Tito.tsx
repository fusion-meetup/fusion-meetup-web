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
      <div className="rounded-xl bg-slate-600/50">
        <div className="p-2 text-center text-xl font-bold md:text-2xl">
          Get tickets
        </div>
        {React.createElement("tito-widget", { event: eventId })}
      </div>
    </>
  );
};
