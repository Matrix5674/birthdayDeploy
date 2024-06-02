'use client'

import Image from "next/image";
import Theme from "./Components/Theme";
import AnimatedText from "./Components/AnimatedText";
import Link from "next/link";
import present from './Assets/present.jpg'
import {motion} from 'framer-motion'
import useCountdown from "./Hooks/useCountdown";


export default function Home() {
  return (
    <main data-theme={Theme} className="flex flex-col justify-center items-center h-screen pageBackground">
      <Link href="/pages/loading">
        <button className= "pageButton" >
          <span className="text-xl font-bold text-yellow-400">Open</span>
          </button>
        </Link>
      </main>
  );
}
