'use client'

import React from 'react'
import Theme from '../../Components/Theme'
import Link from 'next/link'
import Image from 'next/image'
import Prezzie1 from '../../Assets/present.jpg'
import Prezzie2 from '../../Assets/Present2.png'
import Bella1 from '../../Assets/Bella1.jpg'
import Bella2 from '../../Assets/Bella2.jpg'
import Bella3 from '../../Assets/Bella3.jpg'
import Bella4 from '../../Assets/Bella4.jpg'
import Bella5 from '../../Assets/Bella5.jpg'
import PresentStack from '../../Assets/PresentStack.png'
import blackmail from '../../Assets/BellaBlackmail.jpg'
import penguinPresent from '../../Assets/penguinPresent.webp'

const Present = () => {
  return (
    <main className="flex flex-col"data-theme={Theme}>
      <Link href="/">
      <button className="backButton ml-5 mt-5">
        <span className="circle1"></span>
        <span className="circle2"></span>
        <span className="circle3"></span>
        <span className="circle4"></span>
        <span className="circle5"></span>
        <span className="text">Back</span>
      </button>
      </Link>
      <article className= "flex flex-col w-full justify-center items-center bg-slate-100 pt-6 pb-6 mt-6">
          <p className=' lg:text-6xl md:6xl text-4xl text-primary font-bold underline underline-offset-auto'>Happy Birthday!</p>
          <p className=" xl:text-xl md:text-base text-sm lg:text-l text-neutral italic w-3/5 mt-4"> 
          Happy Birthday Bella!
          Ik we kinda just met this year but I like doing things like this for people I care about on their first birthdays with me. 
          I know I talk about CS sometimes and you prolly don't understand much of it but I wanted 
          to make something for you and this is the best way I could think of doing it 😃. 
          Anyway, I hope everything goes great for you today. Go somewhere, eat cake 🎉🎂🧁 or smth, or read 📖📚, have fun shortie 🍻🍻.
          </p>
          <Link href="/pages/picture-thingy">
            <button className="homeButton mt-8">Hope you like this -&gt; </button>
          </Link>
          
      </article>

      <div className="flex flex-row justify-between items-center">

        <div className=" w-[20%] xl:visible lg:visible invisible opacity-90 hover:opacity-100">
          <Image
          src={PresentStack}
          alt=''/>

        </div>

        <div className=" relative w-[22.5%] xl:visible lg:visible invisible opacity-90 hover:opacity-100">
          <Image
          src={Bella5}
          className='rounded-lg'
          alt=''/>
          <p> This picture is so good ^^^</p>
        </div>


      <div className="xl:visible lg:visible invisible w-[30%] opacity-90 hover:opacity-100">
          <Image
          src={blackmail}
          className='rounded-lg'
          alt=''/>

        </div>

        </div>
      
      <Image
      src={penguinPresent}
      width={100}
      height={200}
      alt=''
      />
      <p className="">^ This is penguin. He's got a gift.</p>


      
    </main>
    

  )
}

export default Present
