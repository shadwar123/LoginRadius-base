'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward } from "react-icons/md";

const Industries = ({ data }) => {
  const colors = [
    'bg-[#92DAEC]',
    'bg-[#D4FF9D]',
    'bg-[#EF938B]',
    'bg-[#8F605C]',
    'bg-[#1A4651]',
    'bg-[#799555]',
    'bg-[#EF938B]',
    'bg-[#92DAEC]',
    'bg-[#D4FF9D]',
  ];

  // State for individual card hover
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    <>
      <div className="max-w-1000 flex justify-center px-5 sm:px-10">
        <div className="flex flex-col justify-center mt-24 items-center">
          <p className="text-base text-textcolor">{data.heading}</p>
          <div className="text-2xl sm:text-4xl flex bold justify-center items-center mt-5">
            <h1 className="text-center">{data.subheading}</h1>
          </div>
        </div>
      </div>

      <div className="container max-w-1000 px-5 sm:px-0 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
          {data.cards.map((card, index) => {
            return (
              <div
                key={index}
                className={`flex group px-6 py-6 sm:py-8 sm:px-8 rounded-lg shadow-md h-[274px] min-w-[260px] ${colors[index % colors.length]}`}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}

              >
                {/* Left Section */}
                <div className="flex flex-col justify-between w-2/3 py-6">
                  <span
                    className={`text-fontbtw font-extrathin leading-snug ${index >= 3 && index < 6 ? 'text-white' : 'text-[#303136]'}
                              sm:whitespace-normal sm:break-words space-y-2 opacity-100`}
                  >
                    {card.header}
                  </span>
                  <Link href="/" className={`flex items-center text-large font-littlelarge ${index >= 3 && index < 6 ? 'text-white' : 'text-[#303136]'}`}>
                    Learn More <MdArrowForward className='text-base ml-1 sm:ml-3 transform transition-transform duration-200 group-hover:translate-x-1' />
                  </Link>
                </div>

                {/* Right Section */}
                <div className="w-1/3 flex justify-end items-end relative">
                  {/* First Image */}
                  <Image
                    src={card?.imageUrl}
                    alt={`Image for ${card.header}`}
                    width={100}
                    height={100}
                    className={`rounded-lg object-cover transition-opacity duration-700 ease-in-out ${hoveredCardIndex === index ? 'opacity-0' : 'opacity-100'}`}
                  />

                  {/* Second Image */}
                  <Image
                    src={card?.imageUrl2}
                    alt={`Image for ${card.header}`}
                    width={100}
                    height={100}
                    className={`absolute bottom-0 right-0 rounded-lg object-cover transition-opacity duration-700 ease-in-out ${hoveredCardIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Industries;
