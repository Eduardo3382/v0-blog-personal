import type { ComponentType } from "react";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { MastodonIcon, NotionIcon } from "@/components/icons";

export type SocialLinkId =
  | "email"
  | "linkedin"
  | "github"
  | "twitter"
  | "mastodon"
  | "notion"
  | "instagram";

export type SocialLink = {
  id: SocialLinkId;
  name: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  username: string;
};

export const allSocialLinks: SocialLink[] = [
  {
    id: "email",
    name: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    username: siteConfig.email,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    username: siteConfig.links.linkedin.split("/in/")[1] || "LinkedIn",
  },
  {
    id: "github",
    name: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
    username: siteConfig.links.github.split(".com/")[1] || "GitHub",
  },
  {
    id: "twitter",
    name: "Twitter / X",
    href: siteConfig.links.twitter,
    icon: Twitter,
    username: "@ehdela",
  },
  {
    id: "mastodon",
    name: "Mastodon",
    href: siteConfig.links.mastodon,
    icon: MastodonIcon,
    username: "@Eduardomastodon@mastodon.social",
  },
  {
    id: "notion",
    name: "Notion",
    href: siteConfig.links.notion,
    icon: NotionIcon,
    username: "Pastillitas de tecnología",
  },
  {
    id: "instagram",
    name: "Instagram",
    href: siteConfig.links.instagram,
    icon: Instagram,
    username: "@edu_byte",
  },
];

export function getSocialLinks(ids?: SocialLinkId[]): SocialLink[] {
  if (!ids) return allSocialLinks;
  const set = new Set(ids);
  return allSocialLinks.filter((link) => set.has(link.id));
}

