'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MdArrowForward } from "react-icons/md";
const HeroContent = () => {

  const headingsRef = useRef([]);
  useEffect(() => {
    let index = 0;
    const cycleHeadings = () => {
      const h1s = headingsRef.current;
      gsap.set(h1s[index], { top: '0%' });
      const nextIndex = (index + 1) % h1s.length;
      gsap.to(h1s[index], {
        top: '-100%',
        ease: 'expo.inOut',
        duration: 1,
      });
      gsap.set(h1s[nextIndex], { top: '100%' });
      gsap.to(h1s[nextIndex], {
        top: '0%',
        ease: 'expo.inOut',
        duration: 1,
        onComplete: () => {
          index = nextIndex;
        },
      });
    };

    const interval = setInterval(cycleHeadings, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-center py-10 sm:py-14 bg-black text-white">
      <p className="text-lg tracking-wide px-3 sm:px-0 sm:text-[24px] uppercase mb-4 sm:mt-5 sm:mb-8">You want anything identity? We have it.</p>

      <div className="elem text-9xl relative overflow-hidden flex justify-center items-center h-10 sm:h-20">
        {/* Reference each heading using ref */}
        <h1 ref={(el) => (headingsRef.current[0] = el)} className="text-4xl sm:text-7xl font-bold text-transparent flex justify-center items-center bg-clip-text bg-gradient-to-r to-blue-500 from-white absolute top-0 transition-transform duration-2000 ease-in">
          AUTHENTICATION
        </h1>
        <h1 ref={(el) => (headingsRef.current[1] = el)} className="text-4xl sm:text-7xl font-bold text-transparent flex justify-center items-center bg-clip-text bg-gradient-to-r to-blue-500 from-white absolute top-full transition-transform duration-2000 ease-in">
          AUTHORIZATION
        </h1>
        <h1 ref={(el) => (headingsRef.current[2] = el)} className="text-4xl sm:text-7xl font-bold text-transparent flex justify-center items-center bg-clip-text bg-gradient-to-r to-blue-500 from-white absolute top-full transition-transform duration-2000 ease-in">
          ACCOUNT SECURITY
        </h1>
        <h1 ref={(el) => (headingsRef.current[3] = el)} className="text-4xl sm:text-7xl font-bold text-transparent flex justify-center items-center bg-clip-text bg-gradient-to-r to-blue-500 from-white absolute top-full transition-transform duration-2000 ease-in">
          USER MANAGEMENT
        </h1>
      </div>

      <div className="overflow-hidden h-16 sm:h-24 mb-1 sm:mb-4">
        <h1 className=" sm:text-7xl scale-110 text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r text-white mb-4 top-full">for your apps.</h1>
      </div>

      <p className="text-lg sm:text-2xl text-textBlue mb-4 sm:mb-5 px-1 sm:px-0 sm:space-y-4">
        <span>Whether you have millions of users or hundreds of apps,</span><br />
        <span className="text-blue-600 font-semibold">Loginradius platform</span> is your one-stop shop for<br />
        <span>all-things-identity.</span>
      </p>


      <div className="flex flex-row justify-center sm:space-y-0 sm:space-x-4 mt-0 sm:mt-16 px-1 sm:px-0">
        <button className="flex group justify-center items-center text-sm sm:text-2xl bg-[#3D63DD] text-textBlue px-3 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl hover:bg-buttonHover"
          onClick={() => window.open('https://www.loginradius.com/book-a-demo/', '_blank')}
        >
          Free Trial<MdArrowForward className='text-xs sm:text-base ml-1 sm:ml-3 transform transition-transform duration-200 group-hover:translate-x-1' />
        </button>


        <div className='group ml-2 sm:ml-0'>
          <button
            className="flex justify-center items-center border border-none text-sm sm:text-2xl text-white px-2 py-2 sm:py-3 sm:px-6 mt-0 hover:text-buttonHover"
            onClick={() => window.open('https://www.loginradius.com/docs/', '_blank')}
          >
            <span className="transform transition-transform duration-200 group-hover:-translate-x-1">
              Explore Developer Docs
            </span>
            <MdArrowForward className='text-xs sm:text-base ml-1 sm:ml-3 transform transition-transform duration-200 group-hover:translate-x-1' />
          </button>
        </div>


      </div>
    </div>
  );
};

export default HeroContent;
