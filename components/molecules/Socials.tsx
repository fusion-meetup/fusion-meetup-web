import clsx from "clsx";
import type { FC, ReactNode } from "react";
import { FaFacebook, FaTwitter, FaMeetup, FaLinkedin } from "react-icons/fa";

interface SocialLinkItem {
  href: string;
  icon: ReactNode;
}

const socialLinks: SocialLinkItem[] = [
  {
    href: "https://www.meetup.com/fusion-technology-meetup-birmingham",
    icon: <FaMeetup />,
  },
  {
    href: "https://twitter.com/thefusion_hub",
    icon: <FaTwitter />,
  },
  {
    href: "https://www.linkedin.com/company/technical-team-solutions/",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.facebook.com/fusionmeetup",
    icon: <FaFacebook />,
  },
];

export const Socials: FC = () => {
  return (
    <div className="flex flex-row text-2xl">
      {socialLinks.map(({ href, icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 focus:outline-none"
        >
          <div
            className={clsx(
              "h-10 w-10 rounded-md flex items-center justify-center",
              "transition-opacity group-hover:bg-slate-300 dark:group-hover:bg-slate-700",
              "group-focus:outline outline-2 outline-slate-400 dark:outline-slate-500"
            )}
          >
            {icon}
          </div>
        </a>
      ))}
    </div>
  );
};
