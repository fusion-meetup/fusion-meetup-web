import type { FC, ReactNode } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaMeetup } from "react-icons/fa";

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
    href: "https://www.facebook.com/fusionmeetup",
    icon: <FaFacebook />,
  },
  {
    href: "https://www.instagram.com/fusionmeetup",
    icon: <FaInstagram />,
  },
];

export const Socials: FC = () => {
  return (
    <div className="flex flex-row gap-4 text-xl">
      {socialLinks.map(({ href, icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-800 hover:text-slate-600"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};
