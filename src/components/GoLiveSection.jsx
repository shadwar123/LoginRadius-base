'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import codeImg1 from '../../public/assets/GoLive/Developers/Property1=Variant1.png';
import codeImg2 from '../../public/assets/GoLive/Developers/Property1=Variant2.png';
import codeImg3 from '../../public/assets/GoLive/Developers/Property1=Variant3.png';
import codeImg4 from '../../public/assets/GoLive/Developers/Property1=Variant4.png';
import codeImg5 from '../../public/assets/GoLive/Developers/Property1=Variant5.png';
import codeImg6 from '../../public/assets/GoLive/Developers/Property1=Variant6.png';
import codeImg7 from '../../public/assets/GoLive/Developers/Property1=Variant7.png';
import codeImg8 from '../../public/assets/GoLive/Developers/Property1=Variant8.png';
import codeImg9 from '../../public/assets/GoLive/Developers/Property1=Variant9.png';

import selfServiceImg1 from '../../public/assets/GoLive/Selfservice/Property1=Variant1.png';
import selfServiceImg2 from '../../public/assets/GoLive/Selfservice/Property1=Variant2.png';
import selfServiceImg3 from '../../public/assets/GoLive/Selfservice/Property1=Variant3.png';
import selfServiceImg4 from '../../public/assets/GoLive/Selfservice/Property1=Variant4.png';
import selfServiceImg5 from '../../public/assets/GoLive/Selfservice/Property1=Variant5.png';
import selfServiceImg6 from '../../public/assets/GoLive/Selfservice/Property1=Variant6.png';
import selfServiceImg7 from '../../public/assets/GoLive/Selfservice/Property1=Variant7.png';
import selfServiceImg8 from '../../public/assets/GoLive/Selfservice/Property1=Variant8.png';

import coding from '../../public/assets/coding.gif';
import stars from '../../public/assets/stars.gif';
import gears from '../../public/assets/gears.gif';
import click from '../../public/assets/click.gif';


export default function GoLiveSection() {

  const bigstar = '/assets/GoLive/bigstar.png'
  const bigScrew = '/assets/GoLive/Screw/settings2.png'
  const smallScrew1 = '/assets/GoLive/Screw/settings1.png'
  const smallScrew2 = '/assets/GoLive/Screw/settings3.png'

  const codeImages = [
    codeImg1,
    codeImg2,
    codeImg3,
    codeImg4,
    codeImg5,
    codeImg6,
    codeImg7,
    codeImg8,
    codeImg9,
  ];
  
const selfService = [
  selfServiceImg1,
  selfServiceImg2,
  selfServiceImg3,
  selfServiceImg4,
  selfServiceImg5,
  selfServiceImg6,
  selfServiceImg7,
  selfServiceImg8,
];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currSelfImageIndex, setCurrSelfImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === codeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrSelfImageIndex((prevIndex) =>
        prevIndex === selfService.length - 1 ? 0 : prevIndex + 1
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black py-20 text-white max-w-1000">
      <div className="container mx-auto px-4 sm:px-0 text-center">
        <p className="text-textcolor text-base uppercase tracking-wide sm:mt-16 mb-2 sm:mb-5">Go Live</p>
        <h2 className="text-4xl font-bold mb-6 tracking-wide">
          Go-live on Production within minutes, Not months
        </h2>

        <button className="bg-buttonColor hover:bg-buttonHover text-textBlue py-2 px-6 rounded-lg mb-12">
          Start now
        </button>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-14 lg:mb-12">
          {/* Feature 1 */}
          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 p-4 pt-10 rounded-lg justify-center">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-700 bg-opacity-50"></div>
            <div className='max-w-[150px]'>
              <Image
                src={coding}
                alt={`coding`}
                objectFit="contain"
                className="rounded-lg shadow-lg"
                width={270}
                height={270}
              />
            </div>
            <div>
              <h3 className="text-2xl font-poppins mb-2 text-center sm:text-left leading-[24px]">Built for Developers</h3>
              <p className="text-gray-400 text-center sm:text-left">
                All features & capabilities are available through APIs, making implementation
                straightforward.
              </p>
            </div>
          </div>


          {/* Feature 2 */}
          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 pt-10 rounded-lg  justify-center">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-700 bg-opacity-50"></div>
            <div className='max-w-[150px]'>
              <Image
                src={click}
                alt={`click`}
                objectFit="contain"
                className="rounded-lg shadow-lg"
                width={280}
                height={280}
              />
            </div>
            <div>
              <h3 className="text-2xl font-poppins mb-2 text-center sm:text-left leading-[24px]">Self-serve Platform</h3>
              <p className="text-gray-400 text-center sm:text-left">
                With our extensive developer documentation and intuitive dashboard, you can
                seamlessly manage everything yourself.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 pt-10 rounded-lg  justify-center">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-700 bg-opacity-50"></div>
            <div className='max-w-[150px]'>
              <Image
                src={gears}
                alt={`gears`}
                objectFit="contain"
                className="rounded-lg shadow-lg"
                width={280}
                height={280}
              />
            </div>
            <div>
              <h3 className="text-2xl font-poppins mb-2 text-center sm:text-left leading-[24px]">One stop shop</h3>
              <p className="text-gray-400 text-center sm:text-left">
                No need to search for another solution. Our platform meets all your customer
                identity requirements.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 pt-10 rounded-lg justify-center">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-700 bg-opacity-50"></div>
            <div>

              <div className='max-w-[150px]'>
                <Image
                  src={stars}
                  alt="Twinkling stars"
                  width={250}
                  height={250}
                  objectFit="contain"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-poppins mb-2 text-center sm:text-left leading-[24px]">Best-in-class Support</h3>
              <p className="text-gray-400 text-center sm:text-left">
                With timely updates, our friendly support team helps you satisfactorily resolve any
                issues you may face.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
