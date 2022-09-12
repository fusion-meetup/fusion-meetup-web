import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";

// Replace content object with content from Sanity
const content = {
  title: "About Fusion Meetup",
  description: (
    <>
      Fusion is a meetup for the Tech-passionate, with a focus on engaging, thought
      provoking talks in an informal and sociable space. We hold them in the
      well-connected city centre of Birmingham and since 2015 our events have proudly
      showcased local talent alongside industry specialists from further afield, all
      sharing knowledge and innovation with our Fusion family.
    </>
  ),
  quote: (
    <>
      Our focus is to bring the local Tech community together over insightful talks, good
      food, and conversation; a networking event{" "}
      <span className="text-blue-700 dark:text-blue">with a difference</span>
    </>
  ),
  buttonText: "Learn More",
};

export const AboutFusion = () => (
  <div className="flex flex-col gap-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 items-center">
      <div className="flex flex-col gap-4">
        <Heading level={2}>{content.title}</Heading>

        <p className="opacity-60 md:text-lg">{content.description}</p>
      </div>

      <p className="text-xl md:text-3xl leading-normal pl-3 md:pl-6 border-l-4 border-slate-300 dark:border-slate-700">
        {content.quote}
      </p>
    </div>

    <Button color="yellow" href="/about">
      {content.buttonText}
    </Button>
  </div>
);
