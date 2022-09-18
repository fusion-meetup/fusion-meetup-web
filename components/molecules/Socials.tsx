import clsx from "clsx";
import type { FC, ReactNode } from "react";
import { FaFacebook, FaTwitter, FaMeetup, FaLinkedin } from "react-icons/fa";

interface SocialLinkItem {
  href: string;
  icon: ReactNode;
  name: string;
}

const socialLinks: SocialLinkItem[] = [
  {
    name: "Meetup",
    href: "https://www.meetup.com/fusion-technology-meetup-birmingham",
    icon: <FaMeetup />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/thefusion_hub",
    icon: <FaTwitter />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/technical-team-solutions/",
    icon: <FaLinkedin />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/fusionmeetup",
    icon: <FaFacebook />,
  },
];

export const Socials: FC = () => {
  return (
    <div className="flex flex-row text-2xl">
      {socialLinks.map(({ href, icon, name }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 focus:outline-none"
          aria-label={name}
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
