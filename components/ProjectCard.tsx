"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
      className="sm:mb-8 last:mb-0 mb-3 group"
    >
      <section
        className="bg-gray-100 max-w-[45rem] border border-black/5 
        relative overflow-hidden sm:pr-8 sm:h-[28rem] rounded-lg hover:bg-gray-200 transition
        sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div
          className="px-4 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 
        sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase 
              tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          className="absolute hidden sm:block top-10 -right-40 w-[28.25rem] rounded-t-lg 
        shadow-2xl h-300 group-even:right-[initial] group-even:-left-40
        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3 transition
        group-hover:scale-[1.04] 
        group-even:group-hover:-translate-y-3 group-even:group-hover:translate-x-3
        group-even:group-hover:rotate-3"
          src={imageUrl}
          alt="Project User Interface Image"
          quality={95}
        />
      </section>
    </motion.div>
  );
}
