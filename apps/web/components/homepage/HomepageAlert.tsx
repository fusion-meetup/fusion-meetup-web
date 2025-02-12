import { HomepageContent } from "@fusion/sanity/types";

import { SanityContent } from "../atoms/SanityContent";

interface HomepageAlertProps {
  homepageContent: HomepageContent;
}

export const HomepageAlert: React.FC<HomepageAlertProps> = ({
  homepageContent,
}) => {
  if (!homepageContent.showAlert) return null;

  return (
    <div className="pt-6">
      <div className="rounded-xl border-4 border-yellow-500/80 bg-blue-700/20 p-6 shadow-xl backdrop-blur-md">
        <SanityContent content={homepageContent.alertContent} />
      </div>
    </div>
  );
};
