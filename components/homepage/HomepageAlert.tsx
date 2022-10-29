import { HomepageContent } from "../../types/cms/HomepageContent";
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
      <div className="p-6 border-4 border-yellow-500 dark:border-opacity-80 bg-white dark:bg-blue-700 backdrop-blur-md bg-opacity-40 dark:bg-opacity-20 rounded-xl shadow-xl">
        <SanityContent value={homepageContent.alertContent} />
      </div>
    </div>
  );
};
