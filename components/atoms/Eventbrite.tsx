import { useEffect, useState } from "react";
import Script from "next/script";

interface EventbriteProps {
  eventbriteLink: string | undefined | null;
}

const Eventbrite: React.FC<EventbriteProps> = ({ eventbriteLink }) => {
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
      <div className="rounded-xl bg-white dark:bg-slate-600 bg-opacity-50 dark:bg-opacity-50">
        <div className="text-xl md:text-2xl text-center p-2 font-bold">
          Get tickets
        </div>

        <div id={iframeContainerId} className="eventbrite-container" />
      </div>

      <Script
        id="eventbrite-js"
        src="https://www.eventbrite.co.uk/static/widgets/eb_widgets.js"
        onLoad={() => setEbScriptIsLoaded((window.ebScriptIsLoaded = true))}
        strategy="lazyOnload"
      />
    </>
  );
};

export default Eventbrite;
