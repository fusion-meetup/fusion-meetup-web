"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

interface EventbriteProps {
  eventbriteLink: string | undefined | null;
}

export const Eventbrite: React.FC<EventbriteProps> = ({ eventbriteLink }) => {
  const [ebScriptIsLoaded, setEbScriptIsLoaded] = useState(false);

  const eventbriteId = eventbriteLink
    ? new URL(String(eventbriteLink)).pathname.replace(/[^\d]+/gi, "")
    : null;

  const iframeContainerId = `eventbrite-widget-container-${eventbriteId}`;

  useEffect(() => {
    // Need to set and check window.ebScriptIsLoaded because Script onLoad only
    // fires once - without this, the Eventbrite widget won't load in when
    // navigating (client-side navigation) away and back to the page
    const scriptsReady = ebScriptIsLoaded || window.ebScriptIsLoaded;
    if (!scriptsReady || !eventbriteId) return;

    window.EBWidgets?.createWidget({
      widgetType: "checkout",
      eventId: eventbriteId,
      iframeContainerId,
    });
  }, [ebScriptIsLoaded, eventbriteId, iframeContainerId]);

  if (!eventbriteLink) return null;

  return (
    <>
      <div className="relative rounded-xl bg-slate-600/50">
        <div className="p-2 text-center text-xl font-bold md:text-2xl">
          Get tickets
        </div>

        <div id={iframeContainerId} className="eventbrite-container" />

        {process.env.NODE_ENV === "development" ? (
          <div className="absolute right-4 bottom-4 font-mono text-xs">
            <span className="font-bold">Development mode:</span> skipping
            Eventbrite widget script load
          </div>
        ) : (
          <Script
            id="eventbrite-js"
            src="https://www.eventbrite.co.uk/static/widgets/eb_widgets.js"
            onLoad={() => setEbScriptIsLoaded((window.ebScriptIsLoaded = true))}
            strategy="lazyOnload"
          />
        )}
      </div>
    </>
  );
};
