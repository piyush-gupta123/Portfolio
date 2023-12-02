"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/serverActions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please Contact me at{" "}
        <a href="mailto:piyushgupta9758@gmail.com" className="underline">
          piyushgupta9758@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form action={async (formData)=>await sendEmail(formData)} className="mt-10 flex flex-col">
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group flex gap-2 items-center justify-center first-letter h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110
          active:scale-105 hover:bg-gray-950 "
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:transalate-x-1 group-hover:-transalate-y-1 cursor-pointer" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
