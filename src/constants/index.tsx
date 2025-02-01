import {
  AiOutlineTeam,
  AiOutlineHome,
  AiOutlineInfoCircle,
} from "react-icons/ai";

export const devsData = [
  {
    name: "José Dirazar",
    role: "ForgeBytesLab DevOps, Web and Mobile Developer",
    description:
      "I am a passionate software developer dedicated to transforming client's ideas into reliable, efficient, and high-quality software.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQF1Nr-fKSeqPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712756668515?e=1743033600&v=beta&t=HnTixBFbKrhSz3Dxz8awLPb99n1ZH5MG2Y2n2229LD8",
  },
] as const;

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
