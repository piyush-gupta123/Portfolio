"use client";

import Image from "next/image";
import React from "react";
import image from "@/public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[60rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={image}
              alt="Piyush Profile"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white 
                object-cover shadow-xl"
            />
            <motion.span
              className="text-4xl absolute bottom-0 right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 font-small text-m !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello there! I'm Piyush Gupta</span>, a
        recent graduate with a passion for exploring the vast world of computer
        science. As a <span className="font-bold">budding professional</span> in
        the field, my journey has been fueled by a relentless curiosity for
        technology and a commitment to turning ideas into reality through code.
      </motion.p>

      <motion.div className="flex flex-col sm:flex-row gap-4 px-4 text-lg font-medium items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 px-7 py-6 text-white flex items-center gap-2 rounded-full
           text-2xl border-2 cursor-pointer outline-none focus:scale-110 hover:scale-110 hover:bg-gray-900
           active:scale-105 transition group"
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a className="bg-white text-xl px-7 py-6 flex items-center gap-2 border-2 rounded-full cursor-pointer outline-none focus:scale-110 hover:scale-110 hover:bg-white
           active:scale-105 transition group" href="/Resume.pdf" download>
          Download Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a className="bg-white p-4 text-xl text-gray-700 flex items-center gap-2 rounded-full border-2 cursor-pointer outline-none focus:scale-110 hover:scale-110 hover:bg-white
           active:scale-105 transition group" href="https://www.linkedin.com/in/piyush-gupta-563047239/" target="_blank">
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full border-2
          text-[1.35rem] cursor-pointer outline-none focus:scale-110 hover:scale-110 hover:bg-white
          active:scale-105 transition group" href="https://github.com/piyush-gupta123" target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
