import clsx from "clsx";

import { Heading } from "../atoms/Heading";

interface GetInvolvedProps {}

export const GetInvolved: React.FC<GetInvolvedProps> = () => (
  <div
    className={clsx(
      "group bg-white rounded-xl box-border shadow p-10",
      "dark:bg-blue-800 dark:shadow-lg relative",
      "bg-opacity-20 dark:bg-opacity-20 border-4 border-slate-500 backdrop-blur-xl"
    )}
  >
    <div className="glassy-corners-thing"></div>

    <div className="flex flex-col gap-6">
      <Heading level={1} className="pb-6">
        Get Involved
      </Heading>

      <Heading level={4} className="pb-6">
        Discord link, speaker form, etc.
      </Heading>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        tincidunt nisl, sit amet aliquet nisl. Sed euismod tincidunt nisl, sit
        amet aliquet nisl.
      </p>
    </div>
  </div>
);
