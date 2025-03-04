import {
  AiOutlineTeam,
  AiOutlineHome,
  AiOutlineInfoCircle,
} from "react-icons/ai";
export type DevCardProps = {
  name: string;
  role: string;
  description: string;
  avatar: string;
  href: string;
};

export const devsData = [
  {
    name: "José Dirazar",
    role: "ForgeBytesLab DevOps, Web and Mobile Developer",
    description:
      "I am a passionate software developer dedicated to transforming client's ideas into reliable, efficient, and high-quality software.",
    avatar: "photo.jpeg",
    href: "https://jose-dirazar.forgebyteslab.com",
  },
] satisfies DevCardProps[];

export const navbarLinks = [
  {
    name: "Home",
    href: "#home",
    icon: AiOutlineHome,
  },
  {
    name: "Team",
    href: "#team",
    icon: AiOutlineTeam,
  },
  {
    name: "About",
    href: "#about",
    icon: AiOutlineInfoCircle,
  },
] as const;
