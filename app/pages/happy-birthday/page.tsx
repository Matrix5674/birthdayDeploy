'use client'

import Image from "next/image";
import Theme from "../../Components/Theme";
import AnimatedText from "../../Components/AnimatedText";
import Link from "next/link";
import present from './Assets/present.jpg'
import {motion} from 'framer-motion'
import { relative } from "path";

export default function HappyBirthday() {
  return (
    <main data-theme={Theme} className="flex flex-col justify-center items-center h-screen background">
        <div className="flex flex-col justify-center bg-cyan-100 rounded-3xl hover:scale-110 hover:bg-blue-200 transition-all p-8 items-center">
        <AnimatedText className=" xl:text-8xl text-2xl md:text-4xl lg:text-6xl font-bold text-primary text-center align-middle " once text="Happy Birthday!" speed={0.1} />
        <AnimatedText className="xl:text-3xl sm:text-sm md:text-lg lg:text-xl  font-bold text-secondary text-center align-middle mt-4" once text="(srry i forgot ur name)" speed={0.1} />
        <Link href="/pages/present">
          <motion.button animate={{opacity:0.75}} transition={{duration:4}} className="homeButton mt-6 opacity-0 hover:opacity-100">Surprise!</motion.button>
        </Link>
      </div>
      
      </main>
  );
}

