// components/HomePage.js
'use client';
import Image from 'next/image';
import { useState,useEffect } from 'react';
import Logo from '../../../public/assets/opulent.png';
import BackgroundImage from '../../../public/assets/comingsoon.jpg';

import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaYoutube } from 'react-icons/fa';


import './HomePage.css';
import CommingSoonForm from './CommingSoonForm';

export default function HomePage() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-07-31T23:59:59'); // Set your target date and time here
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-[1440px] h-[740px] overflow-hidden">
      
      {/* Background Image */}
      
      <Image
        src={BackgroundImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute w-full h-full"
      />
<div className="absolute w-full h-full bg-black opacity-65"></div>
 


      {/* Logo Container */}
      <div className="absolute w-[212px] h-[212px] top-[16px] left-[64px] flex items-center justify-center">
  <Image
    src={Logo}
    alt="Logo"
    width={200}
    height={200}
    className="object-contain absolute z-10"
  />
</div>

      {/* Title */}
      <div className="absolute w-[597px] h-[126px] top-[270px] left-[98px]">
        <h3 className="text-5xl text-[#FFDD55] font-bold font-montserrat">WE ARE</h3>
        <br />
        <h1 className="text-7xl text-[#ffffff] font-bold font-montserrat">COMING SOON</h1>
      </div>

      {/* Contact Us Title */}
      <div className="absolute top-[101px] left-[999px]">
        <h2 className="text-[20px] font-bold  font-sans text-[#FFDD55]">CONTACT US</h2>
      </div>


{/* contact us form */}
 <CommingSoonForm/>

      <div className="absolute w-[395px] h-[55px] top-[596px] left-[869px]  flex items-center justify-evenly">
        {/* Placeholder content or social icons */}
        <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-black bg-opacity-50 transition duration-300 ease-in-out hover:bg-opacity-40">
        <FaFacebook className="text-white" size={24} />
      </a>
      <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-black bg-opacity-50 transition duration-300 ease-in-out hover:bg-opacity-40">
      <FaInstagram className="text-white" size={24} />
      </a>
      <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-black bg-opacity-50 transition duration-300 ease-in-out hover:bg-opacity-40">
      <FaLinkedin className="text-white" size={24} />
      </a>
      <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-black bg-opacity-50 transition duration-300 ease-in-out hover:bg-opacity-40">
      <FaPinterest className="text-white" size={24} />
      </a>
      <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-black bg-opacity-50 transition duration-300 ease-in-out hover:bg-opacity-40">
      <FaYoutube className="text-white" size={24} />
      </a>
   
      </div>

      {/* Stopwatch Layout */}
      <div className="absolute w-[503px] h-[100px] top-[485px] left-[98px] flex justify-between items-center">
  <div className="text-center border border-white text-[#ffffff] p-2 w-[100px] h-[100px] flex flex-col justify-center items-center">
    <div className='h-[62px] w-[46px] '>
    <p className="text-[32px] font-[Rubik] font-medium leading-[24px] tracking-[3.98px] text-white w-[46px]">
      {timeLeft.days || '00'}
    </p>
    <h3 className="text-[12px] font-[Rubik] font-medium leading-[24px] tracking-[3.98px] pt-4">
      DAYS
    </h3>
    </div>
  </div>
  <div className="text-[#ffffff] text-2xl w-[4px] h-[24px]">:</div>
  <div className="text-center border border-white text-[#ffffff] p-2 w-[100px] h-[100px] flex flex-col justify-center items-center">
    <p className="text-[32px] font-[Rubik] font-medium leading-[24px] tracking-[3.98px] text-white w-[46px]">
    {timeLeft.hours || '00'}
    </p>
    <h3 className="text-[12px] font-[Rubik] font-medium leading-[24px] tracking-[3.98px] pt-4">      HOURS
    </h3>
  </div>
  <div className="text-[#ffffff] text-2xl w-[4px] h-[24px]">:</div>
  <div className="text-center border border-white text-[#ffffff] p-2 w-[100px] h-[100px] flex flex-col justify-center items-center">
    <p className="text-[32px] font-[Rubik] font-medium leading-[24px] tracking-[3.98px] text-white w-[46px]">
    {timeLeft.minutes || '00'}
    </p>
    <h3 className="text-[12px] font-[Rubik] font-medium leading-[24px] tracking-[3.98px] pt-4">      MINUTES
    </h3>
  </div>
  <div className="text-[#ffffff] text-2xl w-[4px] h-[24px]">:</div>
  <div className="text-center border border-white text-[#ffffff] p-2 w-[100px] h-[100px] flex flex-col justify-center items-center">
    <p className="text-[32px] font-[Rubik] font-medium leading-[24px] tracking-[3.98px] text-white w-[46px]">
    {timeLeft.seconds || '00'}
    </p>
    <h3 className="text-[12px] font-[Rubik] font-medium leading-[24px] tracking-[3.98px] pt-4">      SECONDS
    </h3>
  </div>
</div>

    </div>
  );
}
