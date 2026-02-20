'use client'
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useState, useEffect } from "react";
import companyLogo1 from '../../public/assets/TechStack/open ai 1.png';
import companyLogo2 from '../../public/assets/TechStack/google-gemini-icon 1.svg';
import companyLogo3 from '../../public/assets/TechStack/image 23.svg';
import companyLogo4 from '../../public/assets/TechStack/image 26.svg';
import companyLogo5 from '../../public/assets/TechStack/image 27.svg';
import companyLogo6 from '../../public/assets/TechStack/image 28.svg';
import companyLogo7 from '../../public/assets/TechStack/image 29.svg';
import companyLogo8 from '../../public/assets/TechStack/image 30.svg';
import companyLogo9 from '../../public/assets/TechStack/image 32.svg';
import companyLogo10 from '../../public/assets/TechStack/image 33.svg';
import companyLogo11 from '../../public/assets/TechStack/image33.svg';
import companyLogo111 from '../../public/assets/TechStack/image 46.svg';
import companyLogo12 from '../../public/assets/TechStack/2/image 138.svg';
import companyLogo13 from '../../public/assets/TechStack/2/image 139.svg';
import companyLogo14 from '../../public/assets/TechStack/2/image 140.svg';
import companyLogo15 from '../../public/assets/TechStack/2/image 141.svg';
import companyLogo16 from '../../public/assets/TechStack/2/image 142.svg';
import companyLogo17 from '../../public/assets/TechStack/2/image 143.svg';
import companyLogo18 from '../../public/assets/TechStack/2/image 144.svg';
import companyLogo19 from '../../public/assets/TechStack/2/image 145.svg';
import companyLogo20 from '../../public/assets/TechStack/2/image 146.svg';
import companyLogo21 from '../../public/assets/TechStack/2/image 147.svg';
import companyLogo22 from '../../public/assets/TechStack/2/image 148.svg';
import companyLogo23 from '../../public/assets/TechStack/2/image 149.svg';


const TechStack = () => {

    const [direction, setDirection] = useState("left");
    const [isOpposite, setIsOpposite] = useState(false); 
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsOpposite((prev) => !prev); 
        setDirection((prevDirection) => {
          
          if (prevDirection === "left") return "right";
          return "left";
        });
      }, 6000); 
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="mt-16 mb-16 items-center max-w-1000 ">
      <div className="w-full  flex flex-col justify-center items-center bg-black sm:mb-14">
        <h1 className="text-center  text-4xl text-white   mb-10">
          We support your Tech Stack
        </h1>
        <Marquee
          pauseOnHover
          gradient={false}
          speed={150} 
          delay={5}
          direction={direction}
        >
          <div className="flex space-x-14 mb-18">
            
            <Image className='ml-9 h-10 sm:h-20 w-10 sm:w-20' src={companyLogo3} alt="Company 3" />
            <Image src={companyLogo4} alt="Company 4"  className='h-10 sm:h-20 w-10 sm:w-20'/>
            <Image src={companyLogo5} alt="Company 5" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo6} alt="Company 6" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo7} alt="Company 7" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo8} alt="Company 8" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo1} alt="Company 1" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo9} alt="Company 9" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo10} alt="Company 10" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo2} alt="Company 11" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo11} alt="Company 12" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image  src={companyLogo111} alt="Company 13" className='h-10 sm:h-20 w-10 sm:w-20' />

          </div>
        </Marquee>
        <Marquee
          pauseOnHover
          gradient={false}
          speed={150} 
          delay={5}
          direction={isOpposite ? (direction === "left" ? "right" : "left") : direction}
        >
          <div className="flex space-x-14 mt-20 ">
            <Image src={companyLogo12} alt="Company 13" className='ml-9 h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo13} alt="Company 14" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo14} alt="Company 15" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo15} alt="Company 16" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo16} alt="Company 17" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo17} alt="Company 18" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo18} alt="Company 19" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo19} alt="Company 20" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo20} alt="Company 20" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo21} alt="Company 20" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo22} alt="Company 20" className='h-10 sm:h-20 w-10 sm:w-20' />
            <Image src={companyLogo23} alt="Company 20" className='h-10 sm:h-20 w-10 sm:w-20' />

          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
