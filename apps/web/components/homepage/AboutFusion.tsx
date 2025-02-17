import { GetAboutFusionInfoQueryResult } from "@fusion/sanity/types";

import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { SanityContent } from "../atoms/SanityContent";

interface AboutFusionProps {
  about: Exclude<GetAboutFusionInfoQueryResult, null>;
  showLearnMoreButton?: boolean;
  bigTitle?: boolean;
}

export const AboutFusion: React.FC<AboutFusionProps> = ({
  about,
  showLearnMoreButton,
  bigTitle,
}) => (
  <div className="flex flex-col gap-6">
    {bigTitle ? (
      <Heading level={1} className="py-6">
        {about.title}
      </Heading>
    ) : null}

    <div className="grid grid-cols-1 items-center gap-x-10 gap-y-4 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        {!bigTitle ? <Heading level={2}>{about.title}</Heading> : null}

        {about.description ? (
          <div className="opacity-60 md:text-lg">
            <SanityContent content={about.description} />
          </div>
        ) : null}
      </div>

      <div className="blue-replace-italic border-l-4 border-slate-700 pl-3 text-xl leading-normal md:pl-6 md:text-3xl">
        <SanityContent content={about.quote} />
      </div>
    </div>

    {showLearnMoreButton ? (
      <Button color="yellow" href="/about">
        {about.buttonText}
      </Button>
    ) : null}
  </div>
);
