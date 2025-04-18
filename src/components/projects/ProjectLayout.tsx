import React, { useState } from "react";
import { ProjectListType } from "@/types";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectLayout({
  name,
  subHeading,
  description,
  techStack,
  demoLink,
  sourceLink,
}: ProjectListType) {
  const [dropDown, SetDropDown] = useState(false);
  return (
    <div className="relative w-full">
      <button
        onClick={() => SetDropDown(!dropDown)}
        className="text-sm md:text-base flex items-center justify-between w-full rounded-lg overflow-hidden p-4 md:p-6 custom-bg transition transform"
      >
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-foreground">{name}</h2>
          <div className="text-grey-500">
          <p className="text-normal  ">({subHeading})</p>
          </div>
        </div>
        <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted hidden sm:inline-block" />

        <span className="text-muted sm:text-foreground">
          {dropDown ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      <AnimatePresence>
        {dropDown && (
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "2%" }}
            exit={{ y: "0%" }}
            transition={{ duration: 0.2 }}
            className="w-full mt-2 overflow-hidden text-sm md:text-base flex items-center justify-between rounded-lg p-4 md:p-6 custom-bg"
          >
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Description</h3>
              <p className="font-normal">{description}</p>
              <h3 className="font-bold mt-4 text-lg">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="mt-2 inline-block bg-pink-300 text-black px-2 py-1  rounded-full text-xs font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link href={demoLink} target="_blank">
                  <span className="inline-block px-4 py-2 border border-green-1000 text-blue-300 rounded hover:bg-blue-900 hover:text-white  transition-colors duration-200">
                    Demo
                  </span>
                </Link>
                <Link href={sourceLink} target="_blank">
                  <span className="ml-2 inline-block px-4 py-2 border border-green-1000 text-blue-300 rounded hover:bg-blue-900 hover:text-white transition-colors duration-200">
                    Source Code
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectLayout;