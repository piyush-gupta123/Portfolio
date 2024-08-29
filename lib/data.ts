import React from "react";
import Prism_Connect from "@/public/Prism_Connect.jpg";
import { LuGraduationCap } from "react-icons/lu";
import chatbot from "@/public/chatbot.png";
import Travel_Diary from "@/public/Travel_Diary.png";
import Prompton from "@/public/Prompton.png";
import toursync from "@/public/toursync.png";

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const EducationData = [
  {
    title: "High School",
    institution: "Doon Public School",
    location: "Haldwani, Uttarakhand",
    percentage: "81%",
    description: "I have completed my High School (10th).",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2018",
  },
  {
    title: "Intermediate",
    institution: "Doon Public School",
    location: "Haldwani, Uttarakhand",
    percentage: "75.4%",
    description: "I have completed my Intermediate (12th).",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Bachelor Of Technology",
    institution: "Graphic Era University",
    location: "Dehradun, Uttarakhand",
    percentage: "89.6%",
    description:
      "I am a final year Computer Science student with specialization in Artificial Intelligence and Machine Learning.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "TourSync",
    description:
      "This Travel and Tourism Management System, built with Java and Swing, streamlines booking and management of travel packages and hotel reservations. Key features include secure user authentication, a user-friendly booking interface, and seamless payment gateway integration. It offers an efficient solution for planning and managing travel experiences.",
    tags: ["Java", "Swing", "SQL"],
    imageUrl: toursync,
  },
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
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Redux"],
    imageUrl: Travel_Diary,
  },
  {
    title: "Prism Connect",
    description:
      "The Prism Connect is a cutting-edge mobile application that re-imagines the way we connect and collaborate in a virtual world. This project harnesses the power of React Native to deliver a seamless and intuitive video conferencing experience.",
    tags: ["React Native", "Node.js", "Express", "Socket.io"],
    imageUrl: Prism_Connect,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "MongoDB",
  "SQL",
  "Redux",
  "Express",
  "Python",
  "Machine Learning",
  "Artificial Intelligence",
  "CyberSecurity",
  "Cloud Computing",
  "React Native",
  "Java",
] as const;
