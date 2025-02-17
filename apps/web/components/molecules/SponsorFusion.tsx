import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";

interface SponsorFusionProps {}

export const SponsorFusion: React.FC<SponsorFusionProps> = () => (
  <div className="flex flex-col gap-6">
    <Heading level={2} className="py-4 pb-8">
      Supporting Fusion
    </Heading>

    <Button color="yellow" href="/Friends-of-Fusion-2024-v4.pdf">
      Read our Sponsorship Packages
    </Button>
  </div>
);
