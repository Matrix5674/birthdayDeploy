'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import penguinPresent from '../../Assets/penguinPresent.webp';
import Theme from '../../Components/Theme';
import AnimatedText from '@/app/Components/AnimatedText';

const LoadingPage = () => {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = "/pages/happy-birthday"; // Replace with your desired URL
    }, 4000); // Replace 7000 with the desired delay in milliseconds

    return () => clearTimeout(redirectTimeout); // Clean up the timeout when the component unmounts
  }, []); // Empty dependency array to run the effect only once on component mount
  
  return (
    <div data-theme={Theme} className='flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#e8f7fb]'>
      <div className="w-full bg-slate-100 pt-[2%] pb-[2%] flex items-center justify-center h-full">
        <AnimatedText className='xl:text-5xl lg:text-4xl md:3xl text-xl text-yellow-400 font-bold font-BirthdayKR' text='Loading...' once={false} speed={0.1}/>
      </div>
      <div className="w-full moveRightComponent">
        <Image
          src={penguinPresent}
          className='w-[25%]'
          alt=''
        />
      </div>
    </div>
  );
}

export default LoadingPage;
