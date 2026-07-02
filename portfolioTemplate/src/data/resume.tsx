import { Icons } from "@/components/icons";
import {
  BriefcaseBusiness,
  Code2,
  FolderGit2,
  GraduationCap,
  Handshake,
  HomeIcon,
  MailIcon,
  UserRound,
  Wrench,
} from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Csharp } from "@/components/ui/svgs/csharp";

const work: {
  company: string;
  href: string;
  badges: readonly string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
}[] = [
  {
    company: "Reputes Business Solutions",
    href: "",
    badges: ["Remote"],
    location: "Bangalore, India",
    title: "Web Development Intern",
    logoUrl: "/reputes.svg",
    start: "June 2025",
    end: "September 2025",
    description:
      "Architected and deployed a Shopify extension that integrates a map with store locations. Used the Remix framework for the frontend and GraphQL to store user store data. Led a team of 5 and published the extension to the Shopify Marketplace.",
  },
  {
    company: "Shaithilyog",
    href: "",
    badges: ["Remote"],
    location: "NYC, USA",
    title: "SDE Intern",
    logoUrl: "/shaithilyog.svg",
    start: "March 2025",
    end: "June 2025",
    description:
      "Developed and trained deep Convolutional Neural Networks (CNNs) for multiclass classification across more than 100 classes, achieving more than 90% accuracy. Performed large-scale data refinement, preprocessing, and exploratory analysis to improve dataset quality and model robustness. Collaborated with the backend team to integrate trained machine learning models into production systems for real-time inference.",
  },
  {
    company: "NexusKraft",
    href: "",
    badges: ["Remote"],
    location: "Bangalore, India",
    title: "Full Stack Development Intern",
    logoUrl: "/nexuskraft.svg",
    start: "August 2024",
    end: "February 2025",
    description:
      "Built and enhanced user-facing features with React, reusable components, and responsive performance optimizations. Developed RESTful APIs with Node.js and Express, integrating databases and third-party services to support dynamic data flow between frontend and backend. Collaborated in Agile sprints with developers and designers through code reviews, daily standups, and Git-based version control.",
  },
];

const hackathons: {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  mlh?: string;
  win?: string;
  links: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[];
}[] = [];

