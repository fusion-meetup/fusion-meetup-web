import clsx from "clsx";

import { AboutFusionInfo } from "../../types/cms/AboutFusionInfo";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { SanityContent } from "../atoms/SanityContent";

interface SponsorFusionProps {
  about: AboutFusionInfo;
}

export const SponsorFusion: React.FC<SponsorFusionProps> = ({ about }) => (
  <div className="flex flex-col gap-6">
    <Heading level={2} className="py-4 pb-8">
      Supporting Fusion
    </Heading>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 items-center">
      <SanityContent value={about.sponsor} />
    </div>

    <Button color="yellow" href="/Friends-of-Fusion-2024-v3.pdf">
      Read our Sponsorship Packages
    </Button>
  </div>
);
