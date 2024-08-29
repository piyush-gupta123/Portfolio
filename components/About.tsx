"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-5 text-xl">
        Welcome to my portfolio! I am a recent graduate of{" "}
        <span className="font-bold">
          Bachelor's degree in Computer Science with specialization in Machine
          Learning and Artificial Intelligence in 2024
        </span>
        . Throughout my academic journey, I have developed a strong foundation
        in the principles and applications of cutting-edge technologies that
        drive innovation in the digital landscape. My primary focus lies in the
        realm of{" "}
        <span className="font-bold">
          machine learning and artificial intelligence
        </span>
        , where I have honed my skills in developing intelligent systems that
        can learn and adapt. My coursework has equipped me with a deep
        understanding of{" "}
        <span className="font-bold">
          algorithms, data structures, and statistical models
        </span>
        , enabling me to tackle complex problems and create innovative
        solutions.
      </p>
      <p className="mb-5 text-xl">
        I also have hands-on experience with the{" "}
        <span className="font-bold">
          MERN (MongoDB, Express.js, React, Node.js) stack
        </span>
        , showcasing my proficiency in{" "}
        <span className="font-bold">Full-stack development</span>. This allows
        me to seamlessly bridge the gap between front-end and back-end
        development, creating robust and dynamic web applications. I have also
        delved into the realms of{" "}
        <span className="font-bold">cybersecurity and cloud computing</span>,
        acquiring valuable knowledge in securing digital assets and
        understanding the dynamics of cloud-based solutions. This
        interdisciplinary approach enhances my ability to design and implement
        holistic solutions that prioritize both functionality and security.As a
        forward-thinking and adaptable individual.
      </p>
      <p className="text-xl">
        I am <span className="font-bold">enthusiastic</span> about staying at
        the forefront of technological advancements. Feel free to explore my
        portfolio to get a glimpse of the projects I have undertaken, showcasing
        my problem-solving skills, creativity, and dedication to pushing the
        boundaries of what is possible in the world of technology.
      </p>
    </motion.section>
  );
}
