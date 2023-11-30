import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chatbot from "@/public/chatbot.png";
import Travel_Diary from "@/public/Travel_Diary.png";
import Prompton from "@/public/Prompton.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const Education = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ByteBot",
    description:
      "Developed a Chatbot using python to provide you with a seamless and engaging conversation experience. This ChatBot is trained using PyTorch, a powerful deep learning framework, to understand and respond to user input in a human-like manner.",
    tags: ["NLTK", "Pytorch", "Flask", "HTML", "CSS", "Javascript"],
    imageUrl: chatbot,
  },
  {
    title: "Prompton",
    description:
      "Prompton is a cutting-edge application built on top of Next.js, leveraging the power of server-side rendering (SSR) and React.js along with a powerful database,i.e, MongoDB. It can basically provide user the ability to create, update, delete short prompts for future use which are mainly asked to ChatGPT.",
    tags: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
    imageUrl: Prompton,
  },
  {
    title: "Travel Diary",
    description:
      "The Travel Blog Project, built using ReactJS and NodeJS, is a dynamic and engaging platform that takes you on a digital journey to explore the world’s wonders. This project seamlessly combines the power of Front-end with the versatility of Back-end and Database to create an immersive travel experience.",
    tags: ["React", "Nodejs", "MongoDB", "Tailwind CSS", "Redux"],
    imageUrl: Travel_Diary,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
