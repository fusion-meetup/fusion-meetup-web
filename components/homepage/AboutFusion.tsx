import clsx from "clsx";

import { AboutFusionInfo } from "../../types/cms/AboutFusionInfo";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { SanityContent } from "../atoms/SanityContent";

interface AboutFusionProps {
  about: AboutFusionInfo;
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

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 items-center">
      <div className="flex flex-col gap-4">
        {!bigTitle ? <Heading level={2}>{about.title}</Heading> : null}

        {about.description ? (
          <div className="opacity-60 md:text-lg">
            <SanityContent value={about.description} />
          </div>
        ) : null}
      </div>

      <div
        className={clsx(
          "text-xl md:text-3xl leading-normal pl-3 md:pl-6 border-l-4 border-slate-300 dark:border-slate-700",
          "blue-replace-italic"
        )}
      >
        <SanityContent value={about.quote} />
      </div>
    </div>

    {showLearnMoreButton ? (
      <Button color="yellow" href="/about">
        {about.buttonText}
      </Button>
    ) : null}
  </div>
);
