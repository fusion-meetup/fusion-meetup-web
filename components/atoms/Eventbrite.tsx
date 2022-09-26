import Script from "next/script";

interface EventbriteProps {
  eventbriteLink: string | undefined | null;
}

const Eventbrite: React.FC<EventbriteProps> = ({ eventbriteLink }) => {
  if (!eventbriteLink) return null;
  const eventbriteId = new URL(String(eventbriteLink)).pathname.replace(
    /[^0-9]+/gi,
    ""
  );
  const iframeContainerId = `eventbrite-widget-container-${eventbriteId}`;
  return (
    <>
      <div id={iframeContainerId}></div>
      <Script
        id="eventbrite-js"
        src="https://www.eventbrite.co.uk/static/widgets/eb_widgets.js"
        onLoad={() => {
          window.EBWidgets.createWidget({
            widgetType: "checkout",
            eventId: eventbriteId,
            iframeContainerId,
          });
        }}
      />
    </>
  );
};

export default Eventbrite;