export const DATA = {
  name: "Vaibhav Saini",
  initials: "VS",
  url: "https://vbsaini.github.io",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/New+Delhi,+India",
  description:
    "AI and Data Science student from New Delhi, India, focused on full-stack development, machine learning, web development and in love with game development.",
  summary:
    "I am pursuing a B.Tech in Artificial Intelligence and Data Science while building full-stack products, browser tools, Shopify extensions, and machine learning systems. I started coding during quarantine after a friend introduced me to web development, and since then I have worked across React, Next.js, Node.js, Python, C++, C#, Unity, databases, and production-oriented projects.",
  avatarUrl: "/PFP.jpeg",
  skills: [
    { name: "C++", icon: Csharp },
    { name: "C#", icon: Csharp },
    { name: "HTML", icon: Code2 },
    { name: "CSS", icon: Code2 },
    { name: "JavaScript", icon: Code2 },
    { name: "React", icon: ReactLight },
    { name: "React Native", icon: ReactLight },
    { name: "Next.js", icon: Code2 },
    { name: "Node.js", icon: Nodejs },
    { name: "Express", icon: Nodejs },
    { name: "MongoDB", icon: Code2 },
    { name: "SQL", icon: Code2 },
    { name: "Firebase", icon: Code2 },
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Code2 },
    { name: "Java", icon: Code2 },
    { name: "Bootstrap", icon: Code2 },
    { name: "Material UI", icon: Code2 },
    { name: "Tailwind CSS", icon: Code2 },
    { name: "Mongoose", icon: Code2 },
    { name: "GraphQL", icon: Code2 },
    { name: "Remix", icon: Code2 },
    { name: "Shopify", icon: Code2 },
    { name: "Game Development", icon: Code2 },
    { name: "Software Development", icon: Code2 },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#about", icon: UserRound, label: "About" },
    { href: "/#work", icon: BriefcaseBusiness, label: "Work" },
    { href: "/#education", icon: GraduationCap, label: "Education" },
    { href: "/#skills", icon: Wrench, label: "Skills" },
    { href: "/#projects", icon: FolderGit2, label: "Projects" },
    { href: "/#freelance", icon: Handshake, label: "Freelance" },
    { href: "/#contact", icon: MailIcon, label: "Contact" },
  ],
  contact: {
    email: "vbsaini2004@gmail.com",
    tel: "+91-8287680978",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/VBsaini",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vbsaini2004@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work,
  education: [
    {
      school: "Vivekananda Institute of Professional Studies, Delhi",
      href: "https://vips.edu/",
      degree: "B.Tech in Artificial Intelligence and Data Science",
      logoUrl: "/vips.svg",
      start: "2023",
      end: "2027",
    },
    {
      school: "The Cambridge International School, Khanpur, Delhi",
      href: "https://cambridgeedu.in/",
      degree: "Senior Secondary (CBSE)",
      logoUrl: "/cambridge-international-school.png",
      start: "2023",
      end: "2023",
    },
    {
      school: "The Cambridge International School, Khanpur, Delhi",
      href: "https://cambridgeedu.in/",
      degree: "Secondary Education (CBSE)",
      logoUrl: "/cambridge-international-school.png",
      start: "2021",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Sorted",
      href: "https://sorted-delta.vercel.app/",
      dates: "Next.js with Firebase | 2026",
      active: true,
      description:
        "A SaaS product that helps users manage browser tabs through a simple card-based system. Includes a browser extension for communication between the website and active tabs, a freemium model with 5 free cards, and payment infrastructure using the Dodo Payments API.",
      technologies: ["Next.js", "Firebase", "Browser Extension", "SaaS"],
      links: [
        {
          type: "Live",
          href: "https://sorted-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sorted.jpeg",
      video: "",
    },
    {
      title: "MedCard",
      href: "",
      dates: "MERN Stack | 2025",
      active: true,
      description:
        "An IoT-based solution that integrates medical reports from multiple sources into a universal system. Built an RFID card flow that surfaces a user's medical history and conditions, created a responsive React UI, and used MongoDB to store multiple data types including files.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "IoT"],
      links: [
        {
          type: "Demo",
          href: "https://drive.google.com/file/d/1DbLjaE2uH8fKgkZU8dmPp4DTsnxER_B5/view?usp=sharing",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "/medcard.svg",
      video: "",
    },
    {
      title: "Space Shooter",
      href: "https://vbsaini.github.io/Space_shooter",
      dates: "Unity Game",
      active: true,
      description: "A 2D space shooter game made with Unity and C#.",
      technologies: ["Unity", "C#", "Game Development"],
      links: [
        {
          type: "Live",
          href: "https://vbsaini.github.io/Space_shooter",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vbsaini/Space_shooter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/space-shooter.png",
      video: "",
    },
    {
      title: "Smart Brain",
      href: "https://github.com/vbsaini/smart-brain",
      dates: "React App",
      active: true,
      description: "A React.js web app project.",
      technologies: ["React", "JavaScript", "Web Development"],
      links: [
        {
          type: "Source",
          href: "https://github.com/vbsaini/smart-brain",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/smart-brain.png",
      video: "",
    },
    {
      title: "Windows CLR Form",
      href: "https://github.com/vbsaini/loginPage",
      dates: "C++ Desktop UI",
      active: true,
      description: "A Windows CLR form made with C++.",
      technologies: ["C++", "Windows Forms", "Software Development"],
      links: [
        {
          type: "Source",
          href: "https://github.com/vbsaini/loginPage",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/windows-clr-form.png",
      video: "",
    },
    {
      title: "YelpCamp",
      href: "https://github.com/vbsaini/yelpcamp",
      dates: "Node.js App",
      active: true,
      description: "A campground web application made with Node.js.",
      technologies: ["Node.js", "MongoDB", "Bootstrap", "Web Development"],
      links: [
        {
          type: "Source",
          href: "https://github.com/vbsaini/yelpcamp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yelpcamp.png",
      video: "",
    },
  ],
  freelance: [
    {
      title: "Bunkerz Inks",
      href: "https://musing-wiles-4f5a83.netlify.app/",
      dates: "React Freelance Project",
      active: true,
      description:
        "A freelance portfolio website built with React for a tattoo company.",
      technologies: ["React", "Portfolio Website", "Freelance"],
      links: [
        {
          type: "Live",
          href: "https://musing-wiles-4f5a83.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/BunkerInks.jpeg",
      video: "",
    },
    {
      title: "Uprising Agency",
      href: "https://frolicking-crisp-b94ec4.netlify.app/",
      dates: "React Freelance Project",
      active: true,
      description:
        "A multi-page company profile website developed using React.",
      technologies: ["React", "Company Profile", "Freelance"],
      links: [
        {
          type: "Live",
          href: "https://frolicking-crisp-b94ec4.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Uprising.jpeg",
      video: "",
    },
    {
      title: "FullMoon Cottage Kanatal",
      href: "https://optimistic-leakey-13610f.netlify.app/",
      dates: "React Freelance Project",
      active: true,
      description:
        "A React-based freelance landing page for a vacation cottage rental.",
      technologies: ["React", "Landing Page", "Freelance"],
      links: [
        {
          type: "Live",
          href: "https://optimistic-leakey-13610f.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/FMCK.jpeg",
      video: "",
    },
  ],
  hackathons,
} as const;
