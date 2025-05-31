import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandCss3,
  IconBrandGithub,
  IconBrandDiscord,
  IconBrandBlender,
  IconBrandGit,
  IconBrandVercel,
  IconBrandNodejs,
  IconBrandFigma,
  IconBrandVscode
} from '@tabler/icons-react';
import type { IconProps } from '@tabler/icons-react';

export type BadgeKey =
  | "html"
  | "js"
  | "css"
  | "tailwind"
  | "react"
  | "next"
  | "node"
  | "github"
  | "discord"
  | "blender"
  | "vercel"
  | "vscode"
  | "figma"
  | "git";


const badgeMap: Record<BadgeKey, { icon: React.ComponentType<IconProps>; text: string }> = {
  html: { icon: IconBrandHtml5, text: "HTML" },
  js: { icon: IconBrandJavascript, text: "JavaScript" },
  css: { icon: IconBrandCss3, text: "CSS" },
  tailwind: { icon: IconBrandTailwind, text: "Tailwind" },
  react: { icon: IconBrandReact, text: "React" },
  next: { icon: IconBrandNextjs, text: "Next.js" },
  node: { icon: IconBrandNodejs, text: "Node.js" },
  github: { icon: IconBrandGithub, text: "Github" },
  discord: { icon: IconBrandDiscord, text: "Discord" },
  blender: { icon: IconBrandBlender, text: "Blender" },
  vercel: { icon: IconBrandVercel, text: "Vercel" },
  vscode: { icon: IconBrandVscode, text: "VS Code" },
  figma: { icon: IconBrandFigma, text: "Figma" },
  git: { icon: IconBrandGit, text: "Git" }
};

interface BadgeProps {
  badge: BadgeKey;
  link?: string;
}

export default function Badge({ badge, link }: BadgeProps) {
  const badgeData = badgeMap[badge];
  const Icon = badgeData.icon;
  const text = badgeData.text || badge;

  const content = (
    <>
      {Icon && <Icon className="h-[15px] w-[15px]" />} {text}
    </>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="badge badge-neutral badge-outline m-1 rounded-full cursor-pointer hover:invert bg-white dark:invert dark:hover:invert-0"
    >
      {content}
    </a>
  ) : (
    <div className="badge badge-neutral badge-outline m-1 rounded-full dark:invert">
      {content}
    </div>
  );
}