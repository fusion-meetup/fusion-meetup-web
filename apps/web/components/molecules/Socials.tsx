import type { FC, ReactNode } from "react";

import { FaGithub, FaLinkedin, FaMeetup, FaTwitter } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

interface SocialLinkItem {
  href: string;
  icon: ReactNode;
  name: string;
}

const socialLinks: SocialLinkItem[] = [
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/meetup.thefusionhub.co.uk",
    icon: <FaBluesky />,
  },
  {
    name: "GitHub",
    href: "https://github.com/fusion-meetup/fusion-meetup-web",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/technical-team-solutions/",
    icon: <FaLinkedin />,
  },
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
          <div className="flex h-10 w-10 items-center justify-center rounded-md outline-2 outline-slate-500 transition-opacity group-hover:bg-slate-700 group-focus:outline">
            {icon}
          </div>
        </a>
      ))}
    </div>
  );
};
